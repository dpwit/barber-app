import React, { useState, useEffect } from "react";
import { FlatList, Button } from "react-native";
import { db } from "../services/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function TimeSlotPicker({ date, onSelect }) {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const ref = collection(db, "timeslots");
        const q = query(ref, where("date", "==", date), where("booked", "==", false));
        const unsub = onSnapshot(q, (snapshot) => {
            setSlots(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        return unsub;
    }, [date]);

    return (
        <FlatList
            data={slots}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Button title={item.time} onPress={() => onSelect(item)} />
            )}
        />
    );
}
