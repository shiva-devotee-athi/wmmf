"use client";

import { useEffect, useState, useCallback } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
  type QueryConstraint,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type WithId<T> = T & { id: string };

/**
 * Subscribes to a Firestore collection in real time and exposes create,
 * update, and delete helpers. Generic over the document shape T.
 */
export function useFirestoreCollection<T extends Record<string, unknown>>(
  collectionName: string,
  orderByField = "createdAt",
  orderDirection: "asc" | "desc" = "desc",
) {
  const [items, setItems] = useState<WithId<T>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const constraints: QueryConstraint[] = orderByField
      ? [orderBy(orderByField, orderDirection)]
      : [];
    const q = query(collection(db, collectionName), ...constraints);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setItems(snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as T) })));
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, [collectionName, orderByField, orderDirection]);

  const create = useCallback(
    async (data: T) => {
      await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: serverTimestamp(),
      });
    },
    [collectionName],
  );

  const update = useCallback(
    async (id: string, data: Partial<T>) => {
      await updateDoc(doc(db, collectionName, id), {
        ...data,
        updatedAt: serverTimestamp(),
      });
    },
    [collectionName],
  );

  const remove = useCallback(
    async (id: string) => {
      await deleteDoc(doc(db, collectionName, id));
    },
    [collectionName],
  );

  return { items, loading, error, create, update, remove };
}
