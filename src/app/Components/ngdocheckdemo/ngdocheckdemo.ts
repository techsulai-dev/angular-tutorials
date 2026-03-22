import { Component } from '@angular/core';
import { DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngdocheckdemo',
  imports: [FormsModule],
  templateUrl: './ngdocheckdemo.html',
  styleUrl: './ngdocheckdemo.scss',
})
export class Ngdocheckdemo implements DoCheck {
  inputValue: string = '';

  constructor() {
    // console.log('Ngdocheckdemo component initialized');
  }

  ngDoCheck() {
    console.log('ngDoCheck called. Current inputValue:', this.inputValue);
  }
}
