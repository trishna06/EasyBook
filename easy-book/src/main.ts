import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, routes],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
