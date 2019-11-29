import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './component/home/index' ;
import Another from './component/home/Another' ;
import ModalScreen from './component/shareComponent/modal/ModalScreen';
import { Ionicons } from '@expo/vector-icons';
import Sidebar from './component/sideBar';
import Search from './component/Search/index';
import Menu from './component/Menu';
import Cart from './component/screens/cart/Index';
import SearchResult from "./component/screens/searchResult/SearchResultIndex";
import UserSettings from "./component/screens/user/UserSettings";
const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Another:  Another,
        Cart: Cart,
        search: Search,
        searchResult: SearchResult,
        userSetting: UserSettings
    },
    {
        initialRouteName: 'Home',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        defaultNavigationOptions: {
            headerStyle: {
                // color: 'white',
                backgroundColor: '#212121'
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                // textAlign: 'center',
                // color: 'white',
                flex: 1
            },
            headerTintColor: 'white',
        },
    }
);
const RootNavigator = createStackNavigator(
    {
        Main: {
            screen: MainNavigator,
        },
        MyModal: {
            screen: ModalScreen,
        },
        // drawer: MyDrawerNavigator
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);
const MyDrawerNavigator = createDrawerNavigator({
    Menu: {
        screen: RootNavigator,
    },
    make: {screen: Menu},
},{
    contentComponent: Sidebar
});
const App = createAppContainer(MyDrawerNavigator);

export default App;
