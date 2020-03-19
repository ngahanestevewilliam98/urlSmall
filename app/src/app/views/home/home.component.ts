import { Component } from '@angular/core';
import * as toastDisplay from 'toast-display';
import axios from 'axios';
import { Loader } from './../../helpers/loader';
import { Server } from './../../helpers/server';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  redirectUrl: string;
  uniqueUrl: string;

  constructor() { }

  empty(e: string): boolean {
    if (e === undefined || e.length === 0) { return true; } else { return false; }
  }

  async saveLinks() {
    if (this.empty(this.redirectUrl)) {
      toastDisplay.show({ message: 'Error, please fill in all the links.', backgroundColor: 'red' });
    } else {
      Loader.show();
      try {
        const route = `${Server.baseUrl()}/url/add`;
        const params = {
          redirectUrl: this.redirectUrl
        };
        const request = await axios.post(route, params);
        this.uniqueUrl = `${Server.baseUrl()}/url/${request.data.unique}`;
        Loader.dismiss();
        toastDisplay.show({ message: 'Successful link building' });
      } catch (error) {
        Loader.dismiss();
        if (`${error}`.includes('404')) {
          toastDisplay.show({ message: 'Error, incomplete parameters', backgroundColor: 'red' });
        } else if (`${error}`.includes('0')) {
          toastDisplay.show({ message: 'Error, check your internet connection', backgroundColor: 'red' });
        } else {
          toastDisplay.show({ message: 'Error during request', backgroundColor: 'red' });
        }
      }
    }
  }

}
