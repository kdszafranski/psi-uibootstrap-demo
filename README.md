# Angular UI and Boostrap UI

Angular UI (UI stuff implemented in Angular)
https://angular-ui.github.io/

UI Bootstrap (AngularJS version of Bootstrap)
- styling
- UI component library
- modals, accordions, drop-down menus


## UI Bootstrap

### Installation/Set-up

These instructions are pretty good but are a little dense: https://angular-ui.github.io/bootstrap/

### TLDR
- minified, include templates
- `npm install angular-ui-bootstrap`
  - doesn't seem to include the min version
  - node_modules/angular-ui-bootstrap/dist
- move to public/vendor
- source in files to index.html
- still need regular bootstrap CSS http://getbootstrap.com/getting-started/#download
  - be sure to install the fonts! this is where our cool icons are
- requires ngAnimate as dependency??
- inject into Angular app module

### Dependency Injection

Examples on the UI Bootstrap site are pretty good. Some changes need to be made to get them to work with your projects, however.

Notably, you need to inject the dependency at the app module level, so UI Bootstrap is available to all of your controllers.

```
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
```

Most of the examples on this site are using `$scope` to bind things to the DOM. You do not need to inject `$scope` into your controllers. Beyond that, to convert the code, you can usually just replace `$scope` with `vm`

`$scope.example` becomes `vm.example`

### Alerts

Alerts are one of the most straight-forward directives to use. See the example code.


### Modals

Modal (not model!) is a user interface concept where you direct the user's attention to an overlay window for additional information about whatever was clicked on. The term "modal" refers that this overlay is the only thing that can be acted upon, essential a "mode". It must be dealt with before continuing.

There are many solutions for inserting modal dialog boxes into your application. If you're already using Bootstrap, using their modal system makes sense.

A modal may look visually complicated, but the idea is pretty easy. A modal is just a div inserted into the DOM and given a z-index to make it appear above or on top of everything else. Usually there is also a semi-transparent darkened image applied directly underneath it to shade the background page. This draws the user's eye to the modal window.
