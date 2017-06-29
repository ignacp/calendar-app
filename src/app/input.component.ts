import { Component } from '@angular/core';

@Component({
  selector: 'input-data',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  private inputApp = {
      start: "",
      days: 0,
      country: ""
  }

  sendData() {
      console.log(this.inputApp);
  }
}
