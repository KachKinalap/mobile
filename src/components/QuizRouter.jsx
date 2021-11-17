import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Dimensions} from 'react-native'
import Quiz from './Quiz';
import Available from './Available';

const Stack = createNativeStackNavigator();

const QuizRouter = () => {
    const [titleQuiz,setTitleQuiz] = useState("Ебошь")
    return (
        <View style={{height:Dimensions.get('window').height-20, marginTop:'-10%'}}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Доступные"
                    component={Available}
                    initialParams={{action:setTitleQuiz}}
                />
                <Stack.Screen
                    name={"Анкета"}
                    component={Quiz}
                    options={{title: titleQuiz}}

                />
            </Stack.Navigator>
        </View>
    );
};

export default QuizRouter;
