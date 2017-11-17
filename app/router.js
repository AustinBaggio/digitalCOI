import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('checkCompliance');
  this.route('home');
  this.route('building');
  this.route('tenant');
  this.route('tennantOne');
  this.route('photoAdd');
});

export default Router;
