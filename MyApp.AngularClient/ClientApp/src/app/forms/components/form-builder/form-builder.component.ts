import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  newForm: FormGroup;
  newControl: FormGroup;

  constructor() { }

  ngOnInit() {

    //construct an empty form group

    this.newForm = new FormGroup ({

    })
  }

  createNewControl() {
    //create/set new form control of type formGroup
    this.newControl = new FormGroup({
      label: new FormControl('', Validators.required),
      type: new FormControl(Validators.required)
    })    
  }

  saveNewControl(form) {
    console.log(form)
  }

}
