import { NgModule                      } from '@angular/core';
import { Route, RouterModule, Routes   } from '@angular/router';
import { HanoiAutoComponent } from './_modules/__StableReleases/_games/hanoi/hanoi-auto/hanoi-auto.component';
import { HanoiObservableComponent } from './_modules/__StableReleases/_games/hanoi/hanoi-observable/hanoi-observable.component';
import { HanoiTowersComponent } from './_modules/__StableReleases/_games/hanoi/hanoi-towers/game-hanoi.component';
import { Hanoi3dComponent } from './_modules/__StableReleases/_games/hanoi3d/hanoi3d.component';
import { SudokuComponent } from './_modules/__StableReleases/_games/sudoku/sudoku.component';
import { TetrisComponent } from './_modules/__StableReleases/_games/tetris/tetris.component';
import { TicTacToeComponent } from './_modules/__StableReleases/_games/tic-tac-toe/offline/tic-tac-toe.component';
import { TicTacToeOnlineComponent } from './_modules/__StableReleases/_games/tic-tac-toe/tic-tac-toe-online/tic-tac-toe-online.component';
import { BouncingBallComponent } from './_modules/__StableReleases/_miscelaneous/bouncing-ball/bouncing-ball.component';
import { ChatComponent } from './_modules/__StableReleases/_miscelaneous/chat/chat/chat.component';
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
import { HomeComponent } from './_modules/_home/home/home.component';
import { NotFoundPageComponent } from './_modules/_home/not-found-page/not-found-page.component';
import { IndexComponent } from './_modules/about/index/index.component';
import { LLMListComponent } from './_modules/about/llms/llm-list.component';
import { ContactFormComponent } from './_modules/about/contactForm/contact-form..component';
import { SCMComponent } from './_modules/about/scm/scm.component';
import { TopicsComponent } from './_modules/about/topics/topics.component';
import { AboutComponent } from './_modules/about/about/about.component';

//
export interface _Route extends Route
{
    caption : string;
}

//
export const routes : _Route[] = [ 
  { path: 'Home'             , component: HomeComponent              , caption : 'Home'                },
  { path: ''                 , component: HomeComponent              , caption : ''                    },
  { path: 'Sudoku'           , component: SudokuComponent            , caption : 'Sudoku'              },
  { path: 'TicTacToe'        , component: TicTacToeComponent         , caption : 'TicTacToe'           },
  { path: 'TicTacToeOnline'  , component: TicTacToeOnlineComponent   , caption : 'TicTacToe-Online'    },
  { path: 'Hanoi'            , component: HanoiTowersComponent       , caption : 'Hanoi - Timer'       },
  { path: 'HanoiRjxs'        , component: HanoiObservableComponent   , caption : 'Hanoi - Rjxs'        },
  { path: 'HanoiAuto'        , component: HanoiAutoComponent         , caption : 'Hanoi - Rjxs -Auto'  },
  { path: 'Hanoi3d'          , component: Hanoi3dComponent           , caption : 'Hanoi - 3d'          },
  { path: 'RxJsPlayground'   , component: RxJSPlaygroundComponent    , caption : 'RxJs-Playground'     },
  { path: 'OcrPhotoCapture'  , component: OcrPhotoCaptureComponent   , caption : 'Ocr-Photo-Capture'   },
  { path: 'Ocr'              , component: OcrComponent               , caption : 'Ocr'                 },
  { path: 'Chat'             , component: ChatComponent              , caption : 'Chat'                     },
  { path: 'SpeechRecognition', component: SpeechRecognitionComponent , caption : 'Speech  - Recognition'    },
  { path: 'ShapeReconCanvas' , component: ShapeReconCanvasComponent  , caption : 'Shape   - Recon - Canvas' },
  { path: 'ShapeRecognition' , component: OpenCvShapeReconComponent  , caption : 'Shape   - Recognition' },
  { path: 'BackendTesting'   , component: UntTestingComponent        , caption : 'Backend - Testing'     },
  { path: 'BouncingBall'     , component: BouncingBallComponent      , caption : 'Boucing - Testing'     },
  { path: 'Tetris'           , component: TetrisComponent            , caption : 'Tetris  - Testing'     },
  { path: 'MathParsing'      , component: MathParsingComponent       , caption : 'Math    - Testing'     },
  { path: 'Dev'              , component: DevComponent               , caption : 'Testing Releases'      },
  { path: 'StableReleases'   , component: StableReleasesComponent    , caption : 'Stable Releases'       },
  { path: 'SCM'              , component: SCMComponent               , caption : 'About - SCM'           },
  { path: 'Topics'           , component: TopicsComponent            , caption : 'About - Topics'        },
  { path: 'LLMs'             , component: LLMListComponent           , caption : 'About - LLM List'      },
  { path: 'Index'            , component: IndexComponent             , caption : 'About - Index'         },
  { path: 'ContactForm'      , component: ContactFormComponent       , caption : 'About - Contact Form'  },
  { path: 'About'            , component: AboutComponent             , caption : 'About'                 },
  { path: '**'               , component: NotFoundPageComponent      , caption : ''                      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
