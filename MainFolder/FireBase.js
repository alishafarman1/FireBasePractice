import firebase from "firebase"

export default ()=>{
    var config = {
        apiKey: "AIzaSyCy2S5ulEnyOUK42pS4xg7phfp4rbkmdUE",
        authDomain: "alishaf-cd782.firebaseapp.com",
        databaseURL: "https://alishaf-cd782.firebaseio.com",
        projectId: "alishaf-cd782",
        storageBucket: "alishaf-cd782.appspot.com",
        messagingSenderId: "734238006940"
      };
     return firebase.initializeApp(config);
    
} 


