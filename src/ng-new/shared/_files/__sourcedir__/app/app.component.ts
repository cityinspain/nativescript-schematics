import { Component } from '@angular/core';

@Component({
  selector: '<%= prefix %>-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.<%= style %>']
})
export class AppComponent {
  title = '<%= name %>';
}
