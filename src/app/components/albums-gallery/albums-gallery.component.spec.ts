import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsGalleryComponent } from './albums-gallery.component';

describe('AlbumsGalleryComponent', () => {
  let component: AlbumsGalleryComponent;
  let fixture: ComponentFixture<AlbumsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
