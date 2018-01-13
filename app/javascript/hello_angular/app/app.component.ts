import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  template: `<h1>Hello {{name}}</h1>`,
  styles: [`
  h1 {
    color: #FF0000;
  }
  `]
})
export class AppComponent {
  name = 'Angular!';
}
