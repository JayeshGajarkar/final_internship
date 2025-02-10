import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingComponent } from './debouncing.component';

describe('DebouncingComponent', () => {
  let component: DebouncingComponent;
  let fixture: ComponentFixture<DebouncingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebouncingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebouncingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
