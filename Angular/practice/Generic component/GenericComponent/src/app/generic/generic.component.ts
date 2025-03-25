import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic',
  standalone: false,
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css'
})
export class GenericComponent<T> {
  @Input() data: T[] = []; // The table's data (array of type T)
  @Input() columns: { key: keyof T, label: string }[] = [];
}
