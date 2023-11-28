import React, {Component} from "react";
import { View, Text , StyleSheet, TouchableWithoutFeedback , Animated} from "react-native-web";
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'


export default class FabButton extends Component {

    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 6,
        }).start();

        this.open = !this.open;

    }

    render(){

        const cameraStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const likeStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -130]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }

        return (
            <View style={[styles.container , this.props.style]}>
        
                <TouchableWithoutFeedback onPress={ () => alert('Traçar Rota')}>
                    <Animated.View style={[styles.button, styles.submenu , likeStyle]}>
                        <MaterialIcons name="directions" size={20} color='#2feb8a' /> {/*color='#fff'*/}
                    </Animated.View>
                </TouchableWithoutFeedback>
        
                <TouchableWithoutFeedback onPress={ () => alert('Lista')}>
                    <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
                        <Entypo name="list" size={20} color='#2feb8a' /> {/*color='#fff'*/}
                    </Animated.View>
                </TouchableWithoutFeedback>
        
                <TouchableWithoutFeedback onPress={this.toggleMenu} >
                    <Animated.View style={[styles.button, styles.menu , rotation]}>
                        <AntDesign name="plus" size={24} color='black' /> {/*color='#fff'*/} 
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'  
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#00213B',
        shadowOpacity: 0.3,
        shadowOffset: {
                height:10,
        }
    },
    menu: {
        // backgroundColor: '#00213b',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
    },
    submenu: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        // backgroundColor: '#00213b'
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
    }
});