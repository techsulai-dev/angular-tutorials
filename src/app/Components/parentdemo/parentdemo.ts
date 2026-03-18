import { Component } from '@angular/core';
import { Childdemo } from "../childdemo/childdemo";

@Component({
  selector: 'app-parentdemo',
  imports: [Childdemo],
  templateUrl: './parentdemo.html',
  styleUrl: './parentdemo.scss',
})
export class Parentdemo {
  message: string[] = ['Hello from Parent!'];
}
