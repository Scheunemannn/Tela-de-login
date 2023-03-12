function clicado() {
    let emaio = document.getElementById('emaio').value
    // let senha = document.getElementById('senha').value
    localStorage.setItem('emaio', emaio)
    let email = localStorage.getItem('emaio')
    // console.log(senhaa)
    console.log(email)
    


}



