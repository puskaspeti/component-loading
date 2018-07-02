import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {ISzovegElem} from '../models/i-elem';
import {IElemComponent} from '../models/i-elem-component';

@Component({
  selector: 'app-szoveg',
  templateUrl: './szoveg.component.html',
  styleUrls: ['./szoveg.component.css']
})
export class SzovegComponent implements OnInit, IElemComponent {

  entry: ViewContainerRef;

  _elem: ISzovegElem;
  @Input() set elem(val: ISzovegElem) {
    console.log(val)
    this._elem = val;
  }

  constructor() {}

  ngOnInit() {}
}
