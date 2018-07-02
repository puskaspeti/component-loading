import {IElem} from './i-elem';
import {ViewContainerRef} from '@angular/core';

export interface IElemComponent {
  entry?: ViewContainerRef; // TODO: SzovegComponentnek ez nem kell amúgy
  elem: IElem;
}
