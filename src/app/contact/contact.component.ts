import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {feedback, ContactType} from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FeedBackForm:FormGroup;
  FeedBack:feedback;
  contactType=ContactType;
  @ViewChild ('fform') feedBackFormDirective;

  formErrors={
    'firstName':'',
    'lastName':'',
    'telnum':'',
    'email':''
  }

  ValidationMessages={
    'firstName':{
      'required':'First Name is required.',
      'minLength':'First Name must be atleast 2 characters',
      'maxLength': 'First Name cannot be more than 25 characters'
    },

    'lastName':{
      'required':'Last Name is required.',
      'minLength':'Last Name must be atleast 2 characters',
      'maxLength': 'Last Name cannot be more than 25 characters'
    },

    'telnum':{
      'required':'Tel. number is required.',
      'pattern':'Tel. number must contain only numbers'
    },

    'email':{
      'required':'Email is required.',
      'email':"Email is not in valid format"
    }

  }

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    
    this.FeedBackForm=this.fb.group({
      firstName:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastName:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum:[0,[Validators.required, Validators.pattern]],
      email:['',[Validators.required, Validators.email]],
      agree:false,
      contacttype:'',
      message:''
  });

  this.FeedBackForm.valueChanges.subscribe(data=>this.onValueChanged(data));

  //(re)sets form validation messages
  onValueChanged();

}

onSubmit(){
  this.FeedBack=this.FeedBackForm.value;
  console.log(this.FeedBack);
  this.FeedBackForm.reset({
    firstName:'',
      lastName:'',
      telnum:0,
      email:'',
      agree:false,
      contacttype:'',
      message:''
  });

  this.feedBackFormDirective.resetForm();
}


}
