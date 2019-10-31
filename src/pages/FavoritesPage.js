import React from 'react';
import { Text, View, StyleSheet, AsyncStorage, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationEvents } from 'react-navigation';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import ItemFavorite from '../components/ItemFavorite/ItemFavorite';
import { initAsync, deleteAsync } from '../redux/actions/RecipesActions';
import { ActivityIndicator } from 'react-native-paper';

class FavoritesPage extends React.Component {

  state = {
    refreshing: false
  }

  refresh() {
    this.setState({ refreshing: true });
    this.props.actions.initFavorites();
    this.setState({ refreshing: false });
  }

  deleteFavorite(recipeName) {
    this.props.actions.deleteFavorite(recipeName);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => this.refresh()} />
        {this.props.recipes && this.props.recipes.length > 0 ? (
          <AlphaScrollFlatList
            data={this.props.recipes}
            renderItem={(element) => {
              return (
                <ItemFavorite key={element.item} itemID={element.item} onDelete={(itemID) => this.deleteFavorite(itemID)} />
              );
            }}
          />
        ) : (
            <ActivityIndicator />
          )}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

const mapStateToProps = (stateStore) => {
  return ({
    recipes: stateStore.recipesReducer.recipes
  });
}

const mapActionsToProps = (payload) => ({
  actions: {
    initFavorites: bindActionCreators(initAsync, payload),
    deleteFavorite: bindActionCreators(deleteAsync, payload),
  }
});

export default connect(mapStateToProps, mapActionsToProps)(FavoritesPage);