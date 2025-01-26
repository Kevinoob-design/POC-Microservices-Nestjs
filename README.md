# README #

## Getting started on MC V2 ##

### What is this repository for? ###

* Explains step by step how to add a NestJs microservice using the Nx mono repo
* [Learn Nx with NestJs](https://nx.dev/packages/nest)

### How do I get set up? ###

* Summary of set up

    en mac, modificar archivo como administrador /etc/hosts
    en windows Inicio + R abrir %WinDir%\System32\Drivers\Etc, luego modificar archivo hosts como administrador

    agregar hosts:
    127.0.0.1 mc-v2-mongodb-lynx
    127.0.0.1 mc-v2-mongodb-puma
    127.0.0.1 mc-v2-mongodb-wolf

* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Adding apps / modules / components and libraries ###

* To add a new app use the existing package.json script `yarn run add:app` next to the name `app-name`
* To add a module use the existing package.json script `yarn run add:m` next to the name `module-name` and the project flag `--project` next the name of existing project/app `app-name`
* To add a service use the existing package.json script `yarn run add:s` next to the name `service-name` and the project flag `--project` next the name of existing project/app `app-name`
* To add a nest library use the existing package.json script `yarn run add:nest:lib` next to the name `lib-name` and the flag `--buildable`
* To add a general library use the existing package.json script `yarn run add:lib` next to the name `lib-name`
* To add a interceptor library use the existing package.json script `yarn run add:i` next to the name `folder/interceptor-name` and the project flag `--project` next the name of existing project/app `app-name`
* To add a guard use the existing package.json script `yarn run add:g` next to the name `folder/guard-name` and the project flag `--project` next the name of existing project/app `app-name`

### Contribution guidelines ###

* Writing tests
* Code review

* Other guidelines
  * [commit guideline](https://www.conventionalcommits.org/en/v1.0.0/#summary)
  * [commitlint docs](https://github.com/conventional-changelog/commitlint)

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
