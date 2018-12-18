import {NgModule, SkipSelf, Optional} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
// import {ShareModule} from '../share/share.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    ShareModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {

    if (parent) {
      throw new Error('模块已经存在！');
    }
  }
}
