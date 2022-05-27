import { React, useEffect, useState } from "react";
import RoutesComponent from "./Routes/Routes";
import { auth } from "./FirebaseAuth/firebase";
import "../node_modules/bootstrap/js/src/collapse.js";
import { app } from "./FirebaseAuth/firebase";

export default function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user);
      } else {
        setUserName("");
      }
    });
  }, []);

  console.log(userName.role);
  return (
    <>
      <RoutesComponent name={userName} />
    </>
  );
}
