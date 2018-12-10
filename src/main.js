import React, { Component } from 'react';
import { Dispatcher } from 'flux';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Header, Body, Title, Button } from 'native-base';
import Gallery from './components/Gallery';
import PropTypes from 'prop-types';

const dispatcher = new Dispatcher();

export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            images: [
                { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNCs2l1aPPfKQjZ7ejGacZwzgfZWBPQjY7lbkCrjEfVVHMTLI', description: "teste1" },
                { uri: 'https://help.sitebeam.net/app/uploads/2012/07/test_urlformat.png', description: "teste2" },
                { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsVYMSCIrzl2N8R_c0B4Scz7uEqlmxVOvNV2prgnhLdvGxecv', description: "teste3" },
                { uri: 'https://wkkrqsriursybsor-zippykid.netdna-ssl.com/wp-content/uploads/2012/06/website-url.jpg', description: "teste4" },
                { uri: 'https://d1u7j79bg1ays7.cloudfront.net/blog/wp-content/uploads/2017/01/URL-Load-Testing-RedLine13_ACO.png', description: "teste5" },
                { uri: 'https://i.ytimg.com/vi/jMgvnXq-s8o/maxresdefault.jpg', description: "teste6" }
            ]
        };
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
                    <Gallery
                        images={this.state.images}
                        selectionMode={false}></Gallery>
                    <Button block onPress={() => console.log(this.state.images)}>
                        <Text>Lista de imagens</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}