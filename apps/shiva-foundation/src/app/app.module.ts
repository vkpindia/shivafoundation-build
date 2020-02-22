import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
import { MainRoutingModule } from './routes/main-routing.module';
import { NavComponent } from './layout/header/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SfFormModule } from './modules/sf-form/sf-form.module';
import { SubscribeComponent } from './modules/subscribe/subscribe.component';
// import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavComponent,
    FooterComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MainRoutingModule,
    NgbModule,
    SfFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
