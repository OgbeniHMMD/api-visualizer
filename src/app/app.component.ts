import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'api-visualizer';

  base = 'https://jsonplaceholder.typicode.com';
  requests = [
    {
      verb: 'get',
      title: '/todos/1',
      url: `${this.base}/todos/1`,
    },
    {
      verb: 'get',
      title: '/todos/1',
      url: `${this.base}/todos/1`,
    },
    {
      verb: 'get',
      title: '/todos/1',
      url: `${this.base}/todos/1`,
    },
  ];
}
