import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyCBEzhvoKrZSOeZsiM5xGB5yGXaymM8FB8",
	authDomain: "appetit-f95b0.firebaseapp.com",
	databaseURL: "https://appetit-f95b0.firebaseio.com",
	projectId: "appetit-f95b0",
	storageBucket: "appetit-f95b0.appspot.com",
	messagingSenderId: "964514257397",
	appId: "1:964514257397:web:9d55321b6387b6d9eb68bc",
	measurementId: "G-H9ZT70KLEX"
};
// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);