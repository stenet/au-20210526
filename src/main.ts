import Aurelia from 'aurelia';
import { RouterConfiguration } from 'aurelia-direct-router';
import { MyApp } from './my-app';

Aurelia
  .register(RouterConfiguration.customize({
    //statefulHistoryLength: 10
  }))
  .app(MyApp)
  .start();
