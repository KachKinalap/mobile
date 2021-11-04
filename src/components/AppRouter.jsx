import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {privateRoutes} from '../router/index';
import Login from './Login';
import Register from './Register';
import {usersCreds} from './users/index'

const Drawer = createDrawerNavigator();

const AppRouter = () => {
    const register = (login, password) => {
        usersCreds.push({login:login, password:password})
    }

    const [isAuth, setIsAuth] = useState(true)

    const login = (login,password) => {
        let result = usersCreds.some((user)=>{
            if((user.login === login)&& (user.password === password)){
                setIsAuth(true)
                return user;
            }

        })
    }

    return (

                    isAuth
                    ?
                        <NavigationContainer>
                            <Drawer.Navigator initialRouteName="Домашняя страница">
                    {privateRoutes.map(route=>
                            <Drawer.Screen name={route.name} component={route.component} key={route.name}/>
                        )}
                            </Drawer.Navigator>
                        </NavigationContainer>
                    :
                        <NavigationContainer>
                            <Drawer.Navigator initialRouteName="Вход">
                                <Drawer.Screen
                                    name="Регистрация"
                                    component={() => <Register action={register}/>}
                                    key="Регистрация"
                                />
                                <Drawer.Screen
                                    name="Вход"
                                    component={() => <Login action={login}/>}
                                    key="Вход"
                                />
                            </Drawer.Navigator>
                        </NavigationContainer>
    );
};

export default AppRouter;
