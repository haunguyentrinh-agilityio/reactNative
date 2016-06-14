'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import Video from 'react-native-video';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Video source={{uri: this.props.url}} // Can be a URL or a local file.
       rate={1.0}                   // 0 is paused, 1 is normal.
       volume={1.0}                 // 0 is muted, 1 is normal.
       muted={false}                // Mutes the audio entirely.
       paused={false}               // Pauses playback entirely.
       resizeMode="contain"           // Fill the whole screen at aspect ratio.
       repeat={true}                // Repeat forever.
       playInBackground={false}     // Audio continues to play when app entering background.
       playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown.
       onLoadStart={this.loadStart} // Callback when video starts to load
       onLoad={this.setDuration}    // Callback when video loads
       onProgress={this.setTime}    // Callback every ~250ms with currentTime
       onEnd={this.onEnd}           // Callback when playback finishes
       onError={this.videoError}    // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
    )

  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


export default VideoPlayer;
