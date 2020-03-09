import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    
  };

  constructor(props) {
    super(props);

    this.state = {
      returnToHome : false,
    };

  }

  goBack() {
    this.setState({returnToHome : true})
  }

  render() {
    const { datauser, loadingProfile } = this.props;

    if (loadingProfile) return <Text>Loading...</Text>;

    return (
      <View>
        <Text>First Name: {datauser.name.first}</Text>
        <Text>Last Name: {datauser.name.last}</Text>
        {/* <Text>Login: {login}</Text> */}
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    datauser: state.datauser,
    loadProfile : state.loadProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    open: (datauser) => {
      dispatch(openProfileTab(datauser))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)