import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCY2EXDdnRp2aGYmUK7zdfRwh72ILbyjl8",
	authDomain: "employee-tracking-2ef25.firebaseapp.com",
	databaseURL: "https://employee-tracking-2ef25.firebaseio.com",
	projectId: "employee-tracking-2ef25",
	storageBucket: "employee-tracking-2ef25.appspot.com",
	messagingSenderId: "818044109171",
	appId: "1:818044109171:web:bd7625ceec0bc9e8950506",
	measurementId: "G-7G8T85GJP7"
});


export default app;
