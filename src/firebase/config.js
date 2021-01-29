import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAXLNhBq2r8cqP2eSHK_vWSYX_iRMVv7u8",
    authDomain: "firegram-react-d513f.firebaseapp.com",
    projectId: "firegram-react-d513f",
    storageBucket: "firegram-react-d513f.appspot.com",
    messagingSenderId: "34282228159",
    appId: "1:34282228159:web:a132c89e76fd6a0fa5b90a",
    measurementId: "G-GSJE0F51EG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };