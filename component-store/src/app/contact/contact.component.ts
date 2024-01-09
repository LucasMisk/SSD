// contact.component.ts
import { Component } from '@angular/core';
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactComponent {
  formData: any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail() {
    const templateParams = {
      from_name: this.formData.name,
      to_name: 'Admin',
      subject: this.formData.subject,
      message: this.formData.message
    };
    emailjs.init("t6Qx8Ku6st-_j8Nek")
    emailjs.send('service_ay2yjqs', 'template_6arndvj', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Optionally, you can reset the form after successful submission
        this.resetForm();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
