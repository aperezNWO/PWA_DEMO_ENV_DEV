import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameswebComponent } from './gamesweb.component';

describe('GameswebComponent', () => {
  let component: GameswebComponent;
  let fixture: ComponentFixture<GameswebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameswebComponent]
    });
    fixture = TestBed.createComponent(GameswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
