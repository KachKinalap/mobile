import React from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import QuizButton from './UI/quizbutton/QuizButton'
const Available = () => {
    const quizzes = [
        {title:'First', count:30},
        {title:'Социологическое исследование температуры тела курсантов', count:128},
        {title:'Third', count:1},
        {title:'Fourth', count:23436},
        {title:'Fifth', count:42},
        {title:'Sixth', count:23}
        ]
    return (
       <View>
        <ScrollView contentContainerStyle={styles.avail}>
            {quizzes.map((quiz=>
                <QuizButton quizTitle={quiz.title} quizCount={quiz.count}/>
            ))}
        </ScrollView>
       </View>
    );
};

const styles = StyleSheet.create({
    avail: {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'flex-start'
    }
})

export default Available;
