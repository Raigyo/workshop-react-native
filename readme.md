# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot.


* * *


# Introduction

## Objectifs

React Native est une librairie qui permet de développer une application en React.js qui est lisible à la fois sur IOS et Android (littéralement, c'est React to Native).

Vous allez développer une application qui permet de rechercher des films sur smartphone via une API.

Ce workshop est basé sur un tuto Openclassrooms beaucoup plus complet et il sera possible pour ceux qui sont intéressés de continuer l'application après.

Il s'agit donc seulement d'une introduction au langage et à ses possibilités.

## Prérequis

Il est préférable d'avoir une certaine connaissance de la **librairie** React.js pour mieux comprendre mais ce n'est pas obligatoire..

Node.js et NPM **doivent** être installés (ça devrait être déjà le cas). 

Vous devez vous munir de votre smartphone. La connexion entre l'ordinateur et le smartphone se fera via Wifi.


### Lexique

Valable pour toutes les instructions du workshop 

- **<span style="color:blue">FYI</span>**: juste pour info, à ne pas appliquer pour le workshop

- **<span style="color:blue">DoIt</span>**: c'est à faire pour le bon déroulement du workshop!

- **<span style="color:blue">TryIt</span>**: exercice à faire!

### Create React Native App (Expo) vs React Native CLI

**<span style="color:blue">FYI</span>**

**CRNA**

La méthode CRNA utilise le SDK Expo et ses outils. Plus facile pour débuter et ne nécessitant pas de compilation, cette méthode exclu cependant l'utilisation de certaines fonctionalités nécessitant des autorisations de la part de l'appareil: caméra, droits d'écriture...

Android studio n'a pas besoin d'être installé et l'on peut développer et tester une application Android/IOS depuis Linux par exemple.

~~~
$ npm i -g create-react-native-app

$ create-react-native-app my-project

$ cd my-project

$ npm start
~~~

ou

~~~
$ expo init my-project

$ cd my-project

$ npm start
~~~

Choisir le type de template, donner un nom à l'application et la façon d'installer les dépendances (npm ou yarn)


**React Native CLI**

Il s'agit d'une méthode de développemnt en React Natif pur, bien que toujours en React.js. Le code natif est affiché dans l'architecture.

L'application doit être compilée pour être visualisée. L'installation de l'environnement est plus complexe: JDK, Android SDK, XCode (Ios)...

Il faut un mac pour compiler la partie IOS.

~~~
$ npm install -g react-native-cli

$ react-native init my-project

$ react-native run-ios
~~~

ou
~~~

$ react-native run-android
~~~

Il est possible de passer d'un développement CRNA à un développement React Native CLI (mais pas l'inverse)  via la commande:

`$ npm run eject`

Attention, ce processus est donc irréversible!!!


### Expo

**<span style="color:blue">DoIt</span>**

Si ce n'est déjà fait, installez Expo sur votre smartphone:

[Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr)

[App Store](https://apps.apple.com/us/app/expo-client/id982107779)


