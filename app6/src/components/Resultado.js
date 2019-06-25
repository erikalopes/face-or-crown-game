import React, {Component} from 'react';
import { View,Text, Image} from 'react-native';

const cara = require ('../imgs/moeda_cara.png');
const coroa = require ('../imgs/moeda_coroa.png');


export default class Resultado extends Component {
    constructor(props){
        super(props);

        this.state = {resultado: ''};
    }
    componentWillMount(){
        const numAleatorio = Math.floor(Math.random() * 2)
        let caraOuCoroa = '';

        if(numAleatorio===0){
            caraOuCoroa = 'cara';
        }else{
            caraOuCoroa = 'coroa';
        }
        this.setState({resultado: caraOuCoroa});
    }
    render(){
        if(this.state.resultado === 'cara'){
            return(
            <View style={{backgroundColor: '#61BD8C',flex: 1,justifyContent: 'center', alignItems:'center'}}>
                <Image source={cara} />
                <Text style={{fontSize: 22, marginTop:10,fontWeight:'bold'}}>Cara!!!</Text>
            </View>
            )
        }else{
            return(
                <View style={{backgroundColor: '#61BD8C',flex: 1,justifyContent: 'center', alignItems:'center'}}>
                    <Image source={coroa} />
                    <Text style={{fontSize: 22, marginTop:10,fontWeight:'bold'}}>Coroa!!!</Text>

                </View>
            )
        }
    }
}