import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCMComponent } from './scm.component';

describe('SCMComponent', () => {
  let component: SCMComponent;
  let fixture: ComponentFixture<SCMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCMComponent]
    });
    fixture = TestBed.createComponent(SCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
