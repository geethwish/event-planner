import { firestore } from "@/config/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";

// Store user profile details in async storage
export const storeAuthDetails = async (user: any) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("Error storing token", error);
  }
};

// Get user profile details from async storage
export const getAuthDetails = async () => {
  try {
    return await AsyncStorage.getItem("user");
  } catch (error) {
    console.error("Error retrieving token", error);
    return null;
  }
};

// Clear user profile details from async storage

export const removeUserProfile = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    console.error("Error removing token", error);
  }
};

// Get user profile details from firestore using account uid
export const fetchUserProfile = async (uid: string) => {
  const userDocRef = doc(firestore, "users", uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    return userDocSnap.data();
  } else {
    throw Error("User not found");
  }
};
