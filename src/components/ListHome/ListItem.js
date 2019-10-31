import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { addAsync } from '../../redux/actions/RecipesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ListItem extends React.Component {

    onPressAdd(id) {
        //this.setState({ recipeID: id })
        this.props.actions.addFavorite(id);
    }

    /*state = {
        recipeID: null
    }*/

    render() {
        return (
            <View style={styles.listItem}>
                <ImageBackground source={{ uri: `https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg` }}
                    style={styles.imageContainer}
                >
                    <TouchableOpacity style={styles.iconFavorites}>
                        <Icon color={'#fff'} size={35} name={'ios-heart'} onPress={() => this.onPressAdd('http://www.edamam.com/ontologies/edamam.owl#recipe_9b5945e03f05acbf9d69625138385408')} />
                    </TouchableOpacity>
                    <Text style={styles.titleRecipe}>
                        Toast with salmon and Poached eggs
                    </Text>
                </ImageBackground>
            </View>
        )
    }
}

const mapActionsToProps = (payload) => ({
    actions: {
        addFavorite: bindActionCreators(addAsync, payload)
    }
});

export default connect(null, mapActionsToProps)(ListItem);

const styles = StyleSheet.create({
    listItem: {
        height: '100%',
        width: 280,
        marginLeft: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10.14,
        elevation: 1,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    titleRecipe: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 40,
        padding: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.10)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 3,
    },
    iconFavorites: {
        position: 'absolute',
        top: 20,
        left: 20,
    }
});