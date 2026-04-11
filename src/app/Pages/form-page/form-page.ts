import { Component } from '@angular/core';
import { Form } from "../../Components/form/form";
import { List } from "../../Components/list/list";

@Component({
  selector: 'app-form-page',
  imports: [Form, List],
  templateUrl: './form-page.html',
  styleUrl: './form-page.scss',
})
export class FormPage {
  list: string[] = [];

  handleData(data: string) {
    console.log('Data received in FormPage:', data);
    this.list.push(data); // Add the received data to the list
  }
}
