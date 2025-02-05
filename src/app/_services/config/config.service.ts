import { Injectable                 } from '@angular/core';
import { HttpClient                 } from '@angular/common/http';
import { _environment               } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(protected http: HttpClient) 
  {

  }
  loadSCMList() {
    return this.http.get('./assets/json/scm.json').toPromise()
      .then((data: any) => {
          //
          console.log("loading scm list..." + JSON.stringify(data));
          //
          _environment.scmList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }
  
  //
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadAiPrompts() {
    return this.http.get('./assets/json/llm.json').toPromise()
      .then((data: any) => {
          //
          console.log("loading LLMs..." + JSON.stringify(data));
          //
          _environment.aiPrompts = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadConfig() {
    return this.http.get('./assets/config.json').toPromise()
      .then((data: any) => {
          //
          ////console.log("loading configuration..." + JSON.stringify(data));
          //
          _environment.externalConfig = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }
  //
  getConfigValue(key: string) {
    //
    let jsonData : string = JSON.parse(JSON.stringify(_environment.externalConfig))[key];
    //
    return jsonData;
  }
}