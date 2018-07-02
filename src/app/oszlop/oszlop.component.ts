import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {IElem, IOszlopElem} from '../models/i-elem';
import {IElemComponent} from '../models/i-elem-component';
import {RenderService} from '../render.service';

@Component({
  selector: 'app-oszlop',
  templateUrl: './oszlop.component.html',
  styleUrls: ['./oszlop.component.css']
})
export class OszlopComponent implements OnInit, IElemComponent {

  _elem: IOszlopElem;
  @Input() set elem(val: IOszlopElem) {
    this._elem = val;
    this.renderService.render(this.entry, this._elem.children);
  }

  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private renderService: RenderService) {}

  ngOnInit() {}
}
