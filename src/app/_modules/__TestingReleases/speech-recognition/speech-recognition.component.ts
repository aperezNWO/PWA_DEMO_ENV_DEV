
import { Component, OnInit                } from '@angular/core';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrl: './speech-recognition.component.css'
})
export class SpeechRecognitionComponent  implements OnInit  {
  recognition: any;
  isListening = false;
  transcript: string = '';
  error: string = '';

  constructor() {
    // Initialize the SpeechRecognition object
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'es-CO'; // Set language
      this.recognition.interimResults = false; // Only final results
      this.recognition.maxAlternatives = 1;

      // Event handlers
      this.recognition.onresult = (event: any) => {
        this.transcript = event.results[0][0].transcript;
        console.log('Transcript:', this.transcript);
      };

      this.recognition.onerror = (event: any) => {
        this.error = event.error;
        console.error('Error:', this.error);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        console.log('Recognition ended.');
      };
    } else {
      alert('Speech Recognition API is not supported in your browser.');
    }
  }

  ngOnInit(): void {}

  startListening() {
    if (this.recognition) {
      this.isListening = true;
      this.recognition.start();
    }
  }

  stopListening() {
    if (this.recognition) {
      this.isListening = false;
      this.recognition.stop();
    }
  }

  speakText() {
    if (this.transcript) {
      const utterance = new SpeechSynthesisUtterance(this.transcript);
      utterance.lang = 'es-CO';
      window.speechSynthesis.speak(utterance);

    } else {
      alert('No text to speak!');
    }
  }
}

