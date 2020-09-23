window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDAtNk8VNMI3WMLHdJK5_R70ZHwhFkyqSg",
        authDomain: "todoapp-576e8.firebaseapp.com",
        databaseURL: "https://todoapp-576e8.firebaseio.com",
        projectId: "todoapp-576e8",
        storageBucket: "todoapp-576e8.appspot.com",
        messagingSenderId: "1022767435245",
        appId: "1:1022767435245:web:249f2eb891b87c5a83ebe4"
    };
    firebase.initializeApp(firebaseConfig);
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         model.currentUser = {
    //             displayName: user.displayName,
    //             email: user.email
    //         }
    //         if (user.emailVerified) {
    //             view.setActiveScreen('appPage')
    //         } else {
    //             alert('Please')
    //             firebase.auth().signOut()
    //             view.setActiveScreen('registerPage')
    //         }
    //     } else {
            view.setActiveScreen('registerPage')
    //     }
    // })
}
