import { Injectable, NgModule                       } from '@angular/core';
import { APP_INITIALIZER,ErrorHandler, isDevMode    } from '@angular/core';
import { CommonModule, DatePipe                     } from '@angular/common';
import { ServiceWorkerModule             } from '@angular/service-worker';
import { FormsModule                     } from '@angular/forms';
import { MatListModule                   } from '@angular/material/list';
import { MatTableModule                  } from '@angular/material/table';
import { MatPaginatorModule              } from '@angular/material/paginator';
import { MatTabsModule                   } from '@angular/material/tabs';
import { BrowserModule                   } from '@angular/platform-browser';
import { BrowserAnimationsModule         } from '@angular/platform-browser/animations';
import { ReactiveFormsModule             } from '@angular/forms';
import { HttpClient, HttpClientModule    } from '@angular/common/http';
import { HttpHandler, HttpInterceptor    } from '@angular/common/http';
import { HttpRequest, HttpResponse       } from '@angular/common/http';
import { HTTP_INTERCEPTORS               } from '@angular/common/http';
import { RouterModule                    } from '@angular/router';
import { HashLocationStrategy            } from '@angular/common';
import { LocationStrategy                } from '@angular/common';
import { NgbModule                       } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent                    } from './app.component';
import { HomeWebComponent                } from './_modules/home/home-web/home-web.component';
import { ContactComponent                } from './_modules/about/contact/contact.component';
import { AAboutWebComponent              } from './_modules/about/a-about-web/a-about-web.component';
import { TechnicalSpecsComponent         } from './_modules/about/technicalspecs/technical-specs/technical-specs.component';
import { AngularTutorialsnWebComponent   } from './_modules/topics/angular-tutorialsn-web/angular-tutorialsn-web.component';
import { FilesGenerationWebComponent     } from './_modules/files-generation/files-generation-web/files-generation-web.component';
import { FilesGenerationXLSComponent     } from './_modules/files-generation/files-generation-xls/files-generation-xls.component';
import { FilesGenerationCSVComponent     } from './_modules/files-generation/files-generation-csv/files-generation-csv.component';
import { FilesGenerationPDFComponent     } from './_modules/files-generation/files-generation-pdf/files-generation-pdf.component';
import { FilesGenerationZIPComponent     } from './_modules/files-generation/files-generation-zip/files-generation-zip.component';
import { AlgorithmDijkstraComponent      } from './_modules/algorithm/algorithm-dijkstra/algorithm-dijkstra.component';
import { AlgorithmWebComponent           } from './_modules/algorithm/algorithm-web/algorithm-web.component';
import { AlgorithmRegExComponent         } from './_modules/algorithm/algorithm-reg-ex/algorithm-reg-ex.component';
import { AlgorithmSortComponent          } from './_modules/algorithm/algorithm-sort/algorithm-sort.component';
import { SudokuComponent                 } from './_modules/games/game-sudoku/game-sudoku.component';
import { GameTictactoeComponent          } from './_modules/games/game-tictactoe/game-tictactoe.component';
import { BoardComponent                  } from './_modules/games/game-tictactoe/board/board.component';
import { SquareComponent                 } from './_modules/games/game-tictactoe/square/square.component';
import { GameWebComponent                } from './_modules/games/game-web/game-web.component';
import { HanoiTowersComponent            } from './_modules/games/game-hanoi/game-hanoi.component';
import { TowerComponent                  } from './_modules/games/game-hanoi/tower/tower.component';
import { OcrComponent                    } from './_modules/miscelaneous/ocr/ocr.component';
import { ChatComponent                   } from './_modules/miscelaneous/chat/chat/chat.component';
import { MiscelaneousComponent           } from './_modules/miscelaneous/miscelaneous/miscelaneous.component';
import { LogType                         } from './_models/entityInfo.model';
import { MCSDService                     } from './_services/mcsd.service';
import { _ConfigService                  } from './_services/-config.service';
import { UnitTestingComponent            } from './unit-testing/unit-testing.component';
import { finalize, tap                   } from 'rxjs';
import { NgxSignaturePadModule           } from '@eve-sama/ngx-signature-pad';

//
const routes = [
  {  path: 'Home'                  , component: HomeWebComponent                      },
  {  path: 'AAboutWeb'             , component: AAboutWebComponent                    },
  {  path: 'Contact'               , component: ContactComponent                      },
  {  path: 'TechnicalSpecs'        , component: TechnicalSpecsComponent               },
  {  path: 'AngularTutorialsnWeb'  , component: AngularTutorialsnWebComponent         },
  {  path: 'AlgorithmWeb'          , component: AlgorithmWebComponent                 },
  {  path: 'AlgorithmRegEx'        , component: AlgorithmRegExComponent               },
  {  path: 'AlgorithmSort'         , component: AlgorithmSortComponent                },
  {  path: 'AlgorithmDijkstra'     , component: AlgorithmDijkstraComponent            },
  {  path: 'FilesGenerationWeb'    , component: FilesGenerationWebComponent           },
  {  path: 'FilesGenerationXLS'    , component: FilesGenerationXLSComponent           },
  {  path: 'FilesGenerationCSV'    , component: FilesGenerationCSVComponent           },
  {  path: 'FilesGenerationPDF'    , component: FilesGenerationPDFComponent           },
  {  path: 'FilesGenerationZIP'    , component: FilesGenerationZIPComponent           },         
  {  path: 'GamesSudoku'           , component: SudokuComponent                       },
  {  path: 'GamesTicTacToe'        , component: GameTictactoeComponent                },
  {  path: 'GamesHanoi'            , component: HanoiTowersComponent                  },
  {  path: 'GamesWeb'              , component: GameWebComponent                      },
  {  path: 'Chat'                  , component: ChatComponent                         },
  {  path: 'Ocr'                   , component: OcrComponent                          },
  {  path: 'Miscelaneous'          , component: MiscelaneousComponent                 },
  {  path: '**'                    , component: AppComponent                          },
];
//
export function initialize(_configService: _ConfigService) {
  // 
  return () => _configService.loadConfig();
}
//
@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

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
          console.warn(' [REQUESTIN URL (INTERCEPT)] : ' + msg);
        })
      );
  }
}
//  
@Injectable({
  providedIn: 'root'
})
//
export class CustomErrorHandler implements ErrorHandler {
    //
    constructor(public mcsdService : MCSDService) { } 
    //
    handleError(_error: Error): void 
    { 
      // 
      console.warn("[CUSTOM ERROR HANDLING]:\n" + _error); 
      //
      let logType : LogType = LogType.Error
      //
      this.mcsdService.SetLog("[CUSTOM ERROR HANDLING]",_error.message,logType);
    } 
}
//
@NgModule({
    declarations: [
        AppComponent,
        HomeWebComponent,
        ContactComponent,
        AAboutWebComponent,
        AngularTutorialsnWebComponent,
        AlgorithmWebComponent,
        AlgorithmRegExComponent,
        AlgorithmSortComponent,
        AlgorithmDijkstraComponent,
        FilesGenerationWebComponent,
        FilesGenerationXLSComponent,
        FilesGenerationCSVComponent,
        FilesGenerationPDFComponent,
        FilesGenerationZIPComponent,
        TechnicalSpecsComponent,
        UnitTestingComponent,
        SudokuComponent,
        GameTictactoeComponent,
        HanoiTowersComponent,
        GameWebComponent,
        OcrComponent,
        ChatComponent,
        MiscelaneousComponent,
    ],
    exports: [RouterModule],
    providers: [
        {  provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
        {  provide: LocationStrategy, useClass: HashLocationStrategy },
        {  provide: ErrorHandler, useClass: CustomErrorHandler },
        [
          _ConfigService,
          {
            provide   : APP_INITIALIZER,
            useFactory: initialize,
            deps      : [_ConfigService,MCSDService,HttpClient],
            multi     : true
          }
        ],
        DatePipe,
    ],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        NgbModule,
        NgxSignaturePadModule,
        BoardComponent,
        SquareComponent,
        TowerComponent,
        RouterModule,
        RouterModule.forRoot(routes, { useHash: true }),
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
   ]
})
//
export class AppModule { 
    //-----------------------------------------------------------------------------------------------------
    constructor(public customErrorHandler : CustomErrorHandler, 
                public loggingInterceptor : LoggingInterceptor,
                public mcsdService : MCSDService,) 
    {
      //
    }
}



