import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';

angular.module('Thomas_Swenson_Proj3', [
  angularMeteor,
  todosList.name
]);
