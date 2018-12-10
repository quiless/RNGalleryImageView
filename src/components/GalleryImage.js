// GalleryImage.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions,TouchableOpacity } from 'react-native';
import { Image } from 'react-native-animatable';
import {Badge,Text,Icon} from 'native-base';
const WIDTH = Dimensions.get('window').width;
export default class GalleryImage extends Component {
  render() {
    const { uri, index, onPress,selected } = this.props;
    const setBtnStyle=(index)=>{
        console.log("setBtnStyle");
        let spaceBetween = 10;
        let boxWidth =  WIDTH / 2 - (spaceBetween/2) - 6;

        let style = {
            backgroundColor: 'transparent',
            borderRadius: 0,
            height: WIDTH / 2 - 50,
            width:boxWidth,
            marginBottom:10,
            marginLeft:(index % 2 == 0 ? 6 : spaceBetween),
            shadowColor: '#000',
            shadowOffset: { width: 6, height: 6 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 2,           
          };      
          if(selected){
            style.borderWidth=5;
            style.borderColor='#f2bb24';
          }else{              
            style.borderWidth=0.2;
            style.borderColor='#000';
          }
          return {
            ...style,
            ...this.props.style
          };
    }
    return (       
      <TouchableOpacity
        onPress={() => {
            console.log("on press",this.props.onPress);
            this.props.onPress(index);
        }}
        delayLongPress={1000}
        style={setBtnStyle(index)}
      >
      {
        <Image
          resizeMode="contain"
          animation={'bounceIn'}
          delay={100 * index}
          duration={500}
          source={{uri: uri }}
          style={{
            borderRadius: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            backgroundColor:'#000',
            right: 0,
          }}
        />/**/}
          {this.props.selected && (
        <Badge warning style={{marginLeft:-5,marginTop:-5}}><Text>{index + 1}</Text></Badge>
    )}
      </TouchableOpacity>
    );
  }
}
GalleryImage.propTypes = {
  uri: PropTypes.string,
  index: PropTypes.number,
  onPress: PropTypes.func,
};