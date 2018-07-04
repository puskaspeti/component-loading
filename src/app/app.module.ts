import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SorComponent } from './sor/sor.component';
import { OszlopComponent } from './oszlop/oszlop.component';
import { SzovegComponent } from './szoveg/szoveg.component';
import { RenderPipe } from './render.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SorComponent,
    OszlopComponent,
    SzovegComponent,
    RenderPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [SorComponent, OszlopComponent, SzovegComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
