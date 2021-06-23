import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsGalleryComponent } from './artists-gallery.component';

describe('ArtistsGalleryComponent', () => {
  let component: ArtistsGalleryComponent;
  let fixture: ComponentFixture<ArtistsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
