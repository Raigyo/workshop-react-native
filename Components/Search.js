// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList  } from 'react-native'
//import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => {
            this.setState({ films: data.results })
        })
    }

    constructor(props) {
        super(props)
        this.state = { films: [] }
    }



    render() {
        return (
            <View>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
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
