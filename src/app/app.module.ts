import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { FormsModule } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayOptionsService } from './services/display-options.service';
import { DISPLAY_CONTEXT } from './services/display-context.token';
library.add(faChevronDown);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    DisplayOptionsService, // Provide the service instance here
    { provide: DISPLAY_CONTEXT, useFactory: (displayOptionsService: DisplayOptionsService) => displayOptionsService.displayOptions, deps: [DisplayOptionsService] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
