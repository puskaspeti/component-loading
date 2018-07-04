import {ComponentFactoryResolver, Pipe, PipeTransform, ViewContainerRef} from '@angular/core';
import {IElem} from './models/i-elem';

@Pipe({
  name: 'render'
})
export class RenderPipe implements PipeTransform {

  constructor(private resolver: ComponentFactoryResolver) {}

  transform(children: IElem[], entry: ViewContainerRef): any {
    entry.clear();

    children.forEach(elem => {
      const factory = this.resolver.resolveComponentFactory(elem.compontentType);
      const componentRef = entry.createComponent(factory);
      componentRef.instance.elem = elem;
    });
  }

}
