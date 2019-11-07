import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Transition } from 'react-navigation-fluid-transitions';
import Dictation from "../Voice/VoiceParameters";
import { withNavigation } from 'react-navigation';

class RecipePresentation extends React.Component {

  render() {
    return (
      <View style={styles.containerPresentation}>
        <Transition shared="recipeImage">
          <ImageBackground style={styles.imageRecipe} source={{ uri: this.props.datas[0].image }}>
            <View style={styles.buttonsTopLeft}>
              <Icon size={35} name={'ios-arrow-back'} color={'white'} onPress={() => { this.props.navigation.goBack() }} />
            </View>
            <View style={styles.buttonsTopRight}>
              <Dictation text="Hello" />
              <FavoriteButton recipeId={this.props.navigation.getParam('recipeId')} />
            </View>
            <Text style={styles.titleRecipe}>{this.props.datas[0].label}</Text>
          </ImageBackground>
        </Transition>
        <View style={styles.presentation}>
          <View style={styles.sousPresentation}>
            <Text style={styles.textMainPresentation}>Servings</Text>
            <Text style={styles.textDescriptionPresentation}>{this.props.datas[0].yield}</Text>
          </View>
          <View style={styles.sousPresentation}>
            <Text style={styles.textMainPresentation}>Cooking Time</Text>
            <Text style={styles.textDescriptionPresentation}>{parseInt(this.props.datas[0].totalTime / 60)} hr {this.props.datas[0].totalTime % 60} min</Text>
          </View>
        </View>
      </View >
    );
  };
}

export default withNavigation(RecipePresentation);

const styles = StyleSheet.create({
  containerPresentation: {
    flex: 1,
  },
  blocPresentation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRecipe: {
    justifyContent: 'flex-end',
    height: 400
  },
  titleRecipe: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 40,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    maxWidth: '70%'
  },
  presentation: {
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row'
  },
  sousPresentation: {
    flex: 1
  },
  textMainPresentation: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textDescriptionPresentation: {
    fontSize: 16,
    marginTop: 5
  },
  buttonsTopLeft: {
    position: 'absolute',
    flexDirection: 'row',
    top: 20,
    left: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    maxWidth: '70%'
  },
  buttonsTopRight: {
    position: 'absolute',
    flexDirection: 'row',
    top: 20,
    right: 20,
  }
});
