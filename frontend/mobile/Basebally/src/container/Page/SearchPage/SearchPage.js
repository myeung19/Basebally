import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import SearchScreen from '../../Screen/SearchScreen/SearchScreen';
import ProfileScreen from '../../Screen/ProfileScreen/ProfileScreen';

const nav = createStackNavigator(
    {
        Search: {
            screen: props => <SearchScreen { ...props } />,
        },
        Profile: {
            screen: props => <ProfileScreen { ...props } />,
        },
    }
);

export default createAppContainer(nav);

// export default SearchScreen;