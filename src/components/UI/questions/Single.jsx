import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RadioButton} from 'react-native-paper'
import Answer from '../answer/Answer';
import RadioGroup from 'native-base/src/components/primitives/Radio/RadioGroup';
const Single = (props) => {

const answers = props.quizData.questions[props.number].answers
const [radio, setRadio] = React.useState();
const [ansPull, setAnsPull] = useState(props.totalAns.variants)

    return (
        <View style={props.style}>
            <Text style={{textAlign:'center', paddingBottom:20, paddingTop:20}}>
                (выберите один вариант ответа)
            </Text>
            <RadioButton.Group
                onValueChange={newValue => {
                    setRadio(newValue);
                    console.log(newValue)
                    let mass=[]
                    for (let i = 0; i < ansPull.length; i++) {
                        if(i==newValue){
                            mass[i] = true
                            continue
                        }
                        mass[i] = false
                    }
                    setAnsPull(mass)
                    console.log(ansPull, mass)
                    }}
                value={radio}>
                {
                    answers.map((ans, index)=>
                        <View style={styles.radioCont}>
                            <RadioButton value={index}/>
                            <Text>{ans.text}</Text>
                        </View>
                    )
                }
            </RadioButton.Group>


        </View>
    );
};

const styles = StyleSheet.create({
    radioCont: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'
    }
})

export default Single;
