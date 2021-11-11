import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import QuizButton from './UI/quizbutton/QuizButton'
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
const Available = () => {



    const [quizzes, setQuizzes] = useState([])
    const [json, setJson] = useState({})
    const [fetchJson, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll()
        setJson(response.data)
        parseQuizzes(json)

    })

    useEffect(() => {
        fetchJson()
    }, [])

    const parseQuizzes = (mass)=>{

        for (let i = 0; i < mass.payload.total; i++) {
            let quiz = {}
            quiz.title=mass.payload.surveys[i].title
            quiz.count = mass.payload.surveys[i].questions.length
            setQuizzes([...quizzes, quiz])
        }
    }




    // const quizzes = [
    //     {title:'First', count:30},
    //     {title:'Социологическое исследование температуры тела курсантов', count:128},
    //     {title:'Third', count:1},
    //     {title:'Fourth', count:23436},
    //     {title:'Fifth', count:42},
    //     {title:'Sixth', count:23},
    //     {title:'Seventh', count:23},
    //     {title:'Eighth', count:23}
    //     ]
    return (
        isLoading
            ?
            <SafeAreaView>
                <Text>Загружается...</Text>
            </SafeAreaView>
            :
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.avail}>
                    {quizzes.map((quiz=>
                            <QuizButton quizTitle={quiz.title} quizCount={quiz.count} key={quiz.title}/>
                    ))}
                </ScrollView>
            </SafeAreaView>
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


