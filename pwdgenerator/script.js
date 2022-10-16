let password = document.getElementById('password') 
button = document.getElementById('generate');

function generate(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = "";
    for (var i=0;i<=8;i++){
        var randomno = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomno, randomno+1)
    }
    console.log(password);
    document.getElementById('password').value = password;
}

document.getElementById('password').value= password;

button.addEventListener("click", () => {
    generate();
});