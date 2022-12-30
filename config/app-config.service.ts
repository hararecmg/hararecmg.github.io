import { Injectable, APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './config.service';

export function configFactory(configService: ConfigService) {
  return () => configService.loadConfig();
}

@Injectable({
  providedIn: 'root',
  useFactory: configFactory,
  deps: [ConfigService],
//   multi: true
})
export class AppConfig { }

// Cuando se inicie la aplicación se ejecutará la función 
// configFactory que a su vez cargará los datos privados 
// del archivo config.json utilizando el servicio ConfigService.
// Luego utiliza la variable de entorno de Angular fbAppId en el
//  archivo index.html para establecer el valor del atributo content
//   de la meta etiqueta de Facebook `fb:app_id` como sigue:
// <meta property="fb:app_id" content="{{ fbAppId }}">.