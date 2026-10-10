"use client";

import { useEffect } from "react";
import { seedFirestoreData } from "@/lib/seedFirestore";

export default function FirestoreSeeder() {
  useEffect(() => {
    // Only attempts to seed if collections are empty.
    // Once data exists, seedFirestoreData skips automatically.
    seedFirestoreData();
  }, []);

  return null;
}
