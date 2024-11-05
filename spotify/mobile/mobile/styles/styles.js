import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f8f9fa'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ced4da',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },
    userInfo: {
        fontSize: 18,
        marginBottom: 8,
    },
    userItem: {
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#e9ecef',
        borderRadius: 5,
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
    },
    selectedUserContainer: {
        marginTop: 20,
    }
});
