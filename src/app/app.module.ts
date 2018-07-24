import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';

const appRoutes: Routes = [
  { path: 'secondPage', component: SecondPageComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
