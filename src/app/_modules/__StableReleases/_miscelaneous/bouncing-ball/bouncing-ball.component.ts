import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PageRestartService } from 'src/app/_services/pageRestart/page-restart.service';

@Component({
  selector: 'app-bouncing-ball',
  templateUrl: './bouncing-ball.component.html',
  styleUrls: ['./bouncing-ball.component.css']
})
export class BouncingBallComponent implements AfterViewInit {
  @ViewChild('ballCanvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement> | null;
  private ctx!: CanvasRenderingContext2D | null;
  private ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 0,
    radius: 15,
    mass: 1
  };
  private gravity = 0.5;  // Gravity pulling down
  private friction = 0.98; // Friction to slow down the ball
  private restitution = 0.8; // Bounce factor, 1 = perfect elastic collision, <1 = energy loss

  constructor(private pageRestartService: PageRestartService)
  {
    
  }
  restart() {
    this.pageRestartService.reloadPage(); // or use any other method
  }
  ngAfterViewInit() {
    this.animate();
  }

  animate = () => {
    this.ctx = this.canvas!.nativeElement.getContext('2d');
    // Clear canvas
    this.ctx!.clearRect(0, 0, this.canvas!.nativeElement.width, this.canvas!.nativeElement.height);

    // Apply physics
    this.ball.vy += this.gravity; // Apply gravity
    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    // Check for collisions with canvas edges
    if (this.ball.x + this.ball.radius > this.canvas!.nativeElement.width || this.ball.x - this.ball.radius < 0) {
      this.ball.vx = -this.ball.vx * this.restitution;
    }
    if (this.ball.y + this.ball.radius > this.canvas!.nativeElement.height) {
      this.ball.y = this.canvas!.nativeElement.height - this.ball.radius;
      this.ball.vy = -this.ball.vy * this.restitution;
      // Apply friction on x-axis when ball hits the ground to slow down
      this.ball.vx *= this.friction;
    }

    // Draw ball
    this.ctx!.beginPath();
    this.ctx!.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.ctx!.fillStyle = "red";
    this.ctx!.fill();
    this.ctx!.closePath();

    // Check if ball has stopped (friction)
    if (Math.abs(this.ball.vx) < 0.1 && Math.abs(this.ball.vy) < 0.1) {
      this.ball.vx = 0;
      this.ball.vy = 0;
    } else {
      requestAnimationFrame(this.animate);
    }
  }
}
/*
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bouncing-ball',
  templateUrl: './bouncing-ball.component.html',
  styleUrls: ['./bouncing-ball.component.css']
})
export class BouncingBallComponent implements AfterViewInit {
  @ViewChild('ballCanvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement> | null;
  private ctx!: CanvasRenderingContext2D | null;
  // Ball properties
  private ballRadius = 10;
  private x = 200; // Starting position x
  private y = 200; // Starting position y
  private dx = 2;  // Horizontal velocity
  private dy = -2; // Vertical velocity (negative means moving up)
  private gravity = 0.1; // Acceleration due to gravity

  ngAfterViewInit() {
    this.ctx = this.canvas!.nativeElement.getContext('2d');
    this.draw();
  }

  private draw() {
    // Clear the canvas
    this.ctx?.clearRect(0, 0, this.canvas!.nativeElement.width, this.canvas!.nativeElement.height);
    
    // Draw the ball
    this.ctx?.beginPath();
    this.ctx?.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
    //this.ctx?.fillStyle = "#0095DD";
    this.ctx?.fill();
    this.ctx?.closePath();

    // Update ball position with gravity
    this.x += this.dx;
    this.y += this.dy;
    this.dy += this.gravity;

    // Bounce off the walls
    if(this.x + this.dx > this.canvas!.nativeElement.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
      this.dx = -this.dx; // Reverse direction on horizontal edges
    }
    // Bounce off the top and bottom
    if(this.y + this.dy > this.canvas!.nativeElement.height - this.ballRadius) {
      this.y = this.canvas!.nativeElement.height - this.ballRadius;
      this.dy = -this.dy * 0.9; // Reverse direction with energy loss (simulating bounce decay)
    }
    if(this.y + this.dy < this.ballRadius) {
      this.dy = -this.dy; // Bounce off the top of the canvas
    }

    // Animate
    requestAnimationFrame(() => this.draw());
  }
}
*/