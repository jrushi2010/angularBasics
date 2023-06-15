import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'root'  //get singleton instances 
  // providedIn: 'any'  
  //it will create 1 instance for entire App and another instance for each lazy loaded module if we use this service in another modules
  //it will use for pass configuration or override any configuration inside any lazy loaded module. 
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) { 
    console.log('ConfigServices intialized');
    console.log(this.configToken);
  }
}
