import { Component } from '@angular/core';
import dummydata from './_files/dummydata.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8 Read Local JSON Data';
  public nameData: {name: string, surname: string}[] = dummydata;
}
