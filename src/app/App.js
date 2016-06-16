/**
 *  Sample app
 */

'use strict';

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// import library
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

// import App icons
import Icons from './Icons'

// import app components
import Home from '../home/Home'
import CameraHome from '../camera/CameraHome'
import Weather from '../weather/Weather'
import VideoPlayer from '../video/VideoPlayer'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabbar ref="myTabbar" barColor={'gray'}>
        <Tab name="home">
          <IconWithBar label="Home" type={Icons.Home} from={'icomoon'}/>
          <RawContent>
            <Home></Home>
          </RawContent>
        </Tab>
        <Tab name="camera">
          <IconWithBar label="Camera" type={Icons.Camera} from={'icomoon'}/>
          <RawContent>
            <CameraHome></CameraHome>
          </RawContent>
        </Tab>
        <Tab name="stats">
          <IconWithBar label="Weather" type={Icons.Weather} from={'icomoon'}/>
          <RawContent>
            <Weather></Weather>
          </RawContent>
        </Tab>
        <Tab name="settings">
          <IconWithBar label="Play" type={Icons.Play} from={'icomoon'}/>
          <RawContent>
            <VideoPlayer url="http://www.w3schools.com/html/mov_bbb.mp4">
            </VideoPlayer>
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}

export default App;
