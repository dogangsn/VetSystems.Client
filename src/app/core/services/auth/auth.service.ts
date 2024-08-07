import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { EmailValidator } from '@angular/forms';
import { HttpService } from 'app/core/auth/Http.service';
import { endPoints } from 'environments/endPoints';
import { environment } from 'environments/environment';
import { RolsService } from '../generalsettings/rols/rols.service';
// import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';
// import { RoleService } from '../settings/role.service';

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;

    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private httpService: HttpService,
        private _roleService: RolsService
    ) 
    {}

    set accessToken(token: string) {
        debugger
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post(endPoints.auth.forgotPassword, email);
    }

    resetPassword(password: string): Observable<any> {
        return this._httpClient.post(endPoints.auth.resetPassword, password);
    }

    async getSidebarNavigations(): Promise<void> {
        const model = {
            all: false
        };
        const navigation = await this._roleService.getNavigation(model).toPromise();


        debugger;
        localStorage.setItem('navigation', JSON.stringify(navigation.data));

        if (navigation.data.length === 0) {
            throw new Error('You do not have a any licance');
        }
    }

    async getActionSettings(): Promise<void> {
        const action = await this._roleService.getUserRolSettings().toPromise();

        debugger;
        localStorage.setItem('actions', JSON.stringify(action.data));
    }

    signIn(credentials: { email: string; password: string; rememberMe: boolean }): Observable<any> {
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }
        const user = {
            userName: credentials.email,
            password: credentials.password,
        };

        if (environment.IsApiConnect) {
            return this.httpService.signIn(endPoints.auth.signIn, user).pipe(
                switchMap(async (response: any) => {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('defaultLanguages');
                    localStorage.removeItem('enterprise');
                    localStorage.removeItem('activeLang');
                    this.accessToken = response.access_token;
                    this._authenticated = true;
                    debugger;
                    this._userService.user = response.user;
                    await this.getSidebarNavigations();
                    await this.getActionSettings();
                    return of(response);
                })
            );
        }else {
            return this._httpClient.post('api/auth/sign-in', credentials).pipe(
                switchMap((response: any) => {
                    // Store the access token in the local storage
                    this.accessToken = response.accessToken;
                    // Set the authenticated flag to true
                    this._authenticated = true;
                    // Store the user on the user service
                    this._userService.user = response.user;
                    // Return a new observable with the response
                    return of(response);
                })
            );
        }
    }

    isLoggedIn(): boolean {
        if (localStorage.getItem('accessToken')) {
            return true;
        }

        return false;
    }

    signInUsingToken(): Observable<any> {
        // Renew token
        debugger
        return this._httpClient
            .post(endPoints.auth.signInUsingToken, {
                accessToken: this.accessToken,
            })
            .pipe(
                catchError(() =>
                    // Return false
                    of(false)
                ),
                switchMap((response: any) => {
                    if (response) {
                        console.log(response.accessToken);
                    // Store the access token in the local storage
                    this.accessToken = response.accessToken;

                    // Set the authenticated flag to true
                    this._authenticated = true;

                    // Store the user on the user service
                    this._userService.user = response.user;
                    }
                    

                    // Return true
                    return of(response);
                })
            );
    }

    signOut(): Observable<any> {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    signUp(user: {
        name: string;
        email: string;
        password: string;
        company: string;
    }): Observable<any> {
        const path = endPoints.auth.signUp;
        const newUser = {
            userName: user.email,
            email: user.email,
            password: user.password,
            companyId: user.company,
        };
        return this.httpService.signUp(path, newUser);
    }

    unlockSession(credentials: {
        email: string;
        password: string;
    }): Observable<any> {
        return this._httpClient.post(endPoints.auth.unlockSession, credentials);
    }

    check(): Observable<boolean> {
        console.log(this._authenticated);
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        // Check the access token expire date
        if (AuthUtils.isTokenExpired(this.accessToken)) {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
