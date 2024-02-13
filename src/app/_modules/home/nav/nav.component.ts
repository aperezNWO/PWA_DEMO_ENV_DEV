import { Component, OnInit, VERSION    } from '@angular/core';
import { Title                         } from '@angular/platform-browser';
import { CustomErrorHandler            } from 'src/app/app.component';
import { MCSDService                   } from 'src/app/_services/mcsd.service';
import { _ConfigService                } from 'src/app/_services/-config.service';
//
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
//
export class NavComponent {

    // propiedades publicas
    public readonly _brand                                       : string | undefined  = "";
    public readonly _title                                       : string | undefined  = "";
    public readonly _appName                                     : string | undefined  = "";
    public readonly _appVersion                                  : string | undefined  = "";
    //
    public  _navbarCollapsed                                     : boolean = true;
    static  navbarCollapsed                                      : boolean;
    //
    public get _NavbarCollapsed() : boolean {
      //
      return this._navbarCollapsed;
    }
    //
    public set _NavbarCollapsed(p_navbarCollapsed: boolean) {
        //
        this._navbarCollapsed = p_navbarCollapsed;
    }
    //
    pages =[
    {
      'url' : '/Home',
      'text': '[HOME]',
    },
    {
      'url': '/Miscelaneous', 
      'text': '[MISCELANEOUS]',
    },  
    {
      'url': '/GamesWeb', 
      'text': '[GAMES]',
    },    
    {
      'url': '/AlgorithmWeb',
      'text': '[ALGORITMOS]',
    },
    {
      'url': '/FilesGenerationWeb', 
      'text': '[GENERAR ARCHIVOS]',
    },
    {
      'url' : '/AAboutWeb', 
      'text': '[ACERCA DE]',
    },    
  ];
    //-----------------------------------------------------------------------------------------------------
    constructor(
                private _customErrorHandler : CustomErrorHandler, 
                private mcsdService         : MCSDService, 
                private _configService      : _ConfigService,
                private titleService        : Title
               ) 
    {
      //
      console.log("Loading AppComponent...");
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
      //
      let __baseUrlNetCore = this._configService.getConfigValue('baseUrlNetCore');
      let __baseUrlNodeJs  = this._configService.getConfigValue('baseUrlNodeJs');
      //
      this.mcsdService._baseUrlNetCore = __baseUrlNetCore;
      this.mcsdService._baseUrlNodeJs  = __baseUrlNodeJs;
      //
      //////////////////////////////////////////////////////
      // CACHE PARA XML
      ///////////////////////////////////////////////////////
      //
      this.mcsdService._SetXmlDataToCache(__baseUrlNetCore);
      ///////////////////////////////////////////////////////
      // CACHE PARA PIE CHART
      ///////////////////////////////////////////////////////
      this.mcsdService._SetSTATPieCache(__baseUrlNetCore);
      ///////////////////////////////////////////////////////
      // CACHE PARA BARCHART
      ///////////////////////////////////////////////////////
      this.mcsdService._SetSTATBarCache(__baseUrlNetCore);
      //
      let title : string = `${this._appName} - ${this._appVersion}`;
      //
      this.titleService.setTitle(title);
      //
      console.log("Setting Title : " + title);
      //
      this._brand = `${this._appName}`;
    }   
    //-----------------------------------------------------------------------------------------------------
    ngOnInit() {
        //
    }
    //
    getValueFromConfig(key: string) {
      return this._configService.getConfigValue(key);
    }
}   
