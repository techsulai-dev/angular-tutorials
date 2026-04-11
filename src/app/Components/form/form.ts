import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  name: string = '';

  @Output() dataSubmitted = new EventEmitter<string>();

  submitForm() {
    console.log('Form submitted with name:', this.name);
    this.dataSubmitted.emit(this.name);
    this.name = ''; // Clear the input after submission
  }
}
