import React, {Component} from 'react';
import {StyleSheet, View,Image, TouchableHighlight} from 'react-native';
const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const sobre = require('../imgs/sobre_jogo.png');
const btnOutros = require('../imgs/outros_jogos.png');
import {Actions} from 'react-native-router-flux';

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} />
          <TouchableHighlight onPress={()=>{
              Actions.resultado();
          }}>
          <Image source={btnJogar} style={{marginTop:35}}/>
          </TouchableHighlight>
        </View>
        <View style={styles.logoUm}>
            <TouchableHighlight onPress={()=>{
                Actions.sobrejogo();
            }}>
                <Image source={sobre} />
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>{
                Actions.outrosjogos();
            }}>
                <Image source={btnOutros}/>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#61BD8C',
    flex: 1,
  },
  logo:{
    alignItems: 'center',
    marginTop: 25,
  },
  logoUm:{
    marginTop: 180,
    margin: 45,
    flexDirection: 'row'
  }
});
