import {Component, Input, OnInit, ViewChild, ViewContainerRef, ElementRef, AfterViewInit} from '@angular/core';
import {IElem} from '../models/i-elem';
import {IElemComponent} from '../models/i-elem-component';

@Component({
  selector: '[app-sor]',
  templateUrl: './sor.component.html',
  styleUrls: ['./sor.component.css']
})
export class SorComponent implements OnInit, IElemComponent {

  _elem: IElem;
  @Input() set elem(val: IElem) {
    this._elem = val;
  }

  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private elementRef: ElementRef) {
    (this.elementRef.nativeElement as HTMLElement).classList.add('row');
  }

  ngOnInit() {}
}
