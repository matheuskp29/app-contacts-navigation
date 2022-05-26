import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BtnHeader from '../components/BtnHeader'
import Contacts from '../views/Contacts'
import Home from '../views/Home'
import Colors from '../const/Colors'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name="Contacts" component={Contacts}></Stack.Screen>
            <Stack.Screen
                name="Home"
                component={Home}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={BtnHeader}>
                            <Item
                                title="add"
                                iconName="md-add"
                                onPress={() => {
                                    props.navigation.navigate('Contacts')
                                }}
                            />
                        </HeaderButtons>
                    ),
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container
