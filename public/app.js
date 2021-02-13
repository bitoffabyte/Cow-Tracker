document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    setInterval(isOut,1000)
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

function isOut(){
    const boundary = {min_lat:0, max_lat:10, min_long:0, max_long:10}
    const db = firebase.firestore()
    const coord = db.collection("coordinates").doc("JAozRMxXH8p0SA3IecdN")
    coord.get()
    .then(doc => {
        const data = doc.data();
        document.write(data.cow_where.N_ + `<br>` + data.cow_where.x_)
        if((boundary.min_lat<=data.cow_where.N_ && data.cow_where.N_<=boundary.max_lat) && (boundary.min_long<=data.cow_where.x_ && data.cow_where.x_<=boundary.max_long)){
            document.write('<br>YOUR COW IS SAFE')
            return false
        }
        else{
            document.write("<br>YOUR COW IS OUT")
            return true
        }
    })
}