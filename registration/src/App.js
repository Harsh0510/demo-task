// import React, { Component } from "react";
// import firebase from "./firebase";

// export default class App extends Component {
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   configureCaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       "sign-in-button",
//       {
//         size: "invisible",
//         callback: (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           this.onSignInSubmit();
//           console.log("Recaptcha verified");
//         },
//         defaultCountry: "IN",
//       }
//     );
//   };
//   onSignInSubmit = (e) => {
//     e.preventDefault();
//     this.configureCaptcha();
//     const phoneNumber = "+91" + this.state.mobile;
//     console.log(phoneNumber);

//     const appVerifier = window.recaptchaVerifier;
//     firebase
//       .auth()
//       .signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         console.log("otp hase been sent");
//         // ...
//       })
//       .catch((error) => {
//         // Error; SMS not sent
//         // ...
//         console.log("sms not send");
//       });
//   };
//   onSubmitOTP = (e) => {
//     e.preventDefault();
//     const code = this.state.otp;
//     console.log(code);
//     window.confirmationResult
//       .confirm(code)
//       .then((result) => {
//         // User signed in successfully.
//         const user = result.user;
//         console.log(JSON.stringify(user));
//         alert("User is verified");
//         // ...
//       })
//       .catch((error) => {
//         // User couldn't sign in (bad verification code?)
//         // ...
//       });
//   };

//   render() {
//     return (
//       <>
//         <h2>Login form</h2>
//         <form onSubmit={this.onSignInSubmit}>
//           <div id='sign-in-button'></div>
//           <input
//             type='number'
//             name='mobile'
//             placeholder='Mobile Number'
//             required
//             onChange={this.handleChange}
//           />
//           <button type='submit'>Submit</button>
//         </form>
//         <h2>Enter OTP</h2>
//         <form onSubmit={this.onSubmitOTP}>
//           <input
//             type='number'
//             name='otp'
//             placeholder='OTP Number'
//             required
//             onChange={this.handleChange}
//           />
//           <button type='submit'>Submit</button>
//         </form>
//       </>
//     );
//   }
// }

// import firebase from "./firebase";
// import React, { Component } from "react";

// export default class App extends Component {
//   handleClick = () => {
//     let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
//     let number = "+919624812241";
//     firebase
//       .auth()
//       .signInWithPhoneNumber(number, recaptcha)
//       .then(function (e) {
//         let code = prompt("enter the otp", "");
//         if (code == null) return;
//         e.confirm(code)
//           .then(function (result) {
//             console.log(result.user, "user");
//             document.querySelector("label").textContent =
//               result.user.phoneNumber + "Number Verified";
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       });
//   };
//   render() {
//     return (
//       <div>
//         <label></label>
//         <button onClick={this.handleClick}>Click here</button>
//       </div>
//     );
//   }
// }

import React from "react";
import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./component/SignIn";
import Mainpage from "./main";

function App() {
  // const [user] = useAuthState(auth);
  return <Login />;
}

export default App;
