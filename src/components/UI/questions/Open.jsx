import React, {useState} from 'react';
import {View, Text} from 'react-native'
import MyInput from '../input/MyInput';
const Open = () => {
    //такое же состояние для ответа в виде написанного пользователем слова или слвсчтн
    const [ans, setAns] = useState('')

    return (
        <View style={{marginBottom:'60%'}}>
            {console.log(ans)}
            <MyInput
                secure={false}
                onChange={setAns}
                label="Введите ответ сюда"/>
        </View>
    );
};

export default Open;
