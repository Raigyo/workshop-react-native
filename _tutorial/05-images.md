# Workshop: React Native

![Becode logo](https://raw.githubusercontent.com/Raigyo/react-character-manager/master/img/becode-logo.png)



*Juillet 2019*

> 🔨 Workshop: Création d'une application en React Native. Lara Loicq & Vincent Chilot. D'après le tutoriel de Maxime Charruel sur Openclassrooms.


* * *



# 5. Images et conclusion

Les activités dans le cadre de ce workshop sont presques terminées.

Biensûr, on n'a pas terminé l'application, mais on a quand même appris certaines notions importantes:

- application React Native CRNA vs CLI

- components et components custom

- JSX, styles, vues & rendering

- Props, states, setstates & re-rendering

- récupération de données via une API


Si vous voulez continuer votre application voilà où on est arrivé dans le tutoriel de Maxime Charruel

[Ajoutez des fonctionnalités sur un component](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/4916051-ajoutez-des-fonctionnalites-sur-un-component)

N'hésitez pas à reprendre le tutoriel depuis le début, beaucoup d'explications ont été raccourcies pour avoir le temps d'avancer sur le dévloppement.

Son tuto ajoute d'autres vues, l'injection et l'utilisation de la caméra, le databinding, la gestion d'état et la persistance des données avec Redux et bien d'autres choses encore, y compris la publication sur les stores.

Pour aller plus loin vous trouverez des liens utiles en fin d'article.

Egalement, vous trouverez toutes les étapes de ce workshop dans le [repo](https://github.com/Raigyo/workshop-react-native/tree/master).

En effet chaque section est associée à une branche, et le contenu de la branche correspond à l'étape finale de la section correspondante.



## 5.1 Les images

Mais chose promise chose due les images.

Si vous voulez un peut de challenge vous pouvez essayer de le faire vous même.

Voici la [doc](https://developers.themoviedb.org/3/getting-started/images) de l'API, concernant les images.

Il y a plusieurs façons de faire, recréer l'url directement dans le component image ou, solution idéale et portable, créer une fonction qui va générer l'url et appeler la fonction dans le component image.

<details>
<summary>Solution: solution 'facile'</summary>

```javascript
// Components/FilmItem.js

<Image
    style={styles.image}
    source={{uri: 'https://image.tmdb.org/t/p/w300' + film.poster_path}}
/>
```

</details>

<details>
<summary>Solution: solution idéale</summary>

```javascript
// API/TMDBApi.js

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// Components/FilmItem.js

import { getImageFromApi } from '../API/TMDBApi'

// ...

<Image
  style={styles.image}
  source={{uri: getImageFromApi(film.poster_path)}}
/>
```

</details>



## 5.2 Useful links

### Android Studio / Android

[Install Android Studio](https://developer.android.com/studio/install)

[Installing Java 8 and Android Studio on Ubuntu 18.04](https://www.techiediaries.com/java-android-studio-ubuntu/)

[Android Studio: Run apps on a hardware device](https://developer.android.com/studio/run/device.html#developer-device-options)

[Android Studio: /dev/kvm device permission denied](https://stackoverflow.com/questions/37300811/android-studio-dev-kvm-device-permission-denied)

[How to unlock and enable Developer options on any Android phone](https://www.greenbot.com/article/2457986/how-to-enable-developer-options-on-your-android-phone-or-tablet.html)

[How to Enable USB Debugging Mode on Android](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm)

[Inotify Watches Limit](https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit)

### React Native

[Running On Device](https://facebook.github.io/react-native/docs/running-on-device)

[Expo: The fastest way to build an app](https://expo.io/)

[Expo: Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

[React Native Git Upgrade](https://www.npmjs.com/package/react-native-git-upgrade/v/0.3.0-beta.1)

[React Native Init VS Expo](https://blog.nano3labs.com/react-native-init-vs-expo-in-sept-2018-6d2f2db65f9e)

### React Native - Development

[Openclassrooms: Développez une application mobile React Native](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native?status=published)

[API TMDB (The Movie DataBase)](https://www.themoviedb.org/documentation/api?language=fr)

[Components and APIs](https://facebook.github.io/react-native/docs/components-and-apis.html#basic-components)

[React Native Styling Cheat Sheet](https://github.com/vhpoet/react-native-styling-cheat-sheet)

[Native Directory](https://www.native.directory/)

[Redux Persist](https://github.com/rt2zz/redux-persist)
