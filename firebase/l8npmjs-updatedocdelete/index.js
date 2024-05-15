// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,updateDoc,doc,deleteField} from "firebase/firestore";
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
const db = getFirestore(app); // initialize
// console.log(db);

// updateDoc(doc(db,"products","myid1001"),{
//   name : 'redbull'
// });

// const dbRef = doc(db,"products","myid1001"); 

// updateDoc(dbRef,{
//   unit : deleteField()
// });

updateDoc(doc(db,"products","myid1001"),{
  name : 'redbull'
});

const dbRef = doc(db,"products","myid1001"); 

updateDoc(dbRef,{
  type : deleteField()
}).then(()=>{
  console.log("Delete Successfully");
}).catch(error=>{
  console.log(error);
});

