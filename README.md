# Angular UI and Boostrap UI

Angular UI (UI stuff implemented in Angular)
https://angular-ui.github.io/

UI Bootstrap (AngularJS version of Bootstrap)
- styling
- UI component library
- modals, accordions, drop-down menus


## UI Bootstrap

Installation
https://angular-ui.github.io/bootstrap/

- minified, include templates
- `npm install angular-ui-bootstrap`
  - doesn't seem to include the min version
  - node_modules/angular-ui-bootstrap/dist
- move to public/vendor
- source in files to index.html
- still need regular bootstrap CSS http://getbootstrap.com/getting-started/#download
  - be sure to install the fonts! this is where our cool icons are
- requires ngAnimate as dependency
- inject into Angular app module
