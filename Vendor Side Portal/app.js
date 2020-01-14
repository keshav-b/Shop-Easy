
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

let formMessage1 = firebase.database().ref('semmMaa');
var exisiting = 0;
//listen for submit event//(1)
document
.getElementById('registrationform')
.addEventListener('submit', formSubmit);
//Submit form(1.2)
var globalVariable={
       jinukku: 'sachin'
    };

function formSubmit(e) {
e.preventDefault();
// Get Values from the DOM

let name = document.querySelector('#name').value;
let link = document.querySelector('#link').value;
var flag=1;
//alert(mobile);
var a;
var b;

var n1,n2,n3,n4;
var query = firebase.database().ref("semmMaa").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();

      //alert(key);
      if(key == name){flag=0;

        n1=childData['name'];
        n2=childData['offerlink'];
        n3=name;
        n4=link;

      
      }



  });
    //correct flag position
 //alert(flag);
 if(flag==0){
 	
 	exisiting=1;
 	alert(link);
  sendMessage1(n1, n2, n3,n4);
  alert("updated successfully!!!");
  


 	//alert(n3);
 	

 	
 }

else{
	exisiting=0;

  alert("Cannpt update the link pls sign-UP");

	//send message values


}

});


 }



 function sendMessage1(name, offerlink,key,offertext) {


let sss1 = key;

let newFormMessage = formMessage1.child(sss1);
newFormMessage.set({
name: name,
offerlink: offerlink,
offertext: offertext, 
  

});

}





	


