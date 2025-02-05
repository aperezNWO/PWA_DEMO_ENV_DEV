import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntTestingComponent } from './unt-testing.component';

describe('UntTestingComponent', () => {
  let component: UntTestingComponent;
  let fixture: ComponentFixture<UntTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UntTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
