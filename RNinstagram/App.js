import React from 'react'
import {SafeAreaView} from 'react-native'
import { t } from 'react-native-tailwindcss';
import { NativeRouter, Route,  Switch } from "react-router-native";
import Bottom from './Components/Bottom.js';
import Home from './Pages/Home';
import AddPhoto from './Pages/AddPhoto';
import Profile from './Pages/Profile';
import Search from './Pages/Search';

function App() {
  return (
<SafeAreaView style={[t.bgGray200, t.flex, t.hFull, t.wFull]}>
        <Switch>
            <Route exact path= '/' component ={Home}/>
            <Route exact path= '/AddPhoto' component ={AddPhoto}/>
            <Route exact path= '/Profile' component ={Profile}/>
            <Route exact path= '/Search' component ={Search}/>
        </Switch>
        <Bottom/>
    </SafeAreaView>
  )
}

export default () => (
  <NativeRouter>
      <App/>
  </NativeRouter>
)