// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc,collection } from "firebase/firestore";
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

// setDoc(doc(db,'products','myid1001'),{
//   name : 'redbull',
//   type : 'food',
//   price : 1000
// });

// setDoc(doc(db,'products','myid1002'),{
//   name : 'redbull',
//   type : 'food',
//   price : 1000
// }).then(()=>{
//   console.log("Create Successfully!");
// }).catch(error=>{
//   console.log(error);
// });


setDoc(doc(collection(db,'products')),{
  name : 'redbull',
  type : 'food',
  price : 1000
}).then(()=>{
  console.log("Create Successfully!");
}).catch(error=>{
  console.log(error);
});

// 1SD 