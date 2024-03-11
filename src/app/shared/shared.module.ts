import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './component/paging-header/paging-header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagingHeaderComponent,
    PaginationModule.forRoot()
  ],
  exports:[PaginationModule,PagingHeaderComponent]
})
export class SharedModule { }
