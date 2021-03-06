import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Item } from 'native-base';
import Gallery from './components/Gallery';
import PropTypes from 'prop-types';

export default class Main extends Component {


    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            loading: true,
            images: [
                { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNCs2l1aPPfKQjZ7ejGacZwzgfZWBPQjY7lbkCrjEfVVHMTLI', description: "teste1" },
                { uri: 'https://help.sitebeam.net/app/uploads/2012/07/test_urlformat.png', description: "teste2" },
                { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsVYMSCIrzl2N8R_c0B4Scz7uEqlmxVOvNV2prgnhLdvGxecv', description: "teste3" },
                { uri: 'https://wkkrqsriursybsor-zippykid.netdna-ssl.com/wp-content/uploads/2012/06/website-url.jpg', description: "teste4" },
                { uri: 'https://d1u7j79bg1ays7.cloudfront.net/blog/wp-content/uploads/2017/01/URL-Load-Testing-RedLine13_ACO.png', description: "teste5" },
                { uri: 'https://i.ytimg.com/vi/jMgvnXq-s8o/maxresdefault.jpg', description: "teste6" }
            ]
        };


        setTimeout(() => {
            console.log("TIMEOUUUUT");
            this.setState({ loading: false })
        }, 100);


    }



    handler(listImages) {
        var images = this.state.images;
        listImages.forEach((element, index) => {
            images.filter((item, index) => {
                console.log(item, element, "iteme");
                if (item.uri == element.url){
                    console.log("ENTROUIFFFF");
                    return images[index].description = element.description;
                }
            })
        });

        this.setState({ images: images});
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Teste de galeria</Title>
                    </Body>
                </Header>
                <Content>
                    {!this.state.loading ? <Gallery
                        images={this.state.images}
                        handler={this.handler}
                        selectionMode={false}></Gallery> : null}

                    <Button block onPress={() => console.log(this.state.images)}>
                        <Text>Lista de imagens</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}