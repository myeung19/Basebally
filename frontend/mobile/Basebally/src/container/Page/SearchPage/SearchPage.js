import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import SearchScreen from '../../Screen/SearchScreen/SearchScreen';
import ProfileScreen from '../../Screen/ProfileScreen/ProfileScreen';

export default createStackNavigator(
    {
        Search: SearchScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: 'Search',
        headerMode: 'none',
    }
);

// export default SearchScreen;