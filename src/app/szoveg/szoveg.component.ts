import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {IElemComponent} from '../models/i-elem-component';
import { Szoveg } from '../models/elem';

@Component({
  selector: 'app-szoveg',
  templateUrl: './szoveg.component.html',
  styleUrls: ['./szoveg.component.css']
})
export class SzovegComponent implements OnInit, IElemComponent {

  entry: ViewContainerRef;

  _elem: Szoveg;
  @Input() set elem(val: Szoveg) {
    this._elem = val;
  }

  constructor() {}

  ngOnInit() {}
}
