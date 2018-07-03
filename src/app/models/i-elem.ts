import {Type} from '@angular/core';
import {IElemComponent} from './i-elem-component';

export interface IElem {
  compontentType: Type<IElemComponent>;
  children?: IElem[]; // TODO: jelenleg a SorElemnek lehet adni sima IElem-et pedig csak IOszlopElem-et kéne elfogadnia
}
