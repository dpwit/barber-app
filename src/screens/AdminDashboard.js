import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { db } from "../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function AdminDashboard() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "bookings"), (snap) => {
            setBookings(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return unsub;
    }, []);

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Admin Dashboard</Text>
            <FlatList
                data={bookings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 8 }}>
                        <Text>{item.date} at {item.time}</Text>
                    </View>
                )}
            />
        </View>
    );
}
