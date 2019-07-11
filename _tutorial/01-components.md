# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot. D'après le tutoriel de Maxime Charruel sur Openclassrooms.


* * *


# 1. Les 'components' (composants)

**<span style="color:blue">=> FYI</span>**

Les components React Native correspondent aux éléments graphiques simples que l'on retrouve sur les applications mobiles natives.

ReactJS, il y a aussi des components, mais ils sont propres au web.

C'est grâce aux différents components que nous pourrons réaliser des vues.

Gardez [cette page](https://facebook.github.io/react-native/docs/components-and-apis.html) sous le coude, elle liste tous components React Native.

## 1.2 Les components custom

Il ne s'agit pas vraiment de customiser des élements mais bien de créer des vues utilisant plusieurs components.

Ces vues représentent une action ou un rendu spécifique. ex: inscription, gallerie d'images...

Le but est de créer des vues indépendantes pouvant être réutilisées.

Dans les fait et par convention dans React.js et Native, on crée un component par vue, même si on en a besoin qu'une seule fois afin de clarifier le code et le développement.

**<span style="color:blue">TryIt</span>**

Nous allons à présent créer notre premier component, il s'agit d'une vue de recherche.

Créez le fichier suivant: Components/Search.js

Par convention, on commence les noms des fichiers/dossiers avec des classes component par une majuscule.

Dans ce fichier l'on va insérer créer l'appel de classe:

~~~
// Components/Search.js
import React from 'react'

class Search extends React.Component {
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
        )
    }
}

export default Search
~~~

Nous avons un import dans le header (on importe les classes, les components...) et l'on crée une classe Search qui va afficher du contenu

La méthode render permet de définir qu'il faut afficher quelque chose à l'écran et return les données qui vont être retournées.

Il faut enfin exporter la classe afin de pouvoir la réutiliser dans d'autres components par après.

Le premier challenge sera d'afficher: une vue *comprenant* un champ de saisie de texte et un bouton.

Il faut les importer dans l'entête:

`import { View, TextInput, Button } from 'react-native`

Dans le return il faudra donc afficher les élements suivants: View, TextInput, Button

Et là c'est à vous de jouer!


Astuces:

- consultez la doc renseignée ci-dessus

- préparez l'action sur le bouton avec la méthode suivante: `onPress={() => {}}`

- Pour visualiser le rendu sur le smartphone il faudra modifier le fichier App.js, en important la classe search et en affichant la vue en retournant: `<Search/>`. On en profite pour enlever de ce fichier ce qui est inutile.



<details>
<summary>Solution: App.js</summary>
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
</details>


<details>
<summary>Solution: Search.js</summary>
// Components/Search.js

import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}
export default Search

</details>


## 1.3 Next...

Voilà vous avez créé votre premier component, utilisé le JSX dans vos rendu avec des components React Native!

Vous avez un input avec un bouton search...

Par contre c'est mal disposé et il va falloir mettre en page...

[02 Styles...](#)
