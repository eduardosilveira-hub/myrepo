import $ from 'jquery';
(window as any).$ = $;

import "regenerator-runtime/runtime";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  Account,
  Common,
  Home,
  Payments
} from './libraries';
import { LoadingService, UserService } from './services';

(window as any).CSSP = {
  'Account': Account,
  'Common': Common,
  'Home': Home,
  'Payments': Payments,
  'UserService': UserService,
  'LoadingService': LoadingService,
};

window.addEventListener('load', (ev) => {
  LoadingService.start();
  //@ts-ignore
  CSSP.Common.initialLoad();
})