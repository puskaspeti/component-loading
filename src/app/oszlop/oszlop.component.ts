import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ElementRef,
} from '@angular/core';
import {IElemComponent} from '../models/i-elem-component';
import { Oszlop } from '../models/elem';

@Component({
  selector: '[app-oszlop]',
  templateUrl: './oszlop.component.html',
  styleUrls: ['./oszlop.component.css']
})
export class OszlopComponent implements OnInit, IElemComponent, DoCheck {

  lastWidth = 6;
  _elem: Oszlop;
  @Input() set elem(val: Oszlop) {
    this._elem = val;
    this.render();
  }

  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngDoCheck(): void {
    if (this._elem.width === this.lastWidth) {
      return;
    }

    this.lastWidth = this._elem.width;
    this.render();
  }

  render() {
    (this.elementRef.nativeElement as HTMLElement).className = 'col-lg-' + this.lastWidth;
  }
}
