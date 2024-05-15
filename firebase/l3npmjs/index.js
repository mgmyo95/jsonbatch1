// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuPh3Vm5vbtq_Mo3CBzETAXJTfLLexCPc",
  authDomain: "my-first-project-7f393.firebaseapp.com",
  projectId: "my-first-project-7f393",
  storageBucket: "my-first-project-7f393.appspot.com",
  messagingSenderId: "1061001624268",
  appId: "1:1061001624268:web:d1685acabdb7eed0ede069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const db = getFirestore(app); // initialize
console.log(db);

// => In Terminal 
// cd l3npmjs 
// node index.js

// to run live server
// ctr+shift+p 

// https://firebase.google.com/docs/overview > firebase fundamentals > web icon > Available Firebase services for web 	> import { } from 'firebase/messaging';


// => Create Database 
// https://console.firebase.google.com/ > Build > Firebae Databaase > Create Database 
// Database ID = Default

// collection connect with database 
// db = database 
// users = username
// addDoc(Collection(db,'users'),{
//   name : "aung aung",
//   city : "Yangon",
//   age : 20
// });