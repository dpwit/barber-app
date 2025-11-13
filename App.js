// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "./src/screens/CalendarScreen";
import BookingScreen from "./src/screens/BookingScreen";
import AdminDashboard from "./src/screens/AdminDashboard";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calendar" component={CalendarScreen} />
                <Stack.Screen name="Booking" component={BookingScreen} />
                <Stack.Screen name="Admin" component={AdminDashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
