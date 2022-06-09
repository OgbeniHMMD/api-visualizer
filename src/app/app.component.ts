import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'api-visualizer';

  result = [
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  ];

  formatCode(v: object) {
    return JSON.stringify(v, null, 4);
  }
}
