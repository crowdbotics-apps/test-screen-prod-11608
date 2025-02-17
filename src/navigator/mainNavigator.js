import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';

import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";
import CalendarNavigator from "../features/Calendar/navigator";
import TutorialNavigator from "../features/Tutorial/navigator";
import { MessengerNavigator } from "../features/Messenger/navigator";
import {EmailAuthNavigator} from '../features/EmailAuth/navigator';
import { CameraNavigator } from "../features/UserCamera/navigator";

//@BlueprintImportInsertion
import { AchievementBlueprintNavigator } from '../features/AchievementBlueprint/navigator';
import { Dashboard2BlueprintNavigator } from '../features/Dashboard2Blueprint/navigator';
import { Dashboard1BlueprintNavigator } from '../features/Dashboard1Blueprint/navigator';
import { ProfilesBlueprintNavigator } from '../features/ProfilesBlueprint/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    
    MapsScreen: {
      screen: GoogleMapsNavigator
    },
    
    
    Calendar: {
      screen: CalendarNavigator
    },
    
    
    EmailAuth: {
      screen: EmailAuthNavigator,
    },
    
    
    Tutorial: {
      screen: TutorialNavigator
    },
    
    
    UserCamera: {
      screen: CameraNavigator
    },
    
    
    Messenger: {
      screen: MessengerNavigator
    },
    

    //@BlueprintNavigationInsertion
AchievementBlueprint: { screen: AchievementBlueprintNavigator },
Dashboard2Blueprint: { screen: Dashboard2BlueprintNavigator },
Dashboard1Blueprint: { screen: Dashboard1BlueprintNavigator },
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
