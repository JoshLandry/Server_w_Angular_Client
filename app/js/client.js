'use strict';

require('angular/angular');

var goatsApp = angular.module('goatsApp', []);

require('./goats/controllers/goats_controller')(goatsApp);