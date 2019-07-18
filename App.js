import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindMapsScreen from "./src/screens/FindMaps/FindMaps";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import MarkerDetailScreen from "./src/screens/MarkerDetail/MarkerDetail";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import DriverSmsScreen from "./src/screens/DriverSms/DriverSms";
import FindDetailScreen from "./src/screens/FindDetail/FindDetail";
import FindDriverScreen from "./src/screens/FindDriver/FindDriver";
import UserPageScreen from "./src/screens/UserPage/UserPage";
import ProfileEditScreen from "./src/screens/ProfileEdit/ProfileEdit";
import PasswordChangeScreen from "./src/screens/PasswordChange/PasswordChange";
import SiderDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";

const store = configureStore();

Object.defineProperty(String.prototype, 'PersianNumber', {
  value() {
      const num = this.toString();
      let i = 0;        
      const len = num.length;
      let res = '';
      var numbers =[];
      for (; i < len; i++) {
          if (numbers[num.charAt(i)]) {
              res += numbers[num.charAt(i)];
          } else {
              res += num.charAt(i);
          }
      }
      return res;
  },
  enumerable: false
});

// Register Screens
Navigation.registerComponentWithRedux(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.FindMapsScreen",
  () => FindMapsScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen
);
Navigation.registerComponentWithRedux(
  "awesome-places.MarkerDetailScreen",
  () => MarkerDetailScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.DriverSmsScreen",
  () => DriverSmsScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.FindDetailScreen",
  () => FindDetailScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.FindDriverScreen",
  () => FindDriverScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.SiderDrawer",
  () => SiderDrawer,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.UserPageScreen",
  () => UserPageScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.ProfileEditScreen",
  () => ProfileEditScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  "awesome-places.PasswordChangeScreen",
  () => PasswordChangeScreen,
  Provider,
  store
);

// Start a App
export default () => Navigation.events().registerAppLaunchedListener(() => {
  console.log("log_arshamgps_screen Auth ");
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'awesome-places.AuthScreen',
            passProps: {
              text: 'This is Login tab'
            },options: {
              topBar: {
                visible: false,
                height: 0
              }
            }
          }
        }]
      }
    }
  });
});