
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBx3Q6rvjkOtAJba8k-Ohr9AgqKvtSOK60",
    authDomain: "sk-r-sir.firebaseapp.com",
    databaseURL: "https://sk-r-sir.firebaseio.com",
    projectId: "sk-r-sir",
    storageBucket: "sk-r-sir.appspot.com",
    messagingSenderId: "1065489949858",
    appId: "1:1065489949858:web:03fb61b9924904788da3fb",
    measurementId: "G-QYS594ZKEB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("LogIn Sucessfully");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	

