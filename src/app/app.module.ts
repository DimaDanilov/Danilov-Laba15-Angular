import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { EditformWorkerComponent } from './ui/editform-worker/editform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditformWorkerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(
      // public customPatterns = { '0': { pattern: new RegExp('\[а-яА-Я\]')} }
      // {patterns:
      //   {
      //     '0':
      //       {
      //         pattern: new RegExp('\[а-яА-Я\]')
      //       }
      //   }
      // })
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
