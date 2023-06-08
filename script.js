"use stirct"

function generateRandomPassword() {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    let length = document.getElementById("inp").value
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    console.log(password);
    document.getElementById("passwordDisplay").innerHTML = password

  }
  
  

  