import { TestBed } from '@angular/core/testing';
import { SpeechRecognitionService } from './speech-recognition.service';


describe('SpeechRecognitionServiceService', () => {
  let service: SpeechRecognitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechRecognitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
