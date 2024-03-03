import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicspendingComponent } from './topicspending.component';

describe('TopicspendingComponent', () => {
  let component: TopicspendingComponent;
  let fixture: ComponentFixture<TopicspendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicspendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicspendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
