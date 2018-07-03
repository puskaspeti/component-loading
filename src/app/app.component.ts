import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {OszlopComponent} from './oszlop/oszlop.component';
import {SorComponent} from './sor/sor.component';
import {IElem} from './models/i-elem';
import {SzovegComponent} from './szoveg/szoveg.component';
import {RenderService} from './render.service';
import {IElemComponent} from './models/i-elem-component';
import { Sor, Oszlop, Szoveg } from './models/elem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  children: IElem[] = [];

  szoveg1 = 'Első szöveges komponens';
  szoveg2 = 'Második szöveges komponens';
  text1 = new Szoveg();
  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private renderService: RenderService) { }

  ngOnInit() {
    const sor = new Sor();

    const oszlop1 = new Oszlop();
    oszlop1.width = 7;

    //const text1 = new Szoveg();
    //text1.text = this.szoveg1;

    const oszlop2 = new Oszlop();
    oszlop2.width = 5;

    const text2 = new Szoveg();
    text2.text = this.szoveg2;

    oszlop1.children.push(this.text1);
    oszlop2.children.push(text2);

    sor.children.push(...[oszlop1, oszlop2]);

    this.children.push(sor);

    this.renderService.render(this.entry, this.children);
  }
}
