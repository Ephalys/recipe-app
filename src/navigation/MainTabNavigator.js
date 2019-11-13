import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesPage from '../pages/FavoritesPage';
import RecipePage from '../pages/RecipePage';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

const homeNavigator = FluidNavigator(
	{
		Home: {
			screen: HomePage
		},
		RecipePage: {
			screen: RecipePage
		},
		SearchPage: {
			screen: SearchPage
		}
	},
);

const favoritesNavigator = FluidNavigator(
	{
		Favorites: {
			screen: FavoritesPage
		},
		RecipePage: {
			screen: RecipePage
		}
	}
);

const tabNavigator = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: homeNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon color={tintColor} size={25} name={'ios-list'} />
				)
			}
		},
		Favorites: {
			screen: favoritesNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon color={tintColor} size={25} name={'ios-heart-empty'} />
				)
			}
		}
	},
	{
		initialRouteName: 'Home',
		activeColor: "#86c16f",
		inactiveColor: "#000",
		labeled: false,
		barStyle: {
			backgroundColor: "#fff",
			labelStyle: {
				textAlign: "center"
			}
		}
	}
);

export default tabNavigator;
