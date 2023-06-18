import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedViewRoutingModule } from './detailed-view-routing.module';
import { DetailedViewComponent } from './detailed-view.component';
import { DateConvertPipe } from '../pipes/date-convert.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailedViewComponent, DateConvertPipe],
  imports: [
    CommonModule,
    DetailedViewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DetailedViewModule {}
