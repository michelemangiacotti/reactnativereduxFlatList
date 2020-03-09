import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class RepositoryDetail extends Component {
  static navigationOptions = {
    title: 'RepositoryDetail'
  };
  componentDidMount() {
    // this.props.getRepoDetail('michelemangia', 'test react native')
  }
  render() {
    const { datauser } = this.props;
    return (
      <View>
        <Text>Email :{datauser.location.country}</Text>
        <Text>State :{datauser.location.state}</Text>
        <Text>City :{datauser.location.city}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryDetail)