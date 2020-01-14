
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
//listen for submit event//(1)
document
.getElementById('registrationform')
.addEventListener('submit', formSubmit);
//Submit form(1.2)



function formSubmit(e) {
e.preventDefault();
// Get Values from the DOM

//let name = document.querySelector('#name').value;
//let email = document.querySelector('#email').value;
//var mobile = document.querySelector('#mobile').value;
//let manner = document.querySelector('#email').value;
var item1 = document.querySelector('#item1').value;
var item2 = document.querySelector('#item2').value;
var item3 = document.querySelector('#item3').value;
var promo = document.querySelector('#promocode').value;

var n5 = 0;

if(item1 == "goods"){
	n5 += 1000;
}
if(item2 == "electronics"){
	n5 += 2000;
}

if(item3 == "food"){
	n5 += 3000;
}




let randcode = 0;
var flag=1;
//alert(mobile);
var a;
var b;

var n1,n2,n3,n4;
var query = firebase.database().ref("register").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();

      //alert(key);
      if(childData['code'] == promo){flag=0;

      	n1=childData['name'];
      	n2=childData['email'];
      	n3=key;
      	n4=childData['Member'];
       
      }



  });
    //correct flag position
 //alert(flag);
 if(flag==0){
 	alert(n1);

 	if(n4=="new"){
 		n5 = n5 / 2;
 	}

 	if(n4=="old"){
 		n5 = n5 / 1.3333;
 	}


 	document.getElementById('name').innerHTML="Name:"+n1;
 	document.getElementById('email').innerHTML="Email:"+n2;
 	document.getElementById('mobile').innerHTML="Mobile:"+n3;
 	document.getElementById('member').innerHTML="Exisiting Member:"+n4;

 	document.getElementById('member').innerHTML="Price:"+n5;

 	//document.querySelector('#name').value=n1;
	//document.querySelector('email').value=n2;
	//document.querySelector('#mobile').value=n3;
	//document.querySelector('#member').value=n4;
 	exisiting=1;
 	//alert("Mobile Number Already exisiting");
 	//alert(n3);
 	//sendMessage1(n1, n2, n3,n4);
 	 	
//localStorage.setItem('mobile',mobile);
//window.location.href = "ad1.html";

 }

else{
	exisiting=0;
	//send message values
alert("No offer code generated for you:(");

}

});
 




}
	


//Send Message to Firebase(4)
function sendMessage1(name, email, mobile,Member) {


let sss1 = mobile;
let n="old";
let newFormMessage = formMessage1.child(sss1);
newFormMessage.set({
name: name,
email: email,
Member: n	
	

});

}


function sendMessage(name, email, mobile) {
let sss = mobile;	
let n="new";
let newFormMessage = formMessage.child(sss);
newFormMessage.set({
name: name,
email: email,
Member: n	
	

});

}