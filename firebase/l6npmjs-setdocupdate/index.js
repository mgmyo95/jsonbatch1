// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc} from "firebase/firestore";
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
// console.log(app);

const db = getFirestore(app); // initialize
// console.log(db);

// bofore merge
// setDoc(doc(db,'products','myid1001'),{
//   name : 'sponsor',
//   type : 'food',
//   price : 700
// });

// setDoc(doc(db,'products','xeLK4YU19OOX8rC0z2hi'),{
//   name : 'deedo',
//   type : 'food',
//   price : 500
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// });

// setDoc(doc(db,'products','myid1002'),{
//   name : 'speed',
//   type : 'food',
//   price : 500,
//   unit : 'bot'
// }).catch(error=>{
//   console.log(error);
// });

// setDoc(doc(db,'products','myid1002'),{
   
// }).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// });

// after merge 
// setDoc(doc(db,'products','myid1002'),{
//   name : 'speed',
//   type : 'food',
//   price : 500,
//   unit : 'bot'
// }).catch(error=>{
//   console.log(error);
// });


// merge:true = increase new update mhr delete 
// setDoc(doc(db,'products','myid1002'),{
  
// },{merge:true}).then(()=>{
//   console.log("Update successfully");
// }).catch(error=>{
//   console.log(error);
// });

// => before merge 
// setDoc(doc(db,'products','myid1002'),{
//   name : 'deedo'
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });

// setDoc(doc(db,'products','myid1002'),{
//   name : 'speed',
//   type : 'food',
//   price : 500,
//   unit : 'bot'
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });

// => After merge 
// setDoc(doc(db,'products','myid1002'),{
//   name : 'deedo'
// },{merge:true}).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// => before merge 
// setDoc(doc(db,'products','myid1002'),{
//   stock : 200,
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });

// After merge
setDoc(doc(db,'products','myid1002'),{
  'promo' : '10%'
},{merge:true}).then(()=>{
    console.log("Update Successfully");
}).catch(error=>{
    console.log(error);
});