import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {IElem} from './models/i-elem';
import { Sor, Oszlop, Szoveg } from './models/elem';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  children: IElem[] = [];

  szoveg1 = 'Első szöveges komponens';
  szoveg2 = 'Második szöveges komponens';

  oszlop1 = new Oszlop();
  text1 = new Szoveg();
  @ViewChild('childTemplate', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private elementRef: ElementRef) {
    (this.elementRef.nativeElement as HTMLElement).classList.add('container');
  }

  ngOnInit() {
    const sor = new Sor();

    // const oszlop1 = new Oszlop();
    this.oszlop1.width = 7;

    // const text1 = new Szoveg();
    this.text1.text = this.szoveg1;

    const oszlop2 = new Oszlop();
    oszlop2.width = 5;

    const text2 = new Szoveg();
    text2.text = this.szoveg2;

    this.oszlop1.children.push(this.text1);
    oszlop2.children.push(text2);

    sor.children.push(...[this.oszlop1, oszlop2]);

    this.children.push(sor);
  }
}
