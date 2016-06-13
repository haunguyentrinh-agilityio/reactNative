
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null
    };
  }

  componentWillMount() {
    let _this = this;
    let user = this.props.user;
    let api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          info : {
            name : responseData.name,
            email: responseData.email,
          },
        });
      })
      .done();
  }

  render() {
    let info = this.state.info;

    return (
      <View style={styles.bottomBump}>
        <Text>{ info && this.props.user.userId }</Text>
        <Text>{ info && info.name }</Text>
        <Text>{ info && info.email }</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bottomBump: {
    marginBottom: 15,
  }
});

export default Info;
