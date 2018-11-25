import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';
import { BoxContainerComponent } from './box-container/box-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    BoxContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
