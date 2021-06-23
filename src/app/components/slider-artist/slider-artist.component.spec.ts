import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderArtistComponent } from './slider-artist.component';

describe('SliderArtistComponent', () => {
  let component: SliderArtistComponent;
  let fixture: ComponentFixture<SliderArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
