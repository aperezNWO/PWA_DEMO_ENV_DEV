import { Component, VERSION                     } from '@angular/core';
import { Title                                  } from '@angular/platform-browser';
import { Router                                 } from '@angular/router';
import { ConfigService                          } from 'src/app/_services/config/config.service';
import { CustomErrorHandler, LoggingInterceptor } from 'src/app/app.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  //
  title          : string = 'PWA_DEMO_ENV_TEST';
  //
  _title         : string = '';
  _appBrand      : string = '';
  _appEnv        : string = '';
  _appVersion    : string = '';
  runtimeVersion : string = VERSION.full;
  //
  pages =[
    {
      'url' : '/Home',
      'text': '[Home]',
    },
    {
      'url': '/Dev',
      'text': '[Testing Releases]',
    },
    {
      'url': '/StableReleases',
      'text': '[Stable Releases]',
    },
     {
      'url': '/About', 
      'text': '[About]',
    }      
  ];
  //
  private  navbarCollapsed     : boolean = true;
  //
  public get NavbarCollapsed() : boolean {
    //
    return this.navbarCollapsed;
  }
  //
  public set NavbarCollapsed(p_navbarCollapsed: boolean) {
        //
        this.navbarCollapsed = p_navbarCollapsed;
  }
  //
  constructor(public router: Router, private configService: ConfigService , private titleService : Title, public customErrorHandler: CustomErrorHandler, public loggingInterceptor : LoggingInterceptor) {
    // IMPLEMENT AS MAP AND ITERATE
    //
    this._appBrand   = this.configService.getConfigValue("appBrand");
    this._appEnv     = this.configService.getConfigValue("appEnv");
    this._appVersion = this.configService.getConfigValue("appVersion");
    //
    this._title      = `${this._appBrand} - ${this._appEnv}  - v[${this._appVersion}]`;
    //
    console.log(`${this._title}`);
  }
  //
  ngOnInit() {
    //
    this.titleService.setTitle(this._title);
  }
}
