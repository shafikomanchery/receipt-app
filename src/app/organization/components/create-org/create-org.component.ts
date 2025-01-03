import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.scss']
})
export class CreateOrgComponent implements OnInit {

  formGroup = new FormGroup({
    orgName: new FormControl('',[Validators.required]),
    orgRegNo: new FormControl('',[Validators.required]),
    orgAddress: new FormControl(''),
    orgEmail: new FormControl('',[Validators.email]),
    orgMobile: new FormControl('',[Validators.required]),
    orgAltMobile: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

  submit(){
    if(!this.formGroup.valid){
      this.formGroup.markAllAsTouched()
      return;
    }{
      console.log(this.formGroup.getRawValue())
    }
  }

}
