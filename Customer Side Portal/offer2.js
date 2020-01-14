
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
		let formMessage = firebase.database().ref('register');

		let formMessage1 = firebase.database().ref('register');
		var exisiting = 0;
		var n1,n2,n3,n4,n5;
		var query = firebase.database().ref("register").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();

     // alert(key);
      if(key == code){flag=0;

      	n1=childData['name'];
      	n2=childData['email'];
      	n3=key;
      	n4=childData['Member'];
       	n5=n3%10000;
      	code = Math.floor((Math.random() *n5 ) + 1);
      	n5 =code;
      
      }



  });
    //correct flag position
 //alert(flag);


	exisiting=0;

	alert("Your Generated code is:"+n5);
	//send message values
sendMessage(n1, n2, n3,n5);
//Show Alert Message(5)
document.querySelector('.alert').style.display = 'block';
//Hide Alert Message After Seven Seconds(6)
setTimeout(function() {
document.querySelector('.alert').style.display = 'none';
}, 7000);
//Form Reset After Submission(7)
document.getElementById('registrationform').reset();
//localStorage.setItem('mobile',mobile);


	//window.location.href = "ad2.html";



});
 





	


//Send Message to Firebase(4)
function sendMessage(name, email, mobile,code) {
let sss = mobile;	
let n="new";
let newFormMessage = formMessage.child(sss);
newFormMessage.set({
name: name,
email: email,
Member: n,
code : code	

});

}

