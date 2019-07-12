# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot. D'après le tutoriel de Maxime Charruel sur Openclassrooms.


* * *


# 3. Les props (propriétés)

**<span style="color:blue">=> FYI</span>**

Ca va être un peu corsé pour ceux qui n'ont jamais fait de React.js, mais c'est une notion indispensable.

Un props est en fait une sorte d'argument sous forme d'attribut  possédant une clé et une valeur.

Les données en React circulent en une seule direction: du parent à l’enfant. Ainsi, ces props ne doivent pas être modifiés à l'intérieur des composants puisque ces derniers reçoivent des props de leur parent. Ils doivent rester immuables.

On va voir comment les utiliser un peu plus tard.

Pour l'instant, nous allons donner la possibilité à notre vue Search.js d'afficher une liste d'éléments (les films).


## 3.1 Component pour afficher une liste

**<span style="color:blue">=> TryIt</span>**

A vous de jouer!

- Recherchez dans la [doc react Native](https://facebook.github.io/react-native/docs/components-and-apis.html#basic-components) un composant permettant d'afficher une liste d'éléments.

- Importez-le dans le component Search.js

- Affichez-le dans votre vue après le bouton (n'oubliez pas les propriétés obligatoires du composant, )

- La vue sur le smartphone doit afficher une clé a et une clé b en dessous du bouton search


<details>
<summary>Indice: Component</summary>

[FlatList](https://facebook.github.io/react-native/docs/flatlist.html)

</details>

<details>
<summary>Indice: Import</summary>

```javascript
import { StyleSheet, View, TextInput, Button, Text, FlatList  } from 'react-native'
```

</details>

<details>
<summary>Indice: Afficher clés dans la vue</summary>

```javascript
// Components/Search.js
render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    )
}
```

</details>


## 3.2 Liste de films

Nous allons créer une liste de films temporaire.

Créons le fichier Helpers/filmsData.js, et insérons le code suivant:

**<span style="color:blue">=> DoIt</span>**

~~~
// Helpers/filmsData.js

export default data = [
   {
      id:181808,
      vote_average:7.2,
      title:"Star Wars VIII - Les derniers Jedi",
      poster_path:"",
      original_title:"Star Wars: The Last Jedi",
      overview:"Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",
      release_date:"2017-12-13"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"La Guerre des étoiles",
      poster_path:"",
      original_title:"Star Wars",
      overview:"Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l’Étoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au cœur des montagnes désertiques de Tatooine...",
      release_date:"1977-05-25"
   }
]
~~~

**<span style="color:blue">=> TryIt</span>**

Maintenant, essayez d'afficher le titre des deux films au lieu des clés a et b dans le search.

Il faudra importer le helper au préalable:

`import films from '../Helpers/filmsData'`


<details>
<summary>Indice: code pour la liste</summary>

```javascript
<FlatList
  data={films}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({item}) => <Text>{item.title}</Text>}
/>
```

</details>

Peut-être avez vous eu un warning lorsque vous avez buildé votre app.

C'est là que l'instruction `keyExtractor={(item) => item.id.toString()}` intervient.

Elle permet de créer un identifiant unique pour chaque item.

A présent vous devriez voir les deux films s'afficher...

## 3.3 Items customs

**<span style="color:blue">=>DoIt</span>**

Dans cette partie nous allons mettre en page l'affichage de nos films.

Dans Components, créons un fichier FilmItem.js.

~~~
// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text}>Titre du film</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190
  },
  title_text: {

  }
})

export default FilmItem
~~~

C'est dans ce composante que les données des films seront affichées suite à une recherche...

Il va falloir importer ce nouveau component dans Search.js et remplacer la propriété contenue dans `renderItem={({item}) =>` par celui-ci.

**<span style="color:blue">=>TryIt</span>**

Vous l'avez déjà fait plusieurs fois donc à vous de jouer!


<details>
<summary>Indice: importer un component</summary>

```javascript
// Components/Search.js
//...
import FilmItem from './FilmItem'

//...
<FlatList
  data={films}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({item}) => <FilmItem film={item}/>}
/>
```

</details>


Oui mais qu'est-ce c'est dans l'éléments `<FilmItem film={item}/>` ???

C'est notre props! Ici le component Search récupère une liste de films (depuis filmsData) et grâce à cette propriété, peut envoyer les données vers le component Filmitem (qui génère le rendu de chaque film et qui est lui même appaelé dans Search)

On peut vérifier: dans FilmItem.js, insérez un console log juste après le render et vérifiez la console (celle ou vous avez fait votre npm start):

`console.log(this.props)`

On a bien nos films qui sont passé dans ce component enfant!

~~~
Running application on SM-J530F.
Object {
  "film": Object {
    "id": 181808,
    "original_title": "Star Wars: The Last Jedi",
    "overview": "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",
    "poster_path": "",
    "release_date": "2017-12-13",
    "title": "Star Wars VIII - Les derniers Jedi",
    "vote_average": 7.2,
  },
}
Object {
  "film": Object {
    "id": 181809,
    "original_title": "Star Wars",
    "overview": "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l’Étoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au cœur des montagnes désertiques de Tatooine...",
    "poster_path": "",
    "release_date": "1977-05-25",
    "title": "La Guerre des étoiles",
    "vote_average": 8.1,
  },
}

~~~

Maintenant ce serait bien de les afficher dans notre page Search.

**<span style="color:blue">=>TryIt</span>**

On va remplacer le component text par les données qui ont été 'propsées' depuis le Search.

~~~
<View style={styles.main_container}>
<Text style={styles.title_text}>Titre du film</Text>
</View>
~~~

Basez vous sur le template suivant et ajoutez les donnée manquantes:

~~~
// Components/FilmItem.js

import { StyleSheet, View, Text, Image } from 'react-native'

//...

render() {
    const film = this.props.film
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: "image"}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>TITRE</Text>
            <Text style={styles.vote_text}>VOTE AVERAGE</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>OVERVIEW</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le RELEASE DATE</Text>
          </View>
        </View>
      </View>
    )
}
~~~


<details>
<summary>Solution: le fichiers FilmItem.js, la mise en page vous est offerte par la maison</summary>

```javascript
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})


export default FilmItem

```

</details>

Nous n'avons pas trop le temps de nous attarder sur la mise en page, mais vous pouvez ici voir Flex en action...

La mis en page est responsive et s'adapte à tous les devices.

Notre application commence à ressembler à quelque chose!


## 3.4 Next

[04 States & API...](04-states.md)
