import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from "@angular/forms";
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

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    
    this.FeedBackForm=this.fb.group({
      firstName:'',
      lastName:'',
      telnum:0,
      email:'',
      agree:false,
      contacttype:'',
      message:''
  });
}

onSubmit(){
  this.FeedBack=this.FeedBackForm.value;
  console.log(this.FeedBack);
  this.FeedBackForm.reset();

}


}
