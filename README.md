# Angular UI and Boostrap UI

## Angular UI

A project to make UI components implemented in AngularJS/2.

[https://angular-ui.github.io/](https://angular-ui.github.io/)

One of their projects is to make an Angular native version of Bootstrap!

## UI Bootstrap

AngularJS version of Bootstrap that builds on the CSS and recreates some of the UI components using AngularJS directives and conventions.

[https://angular-ui.github.io/bootstrap/](https://angular-ui.github.io/bootstrap/)


### Installation/Set-up

The installation instructions are pretty good but are a little hard to follow what all is required.

**This repo already has the files in the public/vendors folder**

1. Download the minified versions, include templates
  - Or `npm install angular-ui-bootstrap`
    - doesn't seem to include the min version
    - files are located in `node_modules/angular-ui-bootstrap/dist`
2. Move to public/vendor
3. Source in files to index.html
4. You still need regular bootstrap CSS   
  - [http://getbootstrap.com/getting-started/#download](http://getbootstrap.com/getting-started/#download)
  - be sure to install the fonts! this is where our cool icons are


### Dependency Injection

To use UI Bootstrap in your app, you need to inject the dependency at the app module level, so UI Bootstrap is available to all of your controllers.

```
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
```

### Working From the Examples

Examples on the UI Bootstrap site are pretty good. Some changes need to be made to get them to work with your projects, however. Sometimes the examples contain a lot more code than needed so focus on finding the important stuff: HTML needed and the controller code.

The example controllers on this site are using `$scope` to bind things to the DOM. You do not need to inject `$scope` into your controllers. Beyond that, to convert the code, you can usually just replace `$scope` with `vm`

`$scope.example` becomes `vm.example`

### Alerts

Alerts are one of the most straight-forward directives to use. It binds some variables and functions to the DOM. Pretty normal AngularJS stuff.


### Modals

There are many solutions for inserting modal dialog boxes into your application. If you're already using Bootstrap, using their modal system makes sense. Modal dialog boxes are pretty complex in general and using thier example is difficult to wade through.

Bootstrap's example code has way more than you really need to get it working. We'll cover pairing the example down to the bare-bones way to get it up and running.

#### Whatsit?

[A Modal (not model!) Dialog Box is a user interface concept](https://ux.stackexchange.com/questions/12045/what-is-a-modal-dialog-window) where you direct the user's attention to an overlay window for additional information about whatever was clicked on. The term "modal" refers that this overlay is the only thing that can be acted upon, essential a "mode". It must be dealt with before continuing.

A modal may look visually complicated, but the HTML/CSS is pretty easy. A modal is just a div inserted into the DOM and given a z-index to make it appear above or on top of everything else. Usually there is also a semi-transparent darkened image applied directly underneath it to shade the background page. This draws the user's eye to the modal window.
