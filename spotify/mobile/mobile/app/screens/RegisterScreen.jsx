import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const API_URL = 'http://localhost:8000';

export default function RegisterScreen() {
    const [form, setForm] = useState({
        nome: '',
        sobreNome: '',
        email: '',
        senha: '',
        dataNascimento: ''
    });

    const handleRegister = async () => {
        try {
            const response = await fetch(`${API_URL}/autenticacao/registro`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const message = await response.text();
            Alert.alert(message);
            if (message === 'Usuario registrado com sucesso!') {
                router.push('/login');
            }
        } catch (error) {
            console.error("Erro no registro:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput placeholder="Nome" onChangeText={(text) => setForm({ ...form, nome: text })} style={styles.input} />
            <TextInput placeholder="Sobrenome" onChangeText={(text) => setForm({ ...form, sobreNome: text })} style={styles.input} />
            <TextInput placeholder="Email" onChangeText={(text) => setForm({ ...form, email: text })} style={styles.input} />
            <TextInput placeholder="Senha" secureTextEntry onChangeText={(text) => setForm({ ...form, senha: text })} style={styles.input} />
            <TextInput placeholder="Data de Nascimento" onChangeText={(text) => setForm({ ...form, dataNascimento: text })} style={styles.input} />
            <Button title="Registrar" onPress={handleRegister} color="#6200ee" />
            <Button title="Já tem uma conta? Faça login" onPress={() => router.push('/login')} color="#6200ee" />
        </View>
    );
}
