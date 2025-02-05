import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BackendService } from 'src/app/_services/backend/backend.service';
import { ShapeDetectionService } from 'src/app/_services/shapeDetection/shape-detection.service';


@Component({
  selector: 'app-open-cv-shape-recon',
  templateUrl: './open-cv-shape-recon.component.html',
  styleUrl: './open-cv-shape-recon.component.css'
})
export class OpenCvShapeReconComponent implements AfterViewInit  {
  detectedShapes: string[] = [];
  imageURL: string | ArrayBuffer | null = null;
  @ViewChild('video', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  videoStyle                                         : string | null = "width: 150px;height:150px; transform : scaleX(1);"; 
   ////////////////////////////////////////////////////////////////
  constructor(public mcsdService: BackendService, private shapeDetectionService: ShapeDetectionService) {


  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageURL = e.target.result;
        this.detectShapes();
      };
      reader.readAsDataURL(file);
    }
  }

  detectShapes(): void {
    const img = new Image();
    img.onload = () => {
          //
          const shapes = this.shapeDetectionService.detectShapes(img);
          this.detectedShapes = shapes;
          //
          const utterance = new SpeechSynthesisUtterance(this.detectedShapes.toString());
          speechSynthesis.speak(utterance);
    };
    img.src = this.imageURL as string;


  }


  ngAfterViewInit() {
    //this.startCamera();
  }
  ////////////////////////////////////////////////////
  
}
