import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAlbumsComponent } from './slider-albums.component';

describe('SliderAlbumsComponent', () => {
  let component: SliderAlbumsComponent;
  let fixture: ComponentFixture<SliderAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
