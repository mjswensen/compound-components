import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnhancedMultiSelectComponent } from './enhanced-multi-select.component';
import { EnhancedMultiSelectOptionComponent } from './enhanced-multi-select-option.component';

@NgModule({
  declarations: [
    AppComponent,
    EnhancedMultiSelectComponent,
    EnhancedMultiSelectOptionComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
