import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CoreModule} from './core/core.module';
import {LoginModule} from './login/login.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
