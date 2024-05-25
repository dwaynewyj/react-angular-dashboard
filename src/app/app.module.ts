import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableWrapperComponent } from '../components/DataTable/DataTableWrapper';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        DataTableWrapperComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
