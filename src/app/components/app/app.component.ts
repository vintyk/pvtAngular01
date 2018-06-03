import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter: ';
  counter = 0;

  // constructor() {
  //   let counter = 0;
  //   setInterval(() => {
  //     this.title = `counter ${counter++}`;
  //   }, 1000);
  // }
  constructor () {
    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      // this.title = `counter ${this.counter++}`;
      this.counter++;
      this.render();
    });
  }
}
