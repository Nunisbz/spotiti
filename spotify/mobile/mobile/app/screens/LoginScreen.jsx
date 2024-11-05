import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { router } from 'expo-router';

const API_URL = 'http://localhost:8000';

export default function LoginScreen() {
    const [form, setForm] = useState({ email: '', senha: '' });

    const handleLogin = async () => {
        try {
            const response = await fetch(`${API_URL}/autenticacao/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const message = await response.text();
            Alert.alert(message);
            if (message === 'Admin logado com sucesso!') {
                router.push('/admin');
            } else if (message === 'Usuario logado com sucesso!') {
                router.push('/userAccount');
            }
        } catch (error) {
            console.error("Erro no login:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="Email" onChangeText={(text) => setForm({ ...form, email: text })} style={styles.input} />
            <TextInput placeholder="Senha" secureTextEntry onChangeText={(text) => setForm({ ...form, senha: text })} style={styles.input} />
            <Button title="Entrar" onPress={handleLogin} color="#6200ee" />
            <Button title="Não tem uma conta? Registre-se" onPress={() => router.push('/register')} color="#6200ee" />
        </View>
    );
}
