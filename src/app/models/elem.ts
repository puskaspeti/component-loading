import { IElem } from './i-elem';
import { SorComponent } from '../sor/sor.component';
import { OszlopComponent } from '../oszlop/oszlop.component';
import { SzovegComponent } from '../szoveg/szoveg.component';
import { IElemComponent } from './i-elem-component';
import { Type } from '@angular/core';

export abstract class Elem implements IElem {
    children?: IElem[] = [];

    constructor(
        public readonly compontentType: Type<IElemComponent>) {
    }
}

export class Sor extends Elem {
    constructor() {
        super(SorComponent);
    }
}

export class Oszlop extends Elem {
    width: number;

    constructor() {
        super(OszlopComponent);
    }
}

export class Szoveg extends Elem {
    text: string;

    constructor() {
        super(SzovegComponent);
    }
}
