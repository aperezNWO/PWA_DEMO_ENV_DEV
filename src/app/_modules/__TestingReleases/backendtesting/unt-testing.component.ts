import { Component        } from '@angular/core';
import { Router           } from '@angular/router';
import { Observable       } from 'rxjs';
import { BackendService   } from 'src/app/_services/backend/backend.service';
//
@Component({
  selector: 'app-unt-testing',
  templateUrl: './unt-testing.component.html',
  styleUrls: ['./unt-testing.component.css'],
})
//
export class UntTestingComponent {
  //
  protected lblStatusNodeJs               : string = '';
  //
  protected BtnTestNodeJSCaption          : string = '[TEST NODE.JS]';
  //
  protected lblStatusSpringBoot           : string = '';
  //
  protected BtnTestSpringBootCaption      : string = '[TEST SPRINGBOOT]';
  //
  protected lblStatusDjango               : string = '';
  //
  protected BtnTestDjangoCaption          : string = '[TEST DJANGO]';
  //
  constructor(
    private backendervice: BackendService,
    private router: Router,
  ) {
    //
  }
  //
  RedirectHome(): void {
    //
    this.router.navigateByUrl('/Home');
  }
  //
  TestNodeJs(): void {
    //
    console.log('[TEST NODE.JS] \n');
    //
    this.BtnTestNodeJSCaption = '...(retrieving data)...';
    //
    let testNodeJsObservable: Observable<string> =
      this.backendervice._TestNodeJs();
    //
    const testNodeJsObserver = {
      next: (jsondata: string) => {
        //
        this.lblStatusNodeJs =
          JSON.parse(jsondata)['recordsets'][0][0]['nombreCompleto'];
        //
        console.log('[TEST - NODEJS] - (return): ' + this.lblStatusNodeJs);
        //
        this.BtnTestNodeJSCaption = '[TEST NODE.JS]';
      },
      error: (err: Error) => {
        //
        console.error(
          '[TEST - NODEJS] - (ERROR) : ' + JSON.stringify(err.message),
        );
        //
        this.lblStatusNodeJs      =   err.message;
        //
        this.BtnTestNodeJSCaption = '[TEST NODE.JS]';
      },
      complete: () => {
        //
        console.log('[TEST - NODEJS]  -  (COMPLETE)');
        //
      },
    };
    //
    testNodeJsObservable.subscribe(testNodeJsObserver);
  }
  //
  TestSpringBoot(): void {
    //
    console.log('[TEST SPRINGBOOT] \n');
    //
    this.BtnTestSpringBootCaption = '...(retrieving data)...';
    //
    let testSprinbBootObservable: Observable<string> =
      this.backendervice._TestSprinbBoot();
    //
    const testSprinbBootObserver = {
      next: (jsonData: string) => {
        //
        this.lblStatusSpringBoot =  jsonData;
        //
        console.log('[TEST - NODEJS] - (return): ' + this.lblStatusSpringBoot);
        //
        this.BtnTestSpringBootCaption = '[TEST SPRINGBOOT]';
      },
      error: (err: Error) => {
        //
        let _status : string = JSON.stringify(err.message);
        //
        console.error(
          '[TEST - SPRINBBOOT] - (ERROR) : ' + _status 
        );
        //
        this.lblStatusSpringBoot =  _status;
        //
        this.BtnTestSpringBootCaption = '[TEST SPRINGBOOT]';
      },
      complete: () => {
        //
        console.log('[TEST - springboot]  -  (COMPLETE)');
      },
    };
    //
    testSprinbBootObservable.subscribe(testSprinbBootObserver);
  }
  //
  TestDjango(): void {
    //
    console.log('[TEST SPRINGBOOT] \n');
    //
    this.BtnTestDjangoCaption = '...(retrieving data)...';
    //
    let testDjangoObservable: Observable<string> =
      this.backendervice._TestDjango();
    //
    const testDjangoObserver = {
      next: (jsonData: string) => {
        //
        this.lblStatusDjango =  jsonData;
        //
        console.log('[TEST - NODEJS] - (return): ' + this.lblStatusDjango);
        //
        this.BtnTestDjangoCaption = '[TEST DJANGO]';
      },
      error: (err: Error) => {
        //
        let _status : string = JSON.stringify(err.message);
        //
        console.error(
          '[TEST - DJANGO] - (ERROR) : ' + _status 
        );
        //
        this.lblStatusDjango =  _status;
        //
        this.BtnTestDjangoCaption = '[TEST DJANGO]';
      },
      complete: () => {
        //
        console.log('[TEST - DJANGO]  -  (COMPLETE)');
      },
    };
    //
    testDjangoObservable.subscribe(testDjangoObserver);
  }
}

