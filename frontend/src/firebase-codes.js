import firebase from 'firebase/app';
import 'firebase/auth';
const app = firebase.initializeApp({
	apiKey: 'AIzaSyC0QtZSgpCO_rDGC_zyZ4pJpq3H9w8ZjJo',
	authDomain: 'robo-hack.firebaseapp.com',
	projectId: 'robo-hack',
	storageBucket: 'robo-hack.appspot.com',
	messagingSenderId: '566138567854',
	appId: '1:566138567854:web:52945e9483157a8a2f813f',
	measurementId: 'G-LTR52X27YQ',
});
export const auth = app.auth();
export default app;
