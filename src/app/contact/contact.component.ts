import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor() { }

  public contactForm = new FormGroup({
    senderName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  }
  ) 

  submitClick(){
    console.log(this.contactForm.get('senderName').valid);
  }
  public onResetForm(){
    this.contactForm.reset();
    this.contactForm.markAsUntouched();
  }

 
}
