import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import MyButton from './UI/button/MyButton';

const Quiz = (props) => {
    const quizData = props.route.params.params.currQuiz
    const [isReady, setIsReady] = useState(false)
    const [number, setNumber] = useState(0)

    const navigationOptions = {
        title:props.title
    }

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
                <Text>{quizData.questions[number].title}</Text>
                {quizData.questions[number].answers.map((answer)=>
                    <Text>{answer.text}</Text>
                )}
                <MyButton title="Далее" onPress={()=>{if(quizData.questions.length-1 > number){setNumber(number+1)}}}/>
                {number
                    ?<MyButton title="Назад" onPress={()=>setNumber(number-1)}/>
                    :console.log("Lol")
                }
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
        paddingTop:20,
        width:"90%",
        height:"100%",
        display:"flex",
        alignItems:'center',
        justifyContent:'center'
    },
    ask: {
        fontSize:24,
        textAlign:'center'
    },
    hint: {
        fontSize: 18,
        textAlign: 'center',
        marginTop:20
    }
})

export default Quiz;
