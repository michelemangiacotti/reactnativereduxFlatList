import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import TabProfile from './TabProfile';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openProfileTab } from '../action/action';



class FlatListUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      dataSearch : "",
      datauser : null,
      loadProfile: false,
    };

  }

  componentDidMount() {

    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  currentUser = item => {
    // console.log(item);
    // console.log(this.state.value);
    // let actions  = this.props.actions;
    // console.log(this.props);
    // console.log(mapStateToProps.toString());
    // console.log(mapDispatchToProps.toString());
    // actions.openProfileTab(item.name);
    console.log(item);

    this.props.open(item);
    
    // this.setState({loadProfile : true, dataSearch : this.state.value});
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    
    if (this.props.loadProfile){
      return ( <TabProfile props = {this.props }/>)
    }else{
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.currentUser(item)}
              leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(FlatListUsers)