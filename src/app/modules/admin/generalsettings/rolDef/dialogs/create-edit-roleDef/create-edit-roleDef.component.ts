import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    MatTreeFlattener,
    MatTreeFlatDataSource,
} from '@angular/material/tree';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { TranslocoService } from '@ngneat/transloco';
import { RolsService } from 'app/core/services/generalsettings/rols/rols.service';
import {
    compactNavigation,
    defaultNavigation,
    futuristicNavigation,
    horizontalNavigation,
} from 'app/mock-api/common/navigation/data';
import { CreateRoleSettingCommand } from '../../models/CreateRoleSettingCommand';
import { SelectedNavigationDto } from '../../models/SelectedNavigationDto';
import { SweetAlertDto } from 'app/modules/bases/models/SweetAlertDto';
import { SweetalertType } from 'app/modules/bases/enums/sweetalerttype.enum';
import { GeneralService } from 'app/core/services/general/general.service';
import { SelectedActionsDto } from '../../models/SelectedActionsDto';

interface FoodNode {
    title: string;
    id: string;
    children?: FoodNode[];
    checked: boolean;
}
interface ExampleFlatNode {
    expandable: boolean;
    title: string;
    level: number;
    id: string;
    checked: boolean;
}


@Component({
    selector: 'app-create-edit-roleDef',
    templateUrl: './create-edit-roleDef.component.html',
    styleUrls: ['./create-edit-roleDef.component.css'],
})
export class CreateEditRoleDefComponent implements OnInit {
    private _defaultNavigation: any[] = defaultNavigation;
    selectedrole: string;
    roles: FormGroup;
    selectedItems: string[] = [];
    selectedItemsTitle: string[] = [];

    rolesAction: any[];

    loader = true;
    allNodesChecked: boolean = false; 
    selectedNodes: any[] = [];

    selectedNodeActions: { [nodeId: string]: string } = {};
    defaultRole: string;
    

    private _transformer = (node: FoodNode, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            title: node.title,
            level: level,
            id: node.id,
            children: node.children,
            checked: false,
        };
    };

    treeControl = new FlatTreeControl<ExampleFlatNode>(
        (node) => node.level,
        (node) => node.expandable
    );

    treeFlattener = new MatTreeFlattener(
        this._transformer,
        (node) => node.level,
        (node) => node.expandable,
        (node) => node.children
    );

    dataSource = new MatTreeFlatDataSource(
        this.treeControl,
        this.treeFlattener
    );


    
    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

    constructor(
        private _dialogRef: MatDialogRef<any>,
        private _formBuilder: FormBuilder,
        private _translocoService: TranslocoService,
        private _rolsSettings : RolsService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.dataSource.data = this._defaultNavigation;
        console.log(defaultNavigation);

 

    }

    ngOnInit() {

        this.rolesAction = [
            {
                label      : 'Yazma',
                value      : 'Yazma',
                description: 'Tüm işlemler yapılabilir.'
            },
            {
                label      : 'Okuma',
                value      : 'Okuma',
                description: 'Sadece okuma işlemleri yapılabilir. Ekleme, güncelleme ve silme işlemleri yapılamaz.'
            }
        ];

        this.defaultRole = this.rolesAction.length > 0 ? this.rolesAction[0].value : '';
        this.roles = this._formBuilder.group({
            rolecode: ['', Validators.required],
            mainpage: ['', Validators.required],
            role: [this.defaultRole, Validators.required]
        });

        

        this.loader = false;

    }

    addOrUpdateRole(): void {
        this.selectedrole ? this.updateRols() : this.addRols();
    }

    addRols(): void {

        debugger;

        const rolsItem = new CreateRoleSettingCommand();
        rolsItem.rolecode = this.getFormValueByName("rolecode");
        rolsItem.mainpage = this.getFormValueByName("mainpage");
        rolsItem.installdevice = true;
    
        rolsItem.SelectedNavigations = [];
        rolsItem.SelectedActions=[];
        this.selectedNodes.forEach((node) => {
            const selectedNavDto = new SelectedActionsDto(
              node.id, 
              this.selectedNodeActions[node.id] || null
            );
            rolsItem.SelectedActions.push(selectedNavDto);
          });

        this.selectedItems.forEach((nav) => {
            const selectedNavDto  = new SelectedNavigationDto(nav, null);
            rolsItem.SelectedNavigations.push(selectedNavDto);
        });

        this._rolsSettings.createRols(rolsItem).subscribe(
            (response) => {
                debugger;

                if (response.isSuccessful) {
                    this.showSweetAlert('success');
                    this._dialogRef.close({
                        status: true,
                    });
                } else {
                    this.showSweetAlert('error');
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    showSweetAlert(type: string): void {
        if (type === 'success') {
            const sweetAlertDto = new SweetAlertDto(
                this.translate('sweetalert.success'),
                this.translate('sweetalert.transactionSuccessful'),
                SweetalertType.success
            );
            GeneralService.sweetAlert(sweetAlertDto);
        } else {
            const sweetAlertDto = new SweetAlertDto(
                this.translate('sweetalert.error'),
                this.translate('sweetalert.transactionFailed'),
                SweetalertType.error
            );
            GeneralService.sweetAlert(sweetAlertDto);
        }
    }
    translate(key: string): any {
        return this._translocoService.translate(key);
    }


    updateRols(): void {

    }

    closeDialog(): void {
        this._dialogRef.close({ status: null });
    }

    treeControlbyItem(e): void {
        debugger;
    }
    nodeSelectionToggle(node: any, checked: boolean) {
        if (!node.children) {
            if (checked) {
                this.selectedNodes.push(node);
                this.selectedItems.push(node.id);
                this.selectedItemsTitle.push(node.title);
            } else {
                const index = this.selectedItems.indexOf(node.id);
                if (index !== -1) {
                    this.selectedItems.splice(index, 1);
                    this.selectedNodes.splice(index, 1);
                }
            }
        } else {
            node.children.forEach((element) => {
                if (checked) {
                    const index = this.selectedItems.indexOf(element.id);
                    if (index === -1) {
                        element.checked = true;
                        this.selectedItems.push(element.id);
                        this.selectedItemsTitle.push(node.title);
                        this.treeControl.dataNodes.forEach((n) => {
                            if (n === element) {
                                n.checked = true;
                            }
                        });
                    }
                } else {
                    const index = this.selectedItems.indexOf(element.id);
                    if (index !== -1) {
                        element.checked = false;
                        this.selectedItems.splice(element.id);
                    }
                }
            });

            const indexData = this.treeControl.dataNodes.indexOf(node);
            if (indexData !== -1) {
                this.treeControl.dataNodes[indexData] = node;
            }
        }
        console.log(this.selectedItems);
    }

    getFormValueByName(formName: string): any {
        return this.roles.get(formName).value;
    }

    selectAllNodes(checked: boolean): void {
        this.allNodesChecked = checked;
        if (!checked) {
            this.selectedNodes = [];
        }
        this.dataSource.data.forEach(node => this.checkNodeRecursive(node, checked));
        this.treeControl.dataNodes.forEach(node => node.checked = checked); // Güncelleme
        this.selectedItems = checked ? this.getAllNodeIds(this.dataSource.data) : [];
        this.treeControl.expandAll();
    }

    checkNodeRecursive(node: FoodNode, checked: boolean): void {
        node.checked = checked;
        if (node.children) {
            node.children.forEach(child => this.checkNodeRecursive(child, checked));
        }
    }

    getAllNodeIds(nodes: FoodNode[]): string[] {
        let ids: string[] = [];
        nodes.forEach(node => {
            if (this.allNodesChecked) {
                this.selectedNodes.push(node);
            }
            ids.push(node.id);
            if (node.children) {
                ids = ids.concat(this.getAllNodeIds(node.children));
            }
        });
        return ids;
    }

    selectAction(nodeId: string, action: string): void {
        this.selectedNodeActions[nodeId] = action;
      }


}
