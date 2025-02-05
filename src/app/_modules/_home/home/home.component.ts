import { Component          } from '@angular/core';
import { Title              } from '@angular/platform-browser';
import { ConfigService      } from 'src/app/_services/config/config.service';
import { CustomErrorHandler, LoggingInterceptor } from 'src/app/app.module';
//
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // 
  _appBrand      : string = '';
  _appVersion    : string = '';
  _appEnv        : string = '';
  _title         : string = '';
  //
    //
    pages =[
      {
        'url': '/Dev', 
        'text': '[TESTING]',
      },  
      {
        'url': '/StableReleases', 
        'text': '[PRODUCTION]',
      },    
      {
        'url': '/SCM',
        'text': '[SCM]',
      },
      {
        'url': '/LLMs', 
        'text': '[LLMs]',
      }
    ];
  //
  constructor(private titleService: Title, private configService: ConfigService,public customErrorHandler : CustomErrorHandler,public loggingInterceptor : LoggingInterceptor) {
    // IMPLEMENT AS MAP AND ITERATE
    this._appBrand   = this.configService.getConfigValue("appBrand");
    this._appVersion = this.configService.getConfigValue("appVersion");
    this._appEnv     = this.configService.getConfigValue("appEnv");
    //
    this._title = this._appBrand + "-" +  this._appEnv + " - v[" + this._appVersion + "]";
    //
    console.log(this._title);
    //
    this.titleService.setTitle(this._title);
  }
}
