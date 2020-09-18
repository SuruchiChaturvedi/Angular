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
  //We look for the selector matching 'fform' in DOM, since it is a child in template so we access by @ViewChild
  @ViewChild ('fform') feedBackFormDirective;

  //This object will contain error messages
  formErrors={
    'firstName':'',
    'lastName':'',
    'telnum':'',
    'email':''
  }

  ValidationMessages={
    'firstName':{
      'required':'First Name is required.',
      'minlength':'First Name must be atleast 2 characters',
      'maxlength': 'First Name cannot be more than 25 characters'
    },

    'lastName':{
      'required':'Last Name is required.',
      'minlength':'Last Name must be atleast 2 characters',
      'maxlength': 'Last Name cannot be more than 25 characters'
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
    // Validators.required, validators.email, ...... are default validators
    this.FeedBackForm=this.fb.group({
      //Validators enclosed in an array since are more than one.
      firstName:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastName:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum:[0,[Validators.required, Validators.pattern]],
      email:['',[Validators.required, Validators.email]],
      agree:false,
      contacttype:'',
      message:''
  });

  //valueChanges observable provided by angular to see if any form element's value changes.
  this.FeedBackForm.valueChanges.subscribe(data=>this.onValueChanged(data));

  //(re)sets form validation messages
  this.onValueChanged();

}

onValueChanged(data?:any){
  console.log("Came to on value changed function");
  if(!this.FeedBackForm){return;}
  else{
    const form = this.FeedBackForm;

    for (const field in this.formErrors){
      //since the object will have some inherited functions
      if(this.formErrors.hasOwnProperty(field)){
        //We clear the field if it has any value prior
        this.formErrors[field]='';
        const control=form.get(field);
        //We can see all the control values possible here
        //console.log(control);
        if(control && control.dirty && !control.valid){          
          const messages=this.ValidationMessages[field];
          //control.errors contains the error object
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field]+=messages[key]+" ";
            }
            
          } 
        }
      }
    }
  }
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
