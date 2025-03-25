import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent<T extends Record<string, any>> {
  @Input() data: T[]=[];
  @Input() columns: string[]=[];
}