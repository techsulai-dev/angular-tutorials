import { Component } from '@angular/core';
import { Childdemo } from "../childdemo/childdemo";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentdemo',
  imports: [Childdemo,FormsModule],
  templateUrl: './parentdemo.html',
  styleUrl: './parentdemo.scss',
})
export class Parentdemo {
  message: string = 'Hello from Parent!';

  changeMessage(){
    this.message = 'updated';
  }

     
}
