import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuppliersComponent } from './suppliers.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseCardModule } from '@fuse/components/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

const root: Route[] = [
    {
        path     : '',
        component: SuppliersComponent
    }
];

@NgModule({

    imports     : [
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        FuseCardModule,
        MatMenuModule,
        FormsModule,
        MatTableModule,
        RouterModule.forChild(root)
    ],
    declarations: [
        SuppliersComponent
    ]
    
})
export class SuppliersModule
{
}