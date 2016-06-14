/**
 *  Sample app
 */

'use strict';

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

// import library
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

// import app components
import Home from '../home/Home'
import CameraHome from '../camera/CameraHome'
import Weather from '../weather/Weather'
import VideoPlayer from '../video/VideoPlayer'

// create glypy icons
const glypy = glypyMapMaker({
  Home: 'e900',
  Camera: 'e914',
  Weather: 'e9d4',
  Play: 'ea1c'
});

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabbar ref="myTabbar" barColor={'gray'}>
        <Tab name="home">
          <IconWithBar label="Home" type={glypy.Home} from={'icomoon'}/>
          <RawContent>
            <Home></Home>
          </RawContent>
        </Tab>
        <Tab name="camera">
          <IconWithBar label="Camera" type={glypy.Camera} from={'icomoon'}/>
          <RawContent>
            <CameraHome></CameraHome>
          </RawContent>
        </Tab>
        <Tab name="stats">
          <IconWithBar label="Weather" type={glypy.Weather} from={'icomoon'}/>
          <RawContent>
            <Weather></Weather>
          </RawContent>
        </Tab>
        <Tab name="settings">
          <IconWithBar label="Play" type={glypy.Play} from={'icomoon'}/>
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
