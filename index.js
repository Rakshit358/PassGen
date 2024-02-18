
function generatePass(){
    const length = 16;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let res = "";
    for(let i=0;i<length;i++){
        res += charset.charAt(Math.floor(Math.random() * charset.length));
    }    
    return res;
}


document.getElementById('generate').addEventListener('click',function(){
  let password = generatePass();
  console.log(password);
  let inputBox = document.getElementById('input-box');
    inputBox.value = password;
})

document.getElementById('copy').addEventListener('click',function(){
    let inputElement = document.getElementById("input-box");
    inputElement.select();
    document.execCommand('copy');
    inputElement.blur();
    let popUp = document.getElementById('popup');
    popUp.style.display = "block"; 

    setTimeout(function(){
        popUp.style.display = "none";
    },2000);
});