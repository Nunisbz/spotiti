import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function UserAccountScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conta do Usuário</Text>
            <Text style={styles.userInfo}>Nome Completo: John Doe</Text>
            <Text style={styles.userInfo}>Email: john.doe@example.com</Text>
            <Button title="Sair" onPress={() => router.push('/login')} color="#6200ee" />
        </View>
    );
}
