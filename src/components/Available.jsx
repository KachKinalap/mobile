import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, Button, View} from 'react-native';
import QuizButton from './UI/quizbutton/QuizButton'
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from './UI/loader/Loader';
import Quiz from './Quiz';

const Available = (props) => {

    const [quizzes, setQuizzes] = useState([])
    const [json, setJson] = useState({})

    const [fetchJson, isLoading, error] = useFetching(async () => {
        const response = await PostService.getAll()
        setJson(response.data)
        parseQuizzes(response.data)
    })

    useEffect(() => {
        fetchJson()
    }, [])

    const parseQuizzes = (mass)=>{
        let quizzes_curr = []
        for (let i = 0; i < mass.payload.total; i++) {
            let quiz = {}
            quiz.title=mass.payload.surveys[i].title
            quiz.description = mass.payload.surveys[i].description
            quiz.count = mass.payload.surveys[i].questions.length
            quiz.key = i
            quizzes_curr.push(quiz)
        }
        setQuizzes(quizzes_curr)
    }



    return (
        <SafeAreaView>
    {
        isLoading
            ?
                <Loader/>
            :
            <ScrollView contentContainerStyle={styles.avail}>

                {quizzes.map((quiz=>
                        <QuizButton
                            quizTitle={quiz.title}
                            quizDescr={quiz.description}
                            quizCount={quiz.count}
                            key={quiz.key}

                            action = {()=>{

                                props.route.params.action(json.payload.surveys[quiz.key].title)
                                props.navigation.navigate(
                                    "Анкета",
                                    {params:
                                            {currQuiz:json.payload.surveys[quiz.key]}
                                    })
                            }}
                        />))
                }
            </ScrollView>
    }
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


