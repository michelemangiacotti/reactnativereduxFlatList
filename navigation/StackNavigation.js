import { StackNavigator } from 'react-navigation';
import RepoDetail from './RepoDetail';
import Tabs from './TabNavigation';

const Stack = StackNavigator({
  Home: {
    screen: Tabs
  },
  Detail: {
    screen: RepoDetail
  }
});

export default Stack;