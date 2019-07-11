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
'
Maintenant, essayer d'afficher le titre des deux films au lieu des clés a et b dans le search.

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


