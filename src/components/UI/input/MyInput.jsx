import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const MyInput = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.wrapperInput}>
                <Text style={styles.inputText}>{props.label}</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={props.secure}
                    onChangeText={text=>props.onChange(text)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        display:'flex',
        alignItems:'center',
    },
    wrapperInput: {
        display:'flex',
        alignItems:'flex-start',
    },
    input: {
        borderColor:'sandybrown',
        borderWidth:2,
        width:250,
        height:40,
        fontSize:20,
        marginTop:10,
        paddingLeft:10,
        paddingRight:10
    },
    inputText: {
        marginTop:20,
        fontSize:20,

    }
})

export default MyInput;
