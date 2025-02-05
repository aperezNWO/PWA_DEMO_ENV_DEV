import { APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpHandler, HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogType } from './_models/algorithm.model';
import { ConfigService } from './_services/config/config.service';
import { BackendService } from './_services/backend/backend.service';
import { NavComponent } from './_modules/_home/nav/nav.component';
import { SCMComponent } from './_modules/about/scm/scm.component';
import { TopicsComponent } from './_modules/about/topics/topics.component';
import { HomeComponent } from './_modules/_home/home/home.component';
import { IndexComponent } from './_modules/about/index/index.component';
import { NotFoundPageComponent } from './_modules/_home/not-found-page/not-found-page.component';
import { finalize, tap } from 'rxjs';
import { NgbHighlight, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSignaturePadModule } from '@eve-sama/ngx-signature-pad';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './_modules/about/about/about.component';
import { HanoiAutoComponent } from './_modules/__StableReleases/_games/hanoi/hanoi-auto/hanoi-auto.component';
import { HanoiObservableComponent } from './_modules/__StableReleases/_games/hanoi/hanoi-observable/hanoi-observable.component';
import { HanoiTowersComponent } from './_modules/__StableReleases/_games/hanoi/hanoi-towers/game-hanoi.component';
import { TowerComponent } from './_modules/__StableReleases/_games/hanoi/hanoi-towers/tower/tower.component';
import { Hanoi3dComponent } from './_modules/__StableReleases/_games/hanoi3d/hanoi3d.component';
import { SudokuComponent } from './_modules/__StableReleases/_games/sudoku/sudoku.component';
import { TetrisComponent } from './_modules/__StableReleases/_games/tetris/tetris.component';
import { BoardComponent } from './_modules/__StableReleases/_games/tic-tac-toe/offline/board/board.component';
import { TicTacToeComponent } from './_modules/__StableReleases/_games/tic-tac-toe/offline/tic-tac-toe.component';
import { BoardOnlineComponent } from './_modules/__StableReleases/_games/tic-tac-toe/tic-tac-toe-online/board/board.component';
import { TicTacToeOnlineComponent } from './_modules/__StableReleases/_games/tic-tac-toe/tic-tac-toe-online/tic-tac-toe-online.component';
import { BouncingBallComponent } from './_modules/__StableReleases/_miscelaneous/bouncing-ball/bouncing-ball.component';
import { ChatComponent } from './_modules/__StableReleases/_miscelaneous/chat/chat/chat.component';
import { MessageComponent } from './_modules/__StableReleases/_miscelaneous/chat/message/message.component';
import { MathParsingComponent } from './_modules/__StableReleases/_miscelaneous/math-parsing/math-parsing.component';
import { OcrPhotoCaptureComponent } from './_modules/__StableReleases/_miscelaneous/ocr-photo-capture/ocr-photo-capture.component';
import { StableReleasesComponent } from './_modules/__StableReleases/stable-releases/stable-releases.component';
import { DevComponent } from './_modules/__TestingReleases/_dev/dev.component';
import { UntTestingComponent } from './_modules/__TestingReleases/backendtesting/unt-testing.component';
import { OcrComponent } from './_modules/__TestingReleases/ocr/ocr.component';
import { OpenCvShapeReconComponent } from './_modules/__TestingReleases/open-cv-shape-recon/open-cv-shape-recon.component';
import { RxJSPlaygroundComponent } from './_modules/__TestingReleases/rx-jsplayground/rx-jsplayground.component';
import { ShapeReconCanvasComponent } from './_modules/__TestingReleases/shape-recon-canvas/shape-recon-canvas.component';
import { SpeechRecognitionComponent } from './_modules/__TestingReleases/speech-recognition/speech-recognition.component';
import { ContactFormComponent } from './_modules/about/contactForm/contact-form..component';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { LLMListComponent } from './_modules/about/llms/llm-list.component';
//  
@Injectable({
  providedIn: 'root'
})
//
export class CustomErrorHandler implements ErrorHandler {
  //
  constructor(public mcsdService: BackendService) { }
  //
  handleError(_error: Error): void {
    // 
    console.warn("[CUSTOM ERROR HANDLING]:\n" + _error.name + "\n" + _error.message);
    //
    let logType: LogType = LogType.Error
    //
    this.mcsdService.SetLog("[CUSTOM ERROR HANDLING]", _error.message, logType);
    //
  }
}
//
@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          // Operation failed; error is an HttpErrorResponse
          error: (error) => (ok = 'failed')
        }),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
          console.warn(' [REQUEST URL (INTERCEPT)] : ' + msg);
        })
      );
  }
}
//
export function loadConfig(configService: ConfigService) {
  //
  configService.loadAiPrompts();
  //
  configService.loadSCMList();
  //
  return () => configService.loadConfig();
}

//
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SudokuComponent,
    TicTacToeComponent,
    HanoiTowersComponent,
    HanoiObservableComponent,
    HanoiAutoComponent,
    MessageComponent,
    ChatComponent,
    RxJSPlaygroundComponent,
    TicTacToeOnlineComponent,
    OcrComponent,
    OcrPhotoCaptureComponent,
    NavComponent,
    DevComponent,
    SCMComponent,
    TopicsComponent,
    UntTestingComponent,
    SpeechRecognitionComponent,
    IndexComponent,
    NotFoundPageComponent,
    LLMListComponent,
    StableReleasesComponent,
    OpenCvShapeReconComponent,
    ShapeReconCanvasComponent,
    BouncingBallComponent,
    Hanoi3dComponent,
    TetrisComponent,
    MathParsingComponent,
    AboutComponent,
    ContactFormComponent
  ],
  providers: [DatePipe, DecimalPipe, HttpClient, provideClientHydration(),
    [
      { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
      { provide: ErrorHandler, useClass: CustomErrorHandler },
      ConfigService,
      {
        provide: APP_INITIALIZER,
        useFactory: loadConfig,
        deps: [ConfigService],
        multi: true
      },
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false, // Set to true if you want auto login
          providers: [
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider(
                '1763416537924183' // Replace with your Facebook App ID
              )
            }
          ]
        } as SocialAuthServiceConfig,
      }
    ],
  ],
  bootstrap: [AppComponent],
  imports: [
    BoardComponent,
    TowerComponent,
    BoardOnlineComponent,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxSignaturePadModule,
    NgbModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbHighlight,
    NgbPaginationModule,
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    ButtonModule,
    SocialLoginModule // Add SocialLoginModule
  ]
})
export class AppModule {
  constructor() {
      //
  }
}
