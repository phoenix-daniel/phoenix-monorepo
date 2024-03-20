import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxErrorModule } from '@aposin/ng-aquila/base';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxMultiStepperComponent, NxProgressStepperModule } from '@aposin/ng-aquila/progress-stepper';

@Component({
  selector: 'phoenix-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, NxButtonModule, NxErrorModule, NxFormfieldModule, NxInputModule, NxProgressStepperModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  @ViewChild('stepper') stepper!: NxMultiStepperComponent;
  groups = [
    {
      label: 'Personal Details',
      steps: [
        { label: 'Name', formControlName: 'name' },
        { label: 'Designation',  formControlName: 'designation' },
        { label: 'Phone Number',  formControlName: 'phoneNumber' },
        { label: 'Address',  formControlName: 'address' },
      ],
    },
    {
      label: 'Account Details',
      steps: [
        { label: 'Name of Bank', formControlName: 'bankName' },
        { label: 'Name of Branch', formControlName: 'branchName' },
        { label: 'Name of City', formControlName: 'bankCityName' },
        { label: 'Account Number', formControlName: 'accountNumber' },
      ],
    },
  ]

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup(
      {
        'name': new FormControl(),
        'designation': new FormControl(),
        'phoneNumber': new FormControl(),
        'address': new FormControl(),
        'bankName': new FormControl(),
        'branchName': new FormControl(),
        'bankCityName': new FormControl(),
        'accountNumber': new FormControl(),
      },
    )
  }
}
