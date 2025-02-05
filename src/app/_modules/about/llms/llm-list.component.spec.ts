import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LLMListComponent           } from './llm-list.component';

describe('LMListComponent', () => {
  let component: LLMListComponent;
  let fixture: ComponentFixture<LLMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LLMListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LLMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
