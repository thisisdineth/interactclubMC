// Firebase configuration (replace with your Firebase project details)
const firebaseConfig = {
    apiKey: "AIzaSyBbTsqLQzR3XiqnOuf2lp0EgUfffNJz9YM",
    authDomain: "videoconnect-a3dfc.firebaseapp.com",
    databaseURL: "https://videoconnect-a3dfc-default-rtdb.firebaseio.com",
    projectId: "videoconnect-a3dfc",
    storageBucket: "videoconnect-a3dfc.appspot.com",
    messagingSenderId: "354750925913",
    appId: "1:354750925913:web:4d8ea3b1eae818165b3548"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;
  
    if (validateForm(name, email, contact, message)) {
      saveContactForm(name, email, contact, message);
      showSuccessMessage();
      document.getElementById('contactForm').reset();
    }
  }
  
  function validateForm(name, email, contact, message) {
    const contactPattern = /^\d{10}$/;
    if (message.length < 3 || message.length > 2000) {
      alert("Message must be between 3 and 2000 characters.");
      return false;
    }
    if (!contactPattern.test(contact)) {
      alert("Contact number must be exactly 10 digits.");
      return false;
    }
    return true;
  }
  
  function saveContactForm(name, email, contact, message) {
    const newContactRef = db.ref('contacts').push();
    newContactRef.set({
      name: name,
      email: email,
      contact: contact,
      message: message
    });
  }
  
  function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }
  