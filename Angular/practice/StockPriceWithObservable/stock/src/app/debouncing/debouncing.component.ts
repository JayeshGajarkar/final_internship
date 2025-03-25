import { AfterViewInit, Component } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncing',
  standalone: false,
  templateUrl: './debouncing.component.html',
  styleUrl: './debouncing.component.css'
})
export class DebouncingComponent implements AfterViewInit {
  


  ngAfterViewInit(): void {
    const searchInput = document.getElementById("search");

    if (searchInput) {
      fromEvent(searchInput, "input").pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(5000),
      ).subscribe(
        value => console.log("Searching for", value)
      );
    } else {
      console.log("Element not found");
    }
  }

}
