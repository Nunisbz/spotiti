import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import UserAccountScreen from './screens/UserAccountScreen';
import AdminScreen from './screens/AdminScreen';

export default function App() {
    const [screen, setScreen] = useState('register');

    const navigateTo = (targetScreen) => setScreen(targetScreen);

    switch (screen) {
        case 'register':
            return <RegisterScreen navigateTo={navigateTo} />;
        case 'login':
            return <LoginScreen navigateTo={navigateTo} />;
        case 'userAccount':
            return <UserAccountScreen navigateTo={navigateTo} />;
        case 'admin':
            return <AdminScreen navigateTo={navigateTo} />;
        default:
            return <View />;
    }
}
