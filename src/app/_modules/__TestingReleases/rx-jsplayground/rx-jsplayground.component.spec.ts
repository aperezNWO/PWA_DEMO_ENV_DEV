import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSPlaygroundComponent } from './rx-jsplayground.component';

describe('RxJSPlaygroundComponent', () => {
  let component: RxJSPlaygroundComponent;
  let fixture: ComponentFixture<RxJSPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJSPlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxJSPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
