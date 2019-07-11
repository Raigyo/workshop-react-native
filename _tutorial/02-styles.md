# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot. D'après le tutoriel de Maxime Charruel sur Openclassrooms.


* * *


# 1. Styles

## 1.1 API Stylesheet

**<span style="color:blue">=>DoIt</span>**

En React Native il existe une API Stylesheet. Elle permet d'optimiser le rendu des styles via un système d'identifiant sur lequel nous n'allons pas nous étendre dans ce workshop.


Importons là dans le fichier Search.js et déclarons la stylesheet en fin de document (après le rendu, mais toujours dans la classe)

~~~
// Components/Search.js

//...

import { StyleSheet, View, TextInput, Button } from 'react-native'


//...

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
export default Search
~~~

Il faut également appeller la classe sur le TextInput:

`<TextInput style={styles.textinput} placeholder='Titre du film'/>`

C'est tout de suite mieux.

On peut bien entendu ajouter autant de style que l'on veut.

## 1.2 Flexbox

C'est le même Flexbox que pour le web. Par contre, s'il est facultatif de l'utiliser pour le web, il est indispensable avec React Native.

En effet il est très difficile de faire sans pour disposer les blocs et que cela donne le même rendu sur tous les smartphones/tablettes.

Mais pour l'instant, on n'a pas grand chose à mettre en page et on reviendra sur Flexbox plus tard.

Assurons-nous que nous avons la même base de code pour continuer...

~~~
// App.js

import React from 'react'
import Search from './Components/Search'

export default class App extends React.Component {
  render() {
    return (
      <Search/>
    )
  }
}
~~~


~~~
// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
~~~


