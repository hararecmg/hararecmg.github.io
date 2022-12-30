import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
    private config: { fbAppId: string }
) {}

  async loadConfig() {
    // this.config = await this.http.get<{ fbAppId: string }>('/config.json').toPromise();
  }

  getFbAppId(): string {
    return this.config.fbAppId;
  }
}
