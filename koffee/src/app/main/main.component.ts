/// <reference path="../../../typings/globals/underscore/index.d.ts" />
import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'main',
  selector: 'main',
  templateUrl: 'app/main/main.component.html',
  styleUrls: ['app/main/main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    _.each([1,2,3], function (item) {
      var v = item;
    });
  }

  goToSelectType(){
    this.router.navigate(['select-type']);
  }
}