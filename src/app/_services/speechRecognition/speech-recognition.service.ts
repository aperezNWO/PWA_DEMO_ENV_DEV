import { Injectable , Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  private recognition: any;

  constructor() {
        if ('SpeechRecognition' in window) {
          //this.recognition = new SpeechRecognition();
      } else if ('webkitSpeechRecognition' in window) {
          //this.recognition = new webkitSpeechRecognition();
      } else {
          // Handle the case where SpeechRecognition is not supported
          console.error('Speech recognition is not supported in this browser.');
          // You could display a message to the user or provide an alternative solution.
          //((this.recognition = new (window as any).SpeechRecognition() || new (window as any).webkitSpeechRecognition();
      }
  }
  public startRecognition() {
    this.recognition.lang = 'es-CO'; // Cambia 'es-CO' por el idioma deseado
    this.recognition.interimResults = true;

    this.recognition.addEventListener('result', (event: { results: { transcript: any; }[][]; })=> {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)   
        .join('');

      console.log(transcript);   
          // Puedes mostrar la transcripción en la UI
    });

    this.recognition.start();
  }
  public stopRecognition() {
    this.recognition.stop();
  }
}
