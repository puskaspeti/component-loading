import {Component, Input, OnInit, ViewChild, ViewContainerRef, OnChanges, SimpleChanges, DoCheck, ElementRef} from '@angular/core';
import {IElem} from '../models/i-elem';
import {IElemComponent} from '../models/i-elem-component';
import {RenderService} from '../render.service';
import { Oszlop } from '../models/elem';

@Component({
  selector: 'app-oszlop',
  templateUrl: './oszlop.component.html',
  styleUrls: ['./oszlop.component.css']
})
export class OszlopComponent implements OnInit, IElemComponent, DoCheck {

  _elem: Oszlop;
  @Input() set elem(val: Oszlop) {
    this._elem = val;
    this.renderService.render(this.entry, this._elem.children);
  }

  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private elementRef: ElementRef, private renderService: RenderService) {}

  ngOnInit() {}

  ngDoCheck() {
    (this.elementRef.nativeElement as HTMLElement).className = '';
    (this.elementRef.nativeElement as HTMLElement).classList.add('col-' + this._elem.width);
  }
}
