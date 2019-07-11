# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot. D'après le tutoriel de Maxime Charruel sur Openclassrooms.


* * *


# 1. Les props (propriétés)

**<span style="color:blue">=> FYI</span>**

Ca va être un peu corsé pour ceux qui n'ont jamais fait de React.js, mais c'est une notion indispensable.

Un props est en fait une sorte d'argument sous forme d'attribut  possédant une clé et une valeur.

Les données en React circulent en une seule direction: du parent à l’enfant. Ainsi, ces props ne doivent pas être modifiés à l'intérieur des composants puisque ces derniers reçoivent des props de leur parent. Ils doivent rester immuables.

On va voir comment les utiliser un peu plus tard.

Pour l'instant, nous allons donner la possibilité à notre vue Search.js d'afficher une liste d'éléments (les films).


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
import { StyleSheet, View, TextInput, Button, Text, FlatList  } from 'react-native```
</details>

<details>
<summary>Indice: Affichés clés dans la vue</summary>
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
}```

</details>
