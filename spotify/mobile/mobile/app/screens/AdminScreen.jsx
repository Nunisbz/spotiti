import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { router } from 'expo-router';
import styles from '../../styles/styles';

const API_URL = 'http://localhost:8000';

export default function AdminScreen() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${API_URL}/usuarios/todos`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    const handleDeleteUser = async (email) => {
        try {
            const response = await fetch(`${API_URL}/usuarios/delete`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const message = await response.text();
            Alert.alert(message);
            fetchUsers();
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Administração</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.email}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => setSelectedUser(item)} 
                        style={styles.userItem}
                    >
                        <Text style={styles.userName}>{item.nome} {item.sobreNome}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title="Voltar para Login" onPress={() => router.push('/login')} color="#6200ee" />
            {selectedUser && (
                <View style={styles.selectedUserContainer}>
                    <Text style={styles.userInfo}>Nome Completo: {selectedUser.nome} {selectedUser.sobreNome}</Text>
                    <Text style={styles.userInfo}>Email: {selectedUser.email}</Text>
                    <Button 
                        title="Excluir Usuário" 
                        onPress={() => handleDeleteUser(selectedUser.email)} 
                        color="#ff1744" 
                    />
                </View>
            )}
        </View>
    );
}
