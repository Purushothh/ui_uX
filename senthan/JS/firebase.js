var firebaseConfig = {
    apiKey: "AIzaSyB0UD-KS7JvB-ewrfC36O-CurkPzgW7zJU",
    authDomain: "chatapp-50597.firebaseapp.com",
    projectId: "chatapp-50597",
    storageBucket: "chatapp-50597.appspot.com",
    messagingSenderId: "1081129306222",
    appId: "1:1081129306222:web:381d1ea4e01776d787fe7f",
    measurementId: "G-FP47BYYHT1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var ref = firebase.database().ref('users')
  
  ref.once('value', function(snapshot){
    var data = snapshot.val()
   // console.log(data)
 
    if (Object.keys(data).includes(demoUserId)){
            if(data[demoUserId]['favourites'] != undefined || data[demoUserId]['favourites'].length != 0){
                console.log("STARTING TO LOAD FAVOURITES LIST")
                favVendorList = data[demoUserId]['favourites'];
                allFavVendorList = favVendorList;
                loadFavVendorList();
            }else{
                console.log("USER HAS NOT FAVOURITED ANYTHING")
                
            }
    }else{
        console.error("USER NOT FOUND")
    }
},
function (error) {
    console.log("Error: " + error.code);
});