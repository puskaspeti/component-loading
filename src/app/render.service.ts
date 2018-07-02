import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {IElem} from './models/i-elem';

@Injectable({
  providedIn: 'root'
})
export class RenderService {

  constructor(private resolver: ComponentFactoryResolver) { }

  render(entry: ViewContainerRef, elemek: IElem[]) {
    entry.clear();

    elemek.forEach(elem => {
      const factory = this.resolver.resolveComponentFactory(elem.compontentType);
      const componentRef = entry.createComponent(factory);
      componentRef.instance.elem = elem;
    });
  }
}
