import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
registerLocaleData(pt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ComputerService } from './produtos/computer.service';
import { ListaComputerComponent } from './produtos/lista-produto/lista-computer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ListaComputerComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ComputerService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
