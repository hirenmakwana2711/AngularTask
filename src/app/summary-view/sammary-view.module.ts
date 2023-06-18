import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SammaryViewRoutingModule } from './sammary-view-routing.module';
import { SummaryViewComponent } from './summary-view.component';
import { DateConvertPipe } from '../pipes/date-convert.pipe';

@NgModule({
  declarations: [SummaryViewComponent, DateConvertPipe],
  imports: [CommonModule, SammaryViewRoutingModule],
})
export class SammaryViewModule {}
