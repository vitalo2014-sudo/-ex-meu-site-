// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLXCNfKrPwytOUNWcHJEbWysirp-nDE-s",
    authDomain: "ayuno-mtebolico-360.firebaseapp.com",
    projectId: "ayuno-mtebolico-360",
    storageBucket: "ayuno-mtebolico-360.firebasestorage.app",
    messagingSenderId: "996224388716",
    appId: "1:996224388716:web:3887bf7dad3f88cdd49249",
    measurementId: "G-59ZH5L0W5J"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore(app);

async function trackEvent(eventName, data = {}) {
    try {
        await addDoc(collection(db, "events"), {
            event: eventName,
            timestamp: serverTimestamp(),
            url: window.location.href,
            ...data
        });
        console.log("Evento salvo:", eventName);
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }
}

window.trackEvent = trackEvent;

// Evento inicial
trackEvent("quiz_start");