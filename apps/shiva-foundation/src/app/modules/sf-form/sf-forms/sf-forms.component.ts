import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'shivafdn-forms',
  templateUrl: './sf-forms.component.html',
  styleUrls: ['./sf-forms.component.scss']
})
export class SfFormsComponent implements OnInit {

  public sfForm = new FormGroup({
    name: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('')
  });
  // phone: new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

}
