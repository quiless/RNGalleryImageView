// Gallery.js
import React, { Component } from 'react';
import { Dimensions, View,Text } from 'react-native';
import PropTypes from 'prop-types';
import GalleryImageViewer from './GalleryImageViewer';
import GalleryImage from './GalleryImage';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: 0,
        shown: false,
        imagesUrl:[],
        images:props.images
    };
    this.onImageClick = this.onImageClick.bind(this);
    this.hideLightbox = this.hideLightbox.bind(this);
  }

  componentDidMount(){
      this.setState({
          imagesUrl:this.props.images
      })
  }

  onImageClick = (index) => {
      if(this.props.selectionMode){
        let images =   this.state.images;
        if(images[index].selected == undefined)
           images[index].selected=true;
        else
          images[index].selected = !images[index].selected;
        this.setState({
          images:images
        });
      }else{
        this.setState({
            index:index,
            shown: true,
        });
      }
     
      
  };
  hideLightbox = () => {
    this.setState({
      index: 0,
      shown: false,
    });
  };

  render() {
    const renderImage=(image,index)=>{
        console.log("renderImage");
        return (
            <GalleryImage
                index={index}
                key={index}
                description={image.description}
                onPress={this.onImageClick}
                selected={image.selected}
                uri={image.uri}
            />
        );
    }
    return (
        <View style={{flex:1,marginTop:20}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          zIndex:0
        }}
      >
        { (this.state.images ? this.state.images.map((image, index) =>{
            return renderImage(image,index);
        }): null)}

        <GalleryImageViewer          
          shown={this.state.shown}          
          imageUrls={this.state.imagesUrl}          
          onClose={this.hideLightbox}
          index={this.state.index}   
        />
         
      </View>
    </View>
    );
  }
}
Gallery.propTypes = {
  images: PropTypes.array,
};