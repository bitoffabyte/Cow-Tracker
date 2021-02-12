document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    const db = firebase.firestore()
    const coord = db.collection("coordinates").doc("JAozRMxXH8p0SA3IecdN")
    coord.get()
        .then(doc => {
            const data = doc.data();
            document.write(data.cow_where.N_ + `<br>` + data.cow_where.x_)
            console.log(data)
        })
})

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user
            document.write(`hello ${user.displayName}`)
        })
        .catch(console.log)
}