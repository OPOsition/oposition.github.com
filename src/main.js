import App from './App.svelte';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA5H5YK68AEby7hDxSUK6JdgVRuAiVSReM',
  authDomain: 'resolution2020-73610.firebaseapp.com',
  databaseURL: 'https://resolution2020-73610-default-rtdb.firebaseio.com',
  projectId: 'resolution2020-73610',
  storageBucket: 'resolution2020-73610.appspot.com',
  messagingSenderId: '612554730358',
  appId: '1:612554730358:web:2042c39c452f2be009a857',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = new App({
  target: document.body,
});

export default app;
