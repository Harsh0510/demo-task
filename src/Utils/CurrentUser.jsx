import React, { useEffect, useState, createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../FirebaseAuth/firebase";
import { signOut } from "firebase/auth";
import { query, collection, getDocs, where } from "firebase/firestore/lite";
const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

function UserProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [firstname, setFirstName] = useState("");
  const [uid, setUid] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const fetchUserData = async () => {
    try {
      const q = query(collection(db, "user"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      const dataId = doc.docs[0].id;
      setFirstName(data.firstname);
      setLastName(data.lastname);
      setEmail(data.email);
      setPhoneNumber(data.mobilenumber);
      setRole(data.role);
      setPhotoUrl(data.url);
      setUid(dataId);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    signOut(auth);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setRole("");
    setPhotoUrl("");
    setUid("");
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return error;
    fetchUserData();
  }, [user, loading]);

  const values = {
    firstname,
    lastname,
    email,
    phoneNumber,
    photoUrl,
    role,
    logout,
    uid,
  };

  return (
    <>
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
    </>
  );
}
export { useUserContext, UserProvider };
