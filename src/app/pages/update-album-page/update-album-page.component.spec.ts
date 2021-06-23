import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlbumPageComponent } from './update-album-page.component';

describe('UpdateAlbumPageComponent', () => {
  let component: UpdateAlbumPageComponent;
  let fixture: ComponentFixture<UpdateAlbumPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAlbumPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlbumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
