import { Component } from '@angular/core';

@Component({
  selector: 'input-data',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  private inputApp = {
      start: "",
      days: 0,
      country: ""
  }

  sendData() {
      console.log(this.inputApp);
  }
}
