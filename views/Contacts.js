import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../const/Colors';

export default function Contacts() {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [contacts, setContacts] = useState([]);
    const [count, setCount] = useState(0);

    const captureName = (typedName) => {
        setName(typedName);
    }

    const captureTelephone = (typedTelephone) => {
        setTelephone(typedTelephone);
    }

    const addContact = () => {
        setContacts(contacts => {
            setCount(count + 1)
            let aux = [...contacts, { key: count.toString(), value: {name: name, telephone: telephone}}];
            setName('');
            setTelephone('');

            return aux;
        });
    }

    return (
        <View style={styles.mainScreen}>
            <View>
                <TextInput
                    style={styles.inputText}
                    placeholder="Type the name"
                    onChangeText = {captureName}
                    value={name}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Type the telephone"
                    onChangeText = {captureTelephone}
                    value={telephone}
                />
                <Button
                    disabled={name.length === 0 || telephone.length === 0}
                    title="Add contact"
                    color={Colors.primary}
                    onPress={addContact}
                />
            </View>
            <FlatList
                data={contacts}
                renderItem={contact => (
                    <View style={styles.listItem}>
                        <Text>{contact.item.value.name} - {contact.item.value.telephone}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        padding: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputText: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 4,
        padding: 12,
    },
    listItem: {
        marginTop: 8,
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        width: 250
    }
});
