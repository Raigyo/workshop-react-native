# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot.


* * *


# TL;DR

Passez à la partie *[Test environnement](https://github.com/Raigyo/workshop-react-native#test-environnement)*, nécessaire pour une participation au workshop.


# 1. Introduction


## 1.2 Objectifs

React Native est une librairie qui permet de développer une application en React.js qui est lisible à la fois sur IOS et Android (littéralement, c'est React to Native).

Vous allez développer une application qui permet de rechercher des films sur smartphone via une API.

Ce workshop est basé sur un tuto Openclassrooms beaucoup plus complet et il sera possible pour ceux qui sont intéressés de continuer l'application après.

Il s'agit donc seulement d'une introduction au langage et à ses possibilités.

## 1.3 Prérequis

Il est préférable d'avoir une certaine connaissance de la **librairie** React.js pour mieux comprendre mais ce n'est pas obligatoire..

Node.js et NPM **doivent** être installés (ça devrait être déjà le cas). 

Vous devez vous munir de votre smartphone. La connexion entre l'ordinateur et le smartphone se fera via Wifi.


## 1.4 Lexique

Valable pour toutes les instructions du workshop 

- **<span style="color:blue">FYI</span>**: juste pour info, à ne pas appliquer pour le workshop

- **<span style="color:blue">DoIt</span>**: c'est à faire pour le bon déroulement du workshop!

- **<span style="color:blue">TryIt</span>**: exercice à faire!

## 1.5 Create React Native App (Expo) vs React Native CLI

**<span style="color:blue">=> FYI</span>**

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


### 1.5.1 Expo

**<span style="color:blue">=>DoIt</span>**

Installez Expo sur votre smartphone, cette app gratuite vous permettra de faire le build de l'application sur le smartphone depuis le PC :

[Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr)

[App Store](https://apps.apple.com/us/app/expo-client/id982107779)

### 1.5.2 Test environnement

**<span style="color:blue">=>DoIt</span>**

- Installez Expo sur votre smartphone (Android ou IOS), cfr [supra](https://github.com/Raigyo/workshop-react-native#expo) pour les url vers les stores.

- Installez le client expo sur le PC/Mac

Linux: `$ npm install expo-cli --global`

Mac: `$ sudo npm install -g expo-cli`

- Créez votre première app React Native

`$ expo init expo-test`

Donnez un nom à l'application et installez les dépendances...

- Lancez un test

`$ cd init expo-test`

`$ expo start` / `$ npm start`

- Scannez le code avec l'application Expo du smartphone

Cela va prendre un petit temps pour fair le build la première fois.


=> Phase 1: Vous voyez apparaitre: *Open up App.js to start working on your app!*

=> Phase 2: ?

=> Phase 3: Profit

Sinon, 

=> Try again!

=> Appelez (Google, nous...) à l'aide


### 1.5.3 <code>&ast;</code>the lights go out<code>&ast;</code>: Je veux utiliser un cable usb au lieu du Wifi (ou: le wifi va planter le jour du workshop)

**<span style="color:blue">=> FYI</span>**

Il faut installer les drivers usb ad-hoc selon votre système et activer le mode debug usb sur votre smartphone:

[React Native: Running On Device](https://facebook.github.io/react-native/docs/running-on-device)

### 1.5.4 'Oh... one more thing': Je veux un environment natif et/ou un emulateur-simulateur de smartphone sur mon PC

**<span style="color:blue">=> FYI</span>**

Ce n'est pas dans le scope du workshop, mais vous pouvez essayer d'installer/tester par vous même...

Attention c'est 'touchy', long à installer et assez lourd en téléchargements donc faites le avant de vous présenter au workshop.

Il **n'y aura pas d'assistance** lors du workshop...

[Android Studio](https://developer.android.com/studio/) (nécessite l'installation d'autres API dans le logiciel: Android SDK Build-Tools, Android SDK tools, google play service...)

[Emulateur Android Genymotion](https://www.genymotion.com/)

[Emulateur sur Android Studio](https://developer.android.com/studio/run/managing-avds)

[Apple XCode](https://developer.apple.com/xcode/)

Si vous avez participé au workshop d'[Antony Rizzitelli](https://github.com/Upd4ting/Workshop-Mobile), tout est déjà installé normalement (SDK, emulateurs...). Vous pouvez aussi suivre la procédure d'installation décrite dans son readme.

## 1.6 Let's begin

[c'est par ici...](#)



