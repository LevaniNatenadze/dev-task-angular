import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './auth/token.interceptor.service';
import {API_BASE_URL, MY_TOKEN} from './auth/token';
import {environment} from '../environments/environment';
import {MainComponent} from './layout/main/main.layout';
import {LoginModule} from './modules/login/login.module';
import {HomeModule} from './modules/home/home.module';
import {ErrorInterceptor} from './auth/error.interceptor';
import {EmptyLayout} from './layout/empty/empty.layout';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundComponent} from './layout/404/not-found/not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        EmptyLayout,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LoginModule,
        HomeModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: MY_TOKEN,
            useValue: environment.token
        },
        {
            provide: API_BASE_URL,
            useValue: environment.token
        },
        {
            provide: API_BASE_URL,
            useValue: environment.baseUrl
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
