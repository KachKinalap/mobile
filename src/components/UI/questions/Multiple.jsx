import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Answer from '../answer/Answer';
const Multiple = (props) => {
    //сделали состояние для ответов, которое можем загнать в общий массив
    const [ansPull, setAnsPull] = useState(props.totalAns.variants)
    return (
        <View style={props.style}>
            <Text style={{textAlign:'center', paddingBottom:20, paddingTop:20}}>
                (выберите один или несколько вариантов ответа)
            </Text>
            {props.quizData.questions[props.number].answers.map((answer, index)=>
                <Answer defAns={ansPull} action={setAnsPull} index={index} totalAns={props.totalAns} contain={answer.text} number={props.number}/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({

})

export default Multiple;
