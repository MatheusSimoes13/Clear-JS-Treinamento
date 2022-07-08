// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebase = require('firebase');
require('firebase/firestore');
export class Firebase {

    constructor(){

        this.init();

    }

    init(){

        const firebaseConfig = {
            apiKey: "AIzaSyD_rm8MFybRLufdIJxUcfjaQ17F9BHSXlg",
            authDomain: "whatsapp-clone-56169.firebaseapp.com",
            projectId: "whatsapp-clone-56169",
            storageBucket: "gs://whatsapp-clone-56169.appspot.com",
            messagingSenderId: "409054111313",
            appId: "1:409054111313:web:b607cd94a5f6d4252afa70",
            measurementId: "G-SDVX1SKWN4"
            };

        if(!window._initializedFirebase){

            firebase.initializeApp(firebaseConfig);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            })

            window._initializedFirebase = true;
        }

    }

    static db(){

        return firebase.firestore();
    }

    static hd(){

        return firebase.storage();
    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result =>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            })
            .catch(err=>{
                f(err)
            });

        });

    }

}



