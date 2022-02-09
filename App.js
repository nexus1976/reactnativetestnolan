import React, { Component } from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./Styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import slideData from "./SlideData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
    this.state = {
      activeIndex: 0,
      entries: slideData
    }
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slideBox} key={index}>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
}

  get pagination () {
    const { entries, activeIndex } = this.state;
    return (
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeIndex}
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
  }

  render() {
    let img = require("./assets/cod_background.jpg");
    return (
      <SafeAreaView style={{flex: 1, paddingTop: 50, }}>
        <View style={styles.container}>
          <ImageBackground style={styles.backgroundImage} source={img}/>
          <Carousel
            layout={'tinder'}
            ref={(c) => this.carousel = c}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={500}
            itemWidth={500}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
            useScrollView={true}
          /> 
          { this.pagination }        
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }
}
