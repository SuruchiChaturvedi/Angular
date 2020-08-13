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

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    
    this.FeedBackForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      telnum:[0,Validators.required],
      email:['',Validators.required],
      agree:false,
      contacttype:'',
      message:''
  });
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
