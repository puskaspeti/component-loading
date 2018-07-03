import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ElementRef, AfterViewInit} from '@angular/core';
import {IElem} from '../models/i-elem';
import {IElemComponent} from '../models/i-elem-component';
import {RenderService} from '../render.service';

@Component({
  selector: '[app-sor]',
  templateUrl: './sor.component.html',
  styleUrls: ['./sor.component.css']
})
export class SorComponent implements OnInit, IElemComponent {

  _elem: IElem;
  @Input() set elem(val: IElem) {
    this._elem = val;
    this.renderService.render(this.entry, this._elem.children);
  }

  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private elementRef: ElementRef, private renderService: RenderService) {
    (this.elementRef.nativeElement as HTMLElement).classList.add('row');
  }

  ngOnInit() {}
}
