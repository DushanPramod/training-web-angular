import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryCardComponent } from './module-1/components/diary-card/diary-card.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormFieldModule, TextAreaModule} from "@progress/kendo-angular-inputs";
import {LabelModule} from "@progress/kendo-angular-label";
import { StoreModule } from '@ngrx/store';
import {diarycardsReducer} from "./module-1/store/cards.reducer";

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {DiaryCardEffect} from "./module-1/store/cards.effects";
import { FormComponent } from './module-1/components/form/form.component';
import { HomeComponent } from './module-1/containers/home/home.component';
import { SignInComponent } from './module-1/containers/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryCardComponent,
    FormComponent,
    HomeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    GridModule,
    ReactiveFormsModule,
    FormsModule,
    FormFieldModule,
    LabelModule,
    TextAreaModule,
    StoreModule.forRoot({diaryCards:diarycardsReducer}, {}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    EffectsModule.forRoot([DiaryCardEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
