import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import TimeSlotPicker from "../components/TimeSlotPicker";

export default function CalendarScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Choose a Time Slot
            </Text>
            <TimeSlotPicker
                date={selectedDate.toISOString().split("T")[0]}
                onSelect={(slot) => navigation.navigate("Booking", { slot })}
            />
        </View>
    );
}
