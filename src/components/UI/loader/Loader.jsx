import React from 'react';
import {StyleSheet, Animated, Dimensions, SafeAreaView, Easing} from 'react-native';

const Loader = () => {

    const spinValue = new Animated.Value(0);
    const incrScale = new Animated.Value(0);

    //--------------------------FOR SPIN----------------------------

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();
    //binding 0 and 1 to suitable values for our animation
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    //--------------------------FOR SCALE----------------------------

    Animated.loop(
        Animated.timing(
            incrScale,
            {
                toValue: 1,
                duration: 6000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    const incr = spinValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.5, 1]
    })

    return (
        <SafeAreaView style={styles.main}>
            <Animated.View
                style={[styles.loader, {transform: [{rotate: spin, scale: incr}] }]}
            >
            </Animated.View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height-150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        width:100,
        height:100,
        borderWidth: 3,
        borderColor:'sandybrown',
        borderRadius:50,
        borderStyle:'dashed'
    }
})

export default Loader;
