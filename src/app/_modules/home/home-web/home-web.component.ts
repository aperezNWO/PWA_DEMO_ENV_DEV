import { Component            } from '@angular/core';
import { CustomErrorHandler   } from '../../../app.module';
import { MCSDService          } from '../../../_services/mcsd.service';
import { _ConfigService       } from 'src/app/_services/-config.service';
//
@Component({
  selector    : 'app-home-web',
  templateUrl : './home-web.component.html',
  styleUrls   : ['./home-web.component.css']
})
export class HomeWebComponent {
  //
  public readonly _appName    : string = '';
  public readonly _appVersion : string = '';
  pageTitle                   : string = '[HOME]';
  static PageTitle            : string = '[HOME]';
  //
  constructor(mcsdService : MCSDService, private _configService: _ConfigService, customErrorHandler : CustomErrorHandler)
  {
      //
      console.log(this.pageTitle + " - [INGRESO]") ;
      //
      if (mcsdService._baseUrlNetCore != null)
      {
        //
        mcsdService.SetLog(this.pageTitle,"PAGE_ANGULAR_DEMO_INDEX");
      }
      // IMPLEMENT AS MAP AND ITERATE
      let keyName  : string = '';
      let keyValue : string = '';
      //
      keyName  = 'appName';
      keyValue = this._configService.getConfigValue(keyName);
      //
      this._appName = keyValue;
      //
      keyName          = 'appVersion';
      keyValue         = this._configService.getConfigValue(keyName);
      this._appVersion = keyValue;
  }
}
