import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childdemo',
  imports: [],
  templateUrl: './childdemo.html',
  styleUrl: './childdemo.scss',
})
export class Childdemo implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input() message: string= '';

  constructor() {
    console.log('Child Component Initialized with message:', this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['message']) {
      console.log('Message from Parent:', changes['message']);
    }
  }

  ngOnInit() {
    console.log('Child Component OnInit with message:', this.message);
  } 

   ngAfterContentInit() {
    console.log('✅ Content Initialized (ONLY ONCE)');
  }

  ngAfterContentChecked() {
    console.log('🔄 Content Checked (AGAIN & AGAIN)');
    console.log('Current Message:', this.message);
  }

  ngAfterViewInit() {
    console.log('✅ View Initialized (ONLY ONCE)');
  }

  ngAfterViewChecked() {
    console.log('🔄 View Checked (AGAIN & AGAIN)');
  }


}
