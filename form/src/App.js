
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHGxOGuwJFPvc8w92GFFXcE-4yExlcBQ",
  authDomain: "challenge-de170.firebaseapp.com",
  databaseURL: "https://challenge-de170-default-rtdb.firebaseio.com",
  projectId: "challenge-de170",
  storageBucket: "challenge-de170.appspot.com",
  messagingSenderId: "763308306886",
  appId: "1:763308306886:web:b1784b4cfe00ca08f782c7",
  measurementId: "G-1P6208L6V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <h2>Holis</h2>
    </div>
  );
}

export default App;
