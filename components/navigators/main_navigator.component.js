import { LoginContainer } from '../login/login.container';
import { HomeContainer } from '../home/home.container';
import { TootEdition } from '../toots/toot-edition.component';

import { StackNavigator } from 'react-navigation';

// Routing, Navigation
export const AppNavigator = StackNavigator({
    initialRouteName: {
        screen: LoginContainer
    },
    login: {
        screen: LoginContainer
     },
     home: {
        screen: HomeContainer
     },
     tootEdition: {
       screen: TootEdition
     }
});