import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import PostService from '../API/PostService';
import {useFetching} from '../hooks/useFetching';

const Login = (props) => {

    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    return (
        <View>
            <MyInput value={login} onChange={setLogin} label="Логин" secure={false}/>
            <MyInput value={password} onChange={setPassword} label="Пароль" secure={true}/>
            <MyButton title ="Войти" onPress={()=>props.action(login,password)}/>
        </View>
    );
};

export default Login;
