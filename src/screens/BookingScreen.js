import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { db } from "../services/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";

export default function BookingScreen({ route, navigation }) {
    const { slot } = route.params;

    const handleBook = async () => {
        try {
            const bookingRef = doc(db, "bookings", slot.id);
            await setDoc(bookingRef, {
                time: slot.time,
                date: slot.date,
                booked: true,
                createdAt: new Date().toISOString()
            });
            await updateDoc(doc(db, "timeslots", slot.id), { booked: true });
            Alert.alert("Success", "Your appointment is booked!");
            navigation.navigate("Calendar");
        } catch (err) {
            Alert.alert("Error", err.message);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 22 }}>Confirm Appointment</Text>
            <Text>{slot.date} at {slot.time}</Text>
            <Button title="Book Now" onPress={handleBook} />
        </View>
    );
}
