import { PageSettingDictionary } from '../app/_models/common/common';

export const environment = {
    production: true, // Set to true in environment.prod.ts
    externalConfig: {} // Placeholder for external configuration
};

interface EnvironmentConfig {
    externalConfig          : {};                //
    pageSettingDictionary   : PageSettingDictionary;
    /*
    currentUserId           : number;
    currentUserRoles        : string;     
    usersInfo               : [];                // 
    routesList              : [];                // 
    usersList               : [];                // 
    usersDictionary         : [];                // 
    jsonList                : PageSetting[];     // */
    scmList                 : [],                //  
    aiPrompts               : []                 //
}


export const _environment : EnvironmentConfig  = {
    externalConfig          : {},        // 
    pageSettingDictionary   : {},
    /*
    currentUserId           : 0,       
    currentUserRoles        : "",      
    usersInfo               : [],        // 
    routesList              : [],        // 
    usersList               : [],        // 
    usersDictionary         : [],        // 
    jsonList                : [],        // */
    scmList                 : [],                //      
    aiPrompts               : []         // 
};

