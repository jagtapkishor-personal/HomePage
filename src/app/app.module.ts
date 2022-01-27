import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControl, FormGroup, FormsModule, FormControlName} from "@angular/forms"
import { AppComponent } from './app.component';
import { WebsiteComponent } from './components/website/website.component';
import { ValidateFormComponent } from './components/validate-form/validate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ValidateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
