import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StableReleasesComponent } from './stable-releases.component';

describe('StableReleasesComponent', () => {
  let component: StableReleasesComponent;
  let fixture: ComponentFixture<StableReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StableReleasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StableReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
