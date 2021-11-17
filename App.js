import {registerRootComponent} from 'expo';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AppRouter from './src/components/AppRouter';
import Loader from './src/components/UI/loader/Loader';
import Available from './src/components/Available';
class App extends React.Component {

  render() {
    return  <SafeAreaView style={styles.main}>
                <AppRouter/>
            </SafeAreaView>;
  }
}
export default App
registerRootComponent(App);

const styles = StyleSheet.create({
    main: {
      width:'100%',
      height:'100%',
    }
});
