import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [PaginationModule],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent {
@Input() totalCount:number;
@Input() pageSize:number;
@Output() pageChanged = new EventEmitter<number>()

onPageChanged(event:any){
  this.pageChanged.emit(event);
}
}
