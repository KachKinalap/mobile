import React from 'react';
import MyButton from '../button/MyButton';
import {View, Text, StyleSheet} from 'react-native'
const QuizButton = (props) => {
    return (
        <View style={styles.quizMain}>
            <View style={styles.quizItem}>
                    <Text
                        style={styles.quizTitle}
                    >
                        {props.quizTitle}
                    </Text>
                <Text
                    style = {styles.quizDescr}
                >
                    {props.quizDescr}
                </Text>
                <Text
                    style={styles.quizCount}
                >
                    {props.quizCount} вопр.
                </Text>
            </View>
            <View style = {styles.quizButton}>
            <MyButton title="Начать" onPress = {props.action}/>
            </View>
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
        position:'relative'
    },
    quizItem: {
        height:'70%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    quizTitle: {
        fontWeight:'700',
        fontSize:18,
        paddingLeft:5,
        paddingRight:5,
        textAlign:'center',
        marginTop:10
    },
    quizDescr: {
        marginTop:10,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center'
    },
    quizCount: {
        marginTop:10,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center'
    },
    quizButton: {
        position:'absolute',
        bottom:10,
        left:'20%',
        right:'20%'
    }
})

export default QuizButton;
