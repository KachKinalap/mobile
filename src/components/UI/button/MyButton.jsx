import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

const MyButton = (props) => {
    return (
        props.onPress
            ?
        <View style={styles.main}>

            <TouchableOpacity style={styles.myBtn} onPress={props.onPress}>
                <Text style={styles.myBtnText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
            :
        <View style={styles.main}>
            <TouchableOpacity style={styles.myBtn}>
                <Text style={styles.myBtnText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        display:'flex',
        alignItems:'center',
        marginTop:30
    },
    myBtn: {
        width:'auto',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        color: 'sandybrown',
        borderRadius:4,
        background: 'transparent',
        borderWidth: 2,
        borderColor:'sandybrown',
    },
    myBtnText: {
        fontSize: 20,
    }
});

export default MyButton;
