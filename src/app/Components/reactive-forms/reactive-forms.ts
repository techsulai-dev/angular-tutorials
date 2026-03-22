import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms implements OnInit {

  userForm: any;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });

  }

  ngOnInit() {
    //  this.userForm = this.fb.group({
    //     name: [''],
    //     email: [''],
    //     password: ['']
    //   });
  }
  onSubmit() {
    console.log(this.userForm.value);
  }


}
