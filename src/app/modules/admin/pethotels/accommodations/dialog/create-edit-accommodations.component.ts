import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { CustomerService } from 'app/core/services/customers/customers.service';
import { AccommodationsRoonService } from 'app/core/services/pethotels/accommodationrooms/accommodationsroom.service';
import { PatientDetails } from 'app/modules/admin/customer/models/PatientDetailsCommand';
import { customersListDto } from 'app/modules/admin/customer/models/customersListDto';
import { RoomListDto } from '../../accommodationrooms/models/roomListDto';
import { AccomodationType, CreateAccomodationCommand } from '../models/createAccomodationCommand';
import { AccommodationsService } from 'app/core/services/pethotels/accommodations/accommodation.service';
import { SweetAlertDto } from 'app/modules/bases/models/SweetAlertDto';
import { SweetalertType } from 'app/modules/bases/enums/sweetalerttype.enum';
import { GeneralService } from 'app/core/services/general/general.service';

@Component({
  selector: 'app-create-edit-accommodations',
  templateUrl: './create-edit-accommodations.component.html',
  styleUrls: ['./create-edit-accommodations.component.css']
})
export class CreateEditAccommodationsComponent implements OnInit {

  selectedaccommodation: any;
  buttonDisabled = false;
  accommodation: FormGroup;

  patientList: PatientDetails[] = [];
  customers: customersListDto[] = [];
  rooms: RoomListDto[] = [];

  now: Date = new Date();
  selectedCheckinDate: Date = new Date();
  selectedCheckOutDate: Date = new Date();

  states: string[] = ['Pansiyon', 'Hospitalizasyon'];

  selectedtabItem: number = 0;

  constructor(
    private _dialogRef: MatDialogRef<any>,
    private _formBuilder: FormBuilder,
    private _translocoService: TranslocoService,
    private _accommodationrooms: AccommodationsRoonService,
    private _customerService: CustomerService,
    private _accomodations: AccommodationsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selectedaccommodation = data;
  }

  ngOnInit() {
    this.getCustomerList();
    this.getRoomList();

    this.accommodation = this._formBuilder.group({
      customerId: [''],
      patientId: [''],
      roomId: [''],
      selectedState: [this.states[0]],
      remark: ['']
    });

    this.fillFormData(this.selectedaccommodation);
  }

  getCustomerList() {
    this._customerService.getcustomerlist().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getRoomList() {
    this._accommodationrooms.getRoomList().subscribe((response) => {
      this.rooms = response.data;
    });
  }


  fillFormData(selectedAccomodation: any) {

    if (this.selectedaccommodation !== null) {
      this.accommodation.setValue({
        customerId: selectedAccomodation.customerId,
        patientId: selectedAccomodation.patientId,
        roomId: selectedAccomodation.roomId
      });
    }
  }


  handleCustomerChange(event: any) {
    const model = {
      id: event.value,
    };
    if (model.id == undefined) {
      model.id = event;
    }

    this._customerService
      .getPatientsByCustomerId(model)
      .subscribe((response) => {
        this.patientList = response.data;
        if (this.patientList.length === 1) {
          // this.examinationForm
          //   .get('patientId')
          //   .patchValue(this.patientList[0].recId);
        }
      });
  }

  closeDialog(): void {
    this._dialogRef.close({ status: null });
  }

  onTabChange(event: any) {
    this.selectedtabItem = event;
    if (event === 1) {

    }
  }

  handleValueChange(e) {
    this.selectedCheckinDate = e.value;
  }

  handleValueCheckOutChange(e) {
    this.selectedCheckOutDate = e.value;
  }

  addOrUpdateAccommodation(): void {

    this.buttonDisabled = true;
    this.selectedaccommodation
      ? this.updateaAccomodation()
      : this.addAccomodation();

  }

  getFormValueByName(formName: string): any {
    return this.accommodation.get(formName).value;
  }

  addAccomodation(): void {

    const item = new CreateAccomodationCommand(
      this.selectedtabItem,
      this.getFormValueByName('roomId'),
      this.selectedCheckinDate,
      this.selectedCheckOutDate,
      (this.getFormValueByName('selectedState') === "Pansiyon" ? AccomodationType.Hostel : AccomodationType.Hospitalization),
      this.getFormValueByName('remark'),
      this.getFormValueByName('customerId'),
      this.getFormValueByName('patientId'),
    );

    this._accomodations.createAccommodation(item).subscribe(
      (response) => {
        if (response.isSuccessful) {
          this.showSweetAlert('success', 'sweetalert.transactionSuccessful');
          this._dialogRef.close({
            status: true,
          });
        } else {
          this.buttonDisabled = false;
          this.showSweetAlert('error', response.errors);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateaAccomodation(): void {
  }

  showSweetAlert(type: string, message: string): void {
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
        message,
        SweetalertType.error
      );
      GeneralService.sweetAlert(sweetAlertDto);
    }
  }

  translate(key: string): any {
    return this._translocoService.translate(key);
  }


}
