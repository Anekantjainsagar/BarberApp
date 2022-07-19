import express  from 'express';
const app = express();
import bodyParser from 'body-parser';
import {initializeApp} from 'firebase/app'
import {getDatabase,ref,set,onValue} from 'firebase/database'

//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3UVhef1lM_WJUIPN__Aj999tLZt-Y-TM",
    authDomain: "barber-10374.firebaseapp.com",
    databaseURL: "https://barber-10374-default-rtdb.firebaseio.com",
    projectId: "barber-10374",
    storageBucket: "barber-10374.appspot.com",
    messagingSenderId: "408382414470",
    appId: "1:408382414470:web:e4338c1584347b6be6fb07",
    measurementId: "G-T0GK1GD7J7"
  };
let app1 = initializeApp(firebaseConfig)
let db = getDatabase(app1)

//Middlewares in node.js
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('html'));

//Routes post
app.post('/appointment.html',(req,res)=>{
    const {Name,Email,Mobile,Service,meetDate,Barber} = req.body
    set(ref(db,"Appointments/"+Date.now()),{Name,Email,Mobile,Service,meetDate,Barber})
})

app.post('/contact.html',(req,res)=>{
    const {name,email,message} = req.body
    set(ref(db,"Contacts/"+Date.now()),{name,email,message})
})

//Listen
app.listen(5000,()=>{
    console.log("Barber app is listening at localhost:5000");
})