
var config = {
 apiKey: 'AIzaSyC_DpdwD1L4vS1VU07_-0KISxfvLty_Nxw',
 authDomain: 'ramco-64435.firebaseapp.com',
 databaseURL: 'https://ramco-64435.firebaseio.com',
 projectId: 'ramco-64435',
 storageBucket: 'ramco-64435.appspot.com',
 messagingSenderId: '1036104454414'
};


firebase.initializeApp(config);
//Reference for form collection(3)
let formMessage = firebase.database().ref('semmMaa');

//listen for submit event//(1)
document
.getElementById('registrationform')
.addEventListener('submit', formSubmit);
//Submit form(1.2)


function formSubmit(e) {
e.preventDefault();
// Get Values from the DOM

let name = document.querySelector('#name').value;

let offertext = document.querySelector('#offertext').value;

let offerlink = document.querySelector('#offerlink').value;

	
//send message values
sendMessage(name, offerlink, offertext);
//Show Alert Message(5)
document.querySelector('.alert').style.display = 'block';
//Hide Alert Message After Seven Seconds(6)
setTimeout(function() {
document.querySelector('.alert').style.display = 'none';
}, 7000);
//Form Reset After Submission(7)
document.getElementById('registrationform').reset();
}


//Send Message to Firebase(4)
function sendMessage(name, offerlink, offertext) {
    var vs =name
let newFormMessage = formMessage.child(vs);
//let newFormMessage = formMessage.child('semmMaa').setValue(mobile);
newFormMessage.set({
name: name,
offerlink : offerlink,
offertext : offertext,	
	

});
}