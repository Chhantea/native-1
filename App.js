import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './src/component/home/index' ;
import Another from './src/component/home/Another' ;
import ModalScreen from './src/component/shareComponent/modal/ModalScreen';
import Sidebar from './src/component/sideBar';
import Search from './src/component/Search/index';
import Menu from './src/component/Menu';
import Cart from './src/component/screens/cart/Index';
import SearchResult from "./src/component/screens/searchResult/SearchResultIndex";
import UserSettings from "./src/component/screens/user/UserSettings";
import ProductIndex from "./src/component/screens/product/ProductIndex";
import FilterScreen from "./src/component/screens/searchResult/filter/FilterScreen";
const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Another:  Another,
        Cart: Cart,
        search: Search,
        searchResult: SearchResult,
        userSetting: UserSettings,
        productScreen:ProductIndex,
        searchFilter: FilterScreen
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
