import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, Components } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NarrationDetailsService} from './narration-details.service';
import { CaptionifierComponent } from './landing/captionifier/captionifier.component';
import { GeneratorComponent } from './generator/generator.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    CaptionifierComponent,
    AppComponent,
    Components,
    GeneratorComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NarrationDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// MatDialogModule,
//   MatProgressSpinnerModule,
//   MatDialogModule,
//   MatFormFieldModule,
//   MatSelectModule,
//   MatSliderModule
