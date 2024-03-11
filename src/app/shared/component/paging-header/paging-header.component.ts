import { Component, Input, input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-paging-header',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.css'
})
export class PagingHeaderComponent {
@Input() pageNumber:number;
@Input() pageSize:number;
@Input() totalCount:number;
}
