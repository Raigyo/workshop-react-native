# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot. D'après le tutoriel de Maxime Charruel sur Openclassrooms.


* * *


# 4. States

## 4.1 Connexion à l'API

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


