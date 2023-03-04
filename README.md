# Test app

## About the project
>App created to test codes...

## Main technologies used in the project
>* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.
>* This project has implemented [Bootstrap](https://getbootstrap.com) version 5.2.3
>* This project has implemented [ng-bootstrap](https://ng-bootstrap.github.io/) version 14.0.1
>* This project has implemented [bootstrap-icons](https://icons.getbootstrap.com/) version 1.10.3

## About bootstrap
>For standardization, best practices and responsiveness, when developing new pages, think about the structure of rows and columns following the grid pattern.

**Example:**

| Grid pattern class | Description                                                                    |
|:-------------------|:-------------------------------------------------------------------------------|
| `.container`       | Container with spacing on the sides (width: 1200px).                           |
| `.container-fluid` | Container without spacing on the sides(width: 100%).                           |
| `.row`             | Single div, must be used as a parent div that will have 1 to 12 col child divs |
| `.col`             | Single div, must be used as a parent div that will have 1 to 12 child divs     | 

>***The pattern shown above in the table shows the structure of the project's html pages, new pages must follow the pattern.***

**Page grid example**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## Bootstrap componentes
>You can view the available components for using bootstrap and ng-bootstrap and others, by clicking on the links below:
>* [bootstrap components](https://getbootstrap.com/docs/5.3/components)
>* [ng-bootstrap components](https://ng-bootstrap.github.io/#/components)
>* [bootstrap-icons](https://icons.getbootstrap.com/)

## Modularization
>The whole project is modularized, each component has its own module, in the `app.module.ts`
> file only the main modules are imported. Shared modules are created in the `Shared`
> folder and only called when needed, this avoids extra initial loading and endless module imports in the main system file.

## File name pattern
| Name rule      | Name pattern                                                    |
|:---------------|:----------------------------------------------------------------|
| Simple name    | `name.ts` / `name.html` / `name.css`                            |
| Compound name  | `compound-name.ts` / `compound-name.html` / `compound-name.css` |
| Directive name | `name.directive.ts` / `compound-name.directive.ts`              |
| Service name   | `name.service.ts` / `compound-name.service.ts`                  | 
| Model name     | `name.model.ts` / `compound-name.model.ts`                      | 
| Guard name     | `name.guard.ts` / `compound-name.guard.ts`                      | 

## Folder structure
>* **Environments:** Get our API URLS
>* **Guards:** Receive our route guards
>* **Models:** Receive our models
>* **Services:** Receive our services
>* **Shared:** responsible for containing everything that we use more than once in our systems, Components, Directives, Piping and others...  
   >**Important, don't forget the module rule, import from shared only what you are going to use and no corresponding components**
>* **Views:** Responsible for containing all the main pages of the system.
>* **Assets:** Responsible for saving all system media, images, icons, fonts and others...

## creating new items
| Item rule                       | Code for creation                                                                                        |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------|
| Simple component                | `ng g c component`                                                                                       |
| Compound component              | `ng g c compound-component`                                                                              |
| Component inside a folder       | `ng g c folder/component`                                                                                |
| Component in an existing folder | **Here imagine that you created an empty folder called user** `ng g c user/user`                         |
| Model item                      | `ng g class model-name --type=model ` **Model is a class in angular** code result: `model-name.model.ts` | 
| Service item                    | `ng g s service` / `ng g s compound-service`                                                             |
| Guard item                      | `ng g g guard` / `ng g g compound-guard`                                                                 | 
| Directive item                  | `ng g d directive` / `ng g d compound-directive`                                                         | 
| Pipe item                       | `ng g p pipe` / `ng g d compound-pipe`                                                                   | 

>To learn more about creating new items, click on the link: [Angular generate](https://angular.io/cli/generate)

## How to clone and setup up the project
> - [x] Clone the project, use de code: `git clone <project-url>` to clone the project.
> - [x] Install npm packages, use de code: `npm i` to install the packages.
> - [x] Run the project, use de code: `npm start` to run the project.

## Development server
> Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Git commit patterns

| Item rule     | Item                   | Item example                                                         |
|:--------------|:-----------------------|:---------------------------------------------------------------------|
| New features  | use `feat` prefix      | `feat(dashboard.component.ts): add new div with insights`            |
| bug fixes     | use `fix` prefix       | `fix(dashboard.service.ts): Fix bug sending date in wrong format`    |
| refactor code | use `refactor` prefix  | `refactor(dashboard.component.ts): Refactor if and else in a method` |

>**To maintain best practices always follow the following commit pattern:** `type(file):description`

## Notes
> * Always remove unused imports
> * Always remove unused code, html, css and ts
> * Always remove `console.log()`, if you need to show something in the console, prefer to use:
> - [x] `console.warn` to show warnings.
> - [x] `console.error` to show errors.
