document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
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