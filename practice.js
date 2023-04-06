const firebaseConfig = {
     apiKey: "AIzaSyCV7IEGzqgapPCdk8DJEWblm0RZiliWqsI",
      authDomain: "whatssap-george-pig-22bac.firebaseapp.com",
       databaseURL: "https://whatssap-george-pig-22bac-default-rtdb.firebaseio.com",
        projectId: "whatssap-george-pig-22bac",
         storageBucket: "whatssap-george-pig-22bac.appspot.com",
          messagingSenderId: "622068429153",
           appId: "1:622068429153:web:4146eb81d9aac26c7d1520" 
        };
//ADICIONE SEUS LINKS FIREBASE
firebaseConfig.initializeApp(firebaseConfig);



function AddUser()
{
username = document.getelementByid("userName").value;
firebase.database().ref("/").child(userName).update({
purpose : "adding user"
});
}