import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import MyButton from './UI/button/MyButton';
import Answer from './UI/answer/Answer';
import Multiple from './UI/questions/Multiple';
import Single from './UI/questions/Single';
import Open from './UI/questions/Open';

const Quiz = (props) => {
    //упрощение пропса
    const quizData = props.route.params.params.currQuiz
    //проверка на готовность к опросу
    const [isReady, setIsReady] = useState(false)
    //текущий номер вопроса(старт с 0)
    const [number, setNumber] = useState(0)
    //массив ответов
    let defAns = []
    //начальное заполнение
    for (let i = 0; i < quizData.questions.length; i++) {
        let q={}
        q.id = quizData.questions[i].id
        if(quizData.questions[i].type==="multiple" || quizData.questions[i].type==="single") {
            q.variants = []
            for (let j = 0; j < quizData.questions[i].answers.length; j++) {
                q.variants[j] = false
            }
        }
        else{
            q.variant = ""
        }
        defAns.push(q)
    }
    //формируем на его основе начальное состояние
    const [totalAnswers,setTotalAnswers] = useState(defAns)

    return (

        <SafeAreaView style = {styles.main}>
            {
            !isReady
            ?
            <View style={styles.container}>
                <Text style = {styles.ask}>Вы уверены, что хотите начать?</Text>
                <Text style = {styles.hint}>
                    (чтобы вернуться назад, воспользуйтесь стрелкой или
                    выберите другой пункт меню в левом верхнем углу )
                </Text>
                    <MyButton title="Старт" onPress={()=>setIsReady(true)}/>
            </View>
            :
            <View style={styles.container}>
                {/*номер вопроса*/}
                <Text style={styles.numberQuestion}>
                    Вопрос №{(number+1)?number+1:'(без номера)'}
                </Text>
                {/*текст вопроса*/}
                <Text style={styles.questionTitle}>{quizData.questions[number].title}</Text>
                {quizData.questions[number].type==="multiple"
                    ?
                    <Multiple
                        quizData={quizData}
                        number={number}
                        style={{alignSelf: 'flex-start', marginLeft: '15%', marginRight:'15%'}}
                        totalAns={totalAnswers[number]}
                    />
                    :
                        quizData.questions[number].type === "single"
                            ?<Single
                                quizData={quizData}
                                number={number}
                                totalAns={totalAnswers[number]}
                             />
                            :<Open totalAns={totalAnswers[number]}/>
                }
                <View style={styles.flexButtons}>
                    {number
                        ?<MyButton title="Назад" onPress={()=>setNumber(number-1)}/>
                        :<MyButton title="Назад" disabled={true}/>
                    }
                    {number === (quizData.questions.length-1)
                        ?
                        <MyButton
                            title="Завершить"
                            onPress={()=>{props.navigation.navigate("Доступные");console.log(totalAnswers)}}
                        />
                        :
                        <MyButton
                            title="Далее"
                            onPress={()=>{

                                setNumber(number+1)
                            }}
                        />
                    }
                </View>
            </View>
            }

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        width:'100%',
        display:'flex',
        alignItems:'center'
    },
    container: {
        paddingTop:'5%',
        paddingBottom:'10%',
        width:"90%",
        height:"100%",
        display:"flex",
        alignItems:'center',
        justifyContent:'space-between'
    },
    ask: {
        fontSize:24,
        textAlign:'center'
    },
    hint: {
        fontSize: 18,
        textAlign: 'center',
        marginTop:20
    },
    flexButtons: {
        width:'70%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'space-around',
    },
    numberQuestion: {
        fontSize:20,
        fontWeight:'700'
    },
    questionTitle: {
        fontSize:20,
    },
})

export default Quiz;
