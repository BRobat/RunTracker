import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6rx0K-iNp_u8nmVFZKNiN0jOjNeiiPok'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
