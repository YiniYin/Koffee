import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoffeeService } from './coffee.service';
import { Coffee } from '../model/coffee';

@Component({
  moduleId: 'select-type',
  selector: 'app-select-type',
  templateUrl: 'app/select-type/select-type.component.html',
  styleUrls: ['app/select-type/select-type.component.css']
})
export class SelectTypeComponent implements OnInit {
  coffees: Coffee[];
  selectedCoffee: Coffee;

  constructor(private _router: Router,
              private _coffeeService: CoffeeService) { }

  getCoffees() {
    this._coffeeService.get().subscribe(coffees => this.coffees = coffees);
  }

  ngOnInit() {
    this.getCoffees();
  }

  onSelect(coffee: Coffee) { this.selectedCoffee = coffee }

  gotoSelectStrength() {
    this._router.navigate(['SelectStrength', {selectedCoffee: this.selectedCoffee}]);
  }
}