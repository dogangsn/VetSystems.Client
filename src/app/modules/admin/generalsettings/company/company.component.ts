import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector       : 'settings-company',
    templateUrl    : './company.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsCompanyComponent implements OnInit
{
    accountForm: UntypedFormGroup;

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.accountForm = this._formBuilder.group({
            name    : [''],
            username: [''],
            title   : [''],
            company : [''],
            about   : [''],
            email   : ['', Validators.email],
            phone   : [''],
            country : [''],
            language: [''],
            communication: [true],
            security     : [true],
            meetups      : [false],
            comments     : [false],
            mention      : [true],
            follow       : [true],
            inquiry      : [true]
        });
    }
}