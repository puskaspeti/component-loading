import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {OszlopComponent} from './oszlop/oszlop.component';
import {SorComponent} from './sor/sor.component';
import {IElem, IOszlopElem, ISorElem, ISzovegElem} from './models/i-elem';
import {SzovegComponent} from './szoveg/szoveg.component';
import {RenderService} from './render.service';
import {IElemComponent} from './models/i-elem-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, IElemComponent {

  elem: IElem = {
    compontentType: null,
    children: [<ISorElem> {
      compontentType: SorComponent,
      children: [<IOszlopElem> {
        compontentType: OszlopComponent,
        width: 5,
        children: [<ISzovegElem> {
          compontentType: SzovegComponent,
          text: 'első szöveg'
        }]
      }, <IOszlopElem> {
        compontentType: OszlopComponent,
        width: 7,
        children: [<ISzovegElem> {
          compontentType: SzovegComponent,
          text: 'második szöveg'
        }]
      }]
    }]
  };

  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private renderService: RenderService) { }

  ngOnInit() {
    this.renderService.render(this.entry, this.elem.children);
  }
}
