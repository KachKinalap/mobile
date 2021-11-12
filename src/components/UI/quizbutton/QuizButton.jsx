import React from 'react';
import MyButton from '../button/MyButton';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
const QuizButton = ({quizTitle, quizCount}) => {
    return (
        <View style={styles.quizMain}>
            <View style={styles.quizItem}>
                <Text
                    style={styles.quizTitle}
                >
                    {quizTitle}
                </Text>
                <Text
                    style={styles.quizCount}
                >
                    {quizCount} вопр.
                </Text>
            </View>
            <MyButton title="Начать"/>
        </View>
    );
};



const styles = StyleSheet.create({
    quizMain: {
        width:'45%',
        height:240,
        borderWidth:4,
        borderColor:'sandybrown',
        borderRadius:12,
        margin:'2.5%',
    },
    quizItem: {
        height:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    quizTitle: {
        fontWeight:'700',
        fontSize:18,
        paddingLeft:5,
        paddingRight:5,
        textAlign:'center'
    },
    quizCount: {
        marginTop:10,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center'

    }
})

export default QuizButton;
