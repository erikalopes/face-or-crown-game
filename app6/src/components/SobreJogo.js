import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class SobreJogo extends Component {
    render(){
        return(
            <View style={{backgroundColor: '#61BD8C',flex: 1,}}>
                <Text style={{fontSize: 22}}>
                Informação sobre o jogo lorem ipsum lorem sit lorem
                </Text>
            </View>
        )
    }
}