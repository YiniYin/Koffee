import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {

  constructor() { }
}
