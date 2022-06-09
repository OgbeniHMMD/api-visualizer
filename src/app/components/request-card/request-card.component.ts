import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
})
export class RequestCardComponent implements OnInit {
  constructor() {}

  response = '';

  ngOnInit(): void {}
  fetchRequest() {
    const response = [
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    ];

    this.response = JSON.stringify(response, null, 4);
  }
}
