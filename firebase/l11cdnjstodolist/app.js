import {getFirestore,collection,addDoc,getDocs,onSnapshot,updateDoc,deleteDoc,doc} from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

const db = getFirestore();
const dbRef = collection(db,'mytasks');

let getform = document.getElementById('form');
let gettextbox = document.getElementById('textbox');
let getul = document.getElementById('list-group');


getform.addEventListener('submit',function(e){
    // console.log("hi");
    addnew();
    e.preventDefault();
});

getul.addEventListener('click',getclickedli);

// Get Data 
let tasks = [];
const getdatas = async ()=>{
    try{
        // const docSnap = await getDocs(dbRef);
        // // console.log(docSnap);

        // docSnap.forEach((doc)=>{
        //     // console.log(doc.data());
        //     // console.log(doc.id);

        //     let gettasks = doc.data();
        //     gettasks.id = doc.id;
        //     // console.log(getdatas);

        //     tasks.push(gettasks);

        // });

        // console.log(tasks);

        await onSnapshot(dbRef,docSnap=>{
            // console.log(docSnap);
            docSnap.forEach(doc=>{
                // console.log(doc.data());
                // console.log(doc.id);
                let gettasks = doc.data();
                gettasks.id = doc.id;
                // console.log(gettasks);

                tasks.push(gettasks);
            });
            // console.log(tasks);
            

            showtaskstodom(tasks);

        });

    }catch(err){
        console.log("Get Data Error : " + err);
    }
}

getdatas();

const showtaskstodom = (tasks)=>{
    getul.innerHTML = "";
    tasks.forEach(task=>{
        let li = document.createElement('li');
        // newli.classList('list');
        if(task.done){
            li.classList.add('done');
        }
        li.appendChild(document.createTextNode(task.todo));
        li.id = task.id;

        li.innerHTML += `
            <div class="action">
                <button type="button" class="edit-btn">edit</button>
                <button type="button" class="delete-btn">delete</button>
            </div>
        `;

        // console.log(li);

        getul.appendChild(li);
    })
}

async function addnew(){
    const todotext = gettextbox.value;
    // console.log(todotext);

    if(gettextbox.getAttribute('task-id')){
        // Update Data 
        try{

        }catch(err){
            console.log("Update Data Error : " + err);
        }
    }else{
        // Create Data 
        try{    
            await addDoc(dbRef,{
                todo : todotext,
                done : false
            });

            gettextbox.value = "";
            gettextbox.focus();

        }catch(err){
            console.log("Create Data Error : " + err);
        }
    }

}

function getclickedli(e){
    // console.log(e.target);
    // console.log(e.target.closest('li'));
    // console.log(e.target.closest('li').getAttribute('id'));

    const getid = e.target.closest('li').getAttribute('id');
    if(e.target.className === 'edit-btn'){
        edittask(getid);
    }else if(e.target.className === 'delete-btn'){
        deletetask(getid);
    }else{
        donetask(getid);
    }
}

// console.log(tasks);
function gettaskbyid(id){
    return tasks.find(task=>{
        return task.id === id;
    })
}

function edittask(id){
    // console.log('edittask : ',id);
    const task = gettaskbyid(id);
    // console.log(task);
    // console.log(task.todo);
    gettextbox.value = task.todo;
    gettextbox.setAttribute('task-id',task.id);
}

function deletetask(id){
    // console.log('deletetask : ',id);
}

function donetask(id){
    // console.log('done : ',id);
}


// -----------------------------------------------------

// let form = document.querySelector('form');
//         let input = document.querySelector('.form-group input');
//         let getul = document.querySelector(".list-group");

//         form.addEventListener('submit',function(e){
//             e.preventDefault();
//             addnew();
//         });

//         function addnew(todo){
//             let todonew = input.value;
//             console.log(todonew);

//             if(todo){
//                 todonew = todo.text;
//             }

//             if(todonew){
//                 let newli = document.createElement('li');

//                 let span = document.createElement('span');
//                 newli.className = "list-item";
//                 span.className = "span";
//                 newli.appendChild(span);
//                 newli.appendChild(document.createTextNode(todonew));
                
//                 getul.appendChild(newli);
//                 input.value = "";
//                 updatelocalstorage()

//                 newli.addEventListener('click',function(e){
//                     console.log(e.target);
//                     if(e.target.classList.contains('span')){
//                         newli.remove();
//                     }
//                     updatelocalstorage()
//                 });
                
//             }
//         }

//         function updatelocalstorage(){
//             let todo = [];
//             let alllists = document.querySelectorAll('li');
//             alllists.forEach(function(allist){
//                 todo.push({
//                     text : allist.textContent
//                 });
//             });
//             localStorage.setItem('todos',JSON.stringify(todo));
//         }


//         let getlsstorages = JSON.parse(localStorage.getItem('todos'));
//         if(getlsstorages){
//             getlsstorages.forEach(function(getlsstorage){
//                 addnew(getlsstorage);
//             })
//         }


// https://firebase.google.com/ > Docs > Overview > firebase fundamentals > web icon > avalible libraries documentation > click > Available Firebase JS SDKs (from the CDN) > cloud firestore
 
