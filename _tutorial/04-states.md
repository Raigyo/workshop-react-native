# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot. D'après le tutoriel de Maxime Charruel sur Openclassrooms.


* * *


# 4. States

## 4.1 Connexion à l'API

**<span style="color:blue">=> DoIt</span>**

Il va être temps de récupérer une vraie liste de films.

On va se connecter à l'API de 'themoviedb.org'.

J'espère que vous avez créé votre compte et récupéré un token. Il n'est pas trop tard pour le faire cependant (éventuellement partagez-vous quelques token)

A la racine du projet créez:

API/TMDBApi.js


~~~
// API/TMDBApi.js

const API_TOKEN = "VOTRE_TOKEN_ICI";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
~~~

**Attention:** 

Lorsque vous utilisez des identifiants, des tokens, des variables d'environnement, il faut toujours veiller à faire attention à ne pas envoyer ces données sur un serveur public. dans le cas de GitHub, on mettra ce fichier dans le gitignore...

Si vous voulez envoyer la page sur votre Github, par convention on crée une page 'new' sans les credentials.

Et on garde les mentions 'INSERT TOKEN', 'INSERT PASSWORD', etc...

~~~
// API/TMDBApi.new.js

const API_TOKEN = "VOTRE_TOKEN_ICI";
~~~

Dans ce component, on fait tout simplement appel à l'API via la méthode fetch puis on retourne les données vers un JSON via une promise.

## 4.2 Traitement des données

**<span style="color:blue">=> DoIt</span>**

Dans Search.js importons la méthode *getFilmsFromApiWithSearchedText*

~~~

// Components/Search.js

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 
~~~

Puis nous allons créer une fonction qui va récupérer les films dans une propriété _film.

Notez que:

La fonction commence par un underscore. C'est une convention pour dire que la fonction est privée. (c'est plus propre, mais dans les faits javascript ne gère pas la portée des fonctions)

~~~
// Components/Search.js

class Search extends React.Component {

_loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => {
      this._films = data.results
      console.log(this._films);
    })
 }
 
 //...
 ~~~
 
 Maintenant déclarons la variable dans un constructeur:
 
 ~~~
 // Components/Search.js
 
 class Search extends React.Component {
 
   constructor(props) {
     super(props)
     this._films = []
   }
   
   //...
 }
 ~~~

**<span style="color:blue">=> TryIt</span>**

Vous êtes en mode 'copypasta' depuis un moment, à vous de jouer pour :

- intégrer un appel de la fonction sur le bouton

- utiliser la propriété _films dans le composant Flatlist

<details>
<summary>Solution: bouton</summary>

```javascript
<Button title='Rechercher' onPress={() => this._loadFilms()}/>
```

</details>

<details>
<summary>Solution: Flatlist</summary>

```javascript
<FlatList
  data={this._films}
//...
/>
```

</details>

Supprimons également la ligne suivante dans le Search.js, le Helper était temporaire:

`import films from '../Helpers/filmsData'`

A ce stade vous devriez avoir:

- Un input text et un bouton rechercher

- Lorsque vous faite une recherche sur un film, il devrait y avoir un console log avec tous les films contenant 'star' dans leur titre

- Sur l'écran rien ne s'affiche

Pour être sûr qu'on a la bonne base pour la suite: 

<details>
<summary>le fichiers Search.js</summary>

```javascript
// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList  } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => {
            this._films = data.results
            console.log(this._films);
        })
    }

    constructor(props) {
        super(props)
        this._films = []
    }



    render() {
        return (
            <View>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this._films}
                    keyExtractor={(item) => item.id.toString()}
                    //renderItem={({item}) => <FilmItem/>}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search

```

</details>

## 4.3 States et re-rendering

**<span style="color:blue">=> FYI</span>**

On a vu que les **props** sont fixées par le component parent et ne peuvent pas être modifiées par le component qui les reçoit. 

Il nous faut autre chose, les **states**.

Ils vont nous permettre de modifier notre component et ses données affichées, via la méthode render qui va rerendre le component dès que le state est modifié via la fonction setState.

**<span style="color:blue">=> DoIt</span>**

Dans Search.js, modifions notre constructeur pour définir un state avec un objet `_film`:

~~~
// Components/Search.js

constructor(props) {
    super(props)
    this.state = { films: [] }
}
~~~

Modifions également la proprité dans la Flatlist:

~~~
// Components/Search.js

<FlatList
  data={this.state.films}
//...
/>

~~~

Sur base de la [documentation](https://fr.reactjs.org/docs/react-component.html#setstate), modifiez la fonction '_loadFilms()' pour utiliser 'setstate' afin de récupérer les modifications de vos données et indiquer à React que le component a besoin d'être re-rendu avec ces  nouvelles données.

<details>
<summary>Solution: Setstate</summary>

```javascript
// Components/Search.js

_loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => {
        this.setState({ films: data.results })
    })
}
```

</details>

A présent les films sont bien affichés lorsque l'on fait une recherche.

Néanmoins la recherche est toujours statique car on passe l'argument "star" à la fonction de recherche dans l'API.


## 4.4 Text input

**<span style="color:blue">=> FYI</span>**

En React pour récupérer la valeur d'un input, envoyer la valeur de la chaîne encodée lorsqu'on appuiera sur rechercher ne fonctionnera pas.

Il n'y aura en effet aucune valeur enregistrée dans l'input. 

Pour cela il faut absolument placer un 'écouteur' qui va enregistrer chaque lettre encodée par l'utilisateur.

Nous passerons par un state pour la chaîne de caractère. Il faudra également éviter que le compoenent ne soit re-rendu à chaque fois que l'utilisateur encode une lettre.


**<span style="color:blue">=> TryIt</span>**

Dans Search.js, ajoutons la propriété onChangeText dans le Text input:


~~~
<TextInput
    style={styles.textinput} placeholder='Titre du film'
    onChangeText={(text) => this._searchTextInputChanged(text)}
/>
~~~

A vous de jouer:

Créez la fonction onChangeText. Cette fonction devra gérer le changement d'état d'un state 'searchedText' qui sera une string vide

Il faudra aussi que la fonction _loadFilms récupère le state 'searchedText'...

<details>
<summary>Solution: fonction _searchTextInputChanged + state searchedText:</summary>

```javascript
// Components/Search.js

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          films: [],
          searchedText: ""// notre state qui est une string vide
        }
    }
    
    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })// notre setState 
    }
```

</details>


<details>
<summary>Solution: _loadFilms</summary>

```javascript
// Components/Search.js

// après constructor

    _loadFilms() {
        if (this.state.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
                this.setState({ films: data.results })
            })
        }
    }
```

</details>

Cela fonctionne à présent, l'application liste les films recherchés!

Par contre ce n'est pas tip-top car on régénère le rendu chaque fois qu'on introduit une lettre.

Ce qu'on vient de faire est intéressant pour voir comment fonctionnent les states et les setstates, mais ça ne l'est pas en termes d'optimisation...

Il est du coup plus intéressant de passer par une variable pour la saisie du texte et pas par un state afin de régénérer la vue une seule fois.

Voici le code. Vous pouvez comparer, c'est classique, on passe les lettres tapées en argument et on renvoie la recherche finale lorsqu'on appuie sur le bouton rechercher.

On ne fait plus le rendu qu'une seule fois.

<details>
<summary>Récapitulatif: Search.js</summary>

```javascript
// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.state = {
      films: []
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ films: data.results })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  render() {
    //console.log("RENDER")
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
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
```

</details>

## 4.5 Next

[05 Ajout des images](05-images.md)
