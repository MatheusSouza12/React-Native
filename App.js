import PeoplePage from './src/pages/PeoplePage';
import { StackNavigator } from 'react-navigation';
import PeopleDetailPage from './src/pages/PeopleDetailPage';


export default StackNavigator({
    'Main':{
        screen: PeoplePage
    },
    'PeopleDetail':{
        screen: PeopleDetailPage
    }
},{
    navigationOptions:{
        title: 'Pessoas!',
        headerStyle:{
            backgroundColor: '#6ca2f7',
            borderWidth: 1,
            borderBottomColor: '#C5C5C5'
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            alignSelf: 'center',
        }
    }
});

