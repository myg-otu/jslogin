var input = 5;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Kullanicii" && password === "kullanici321") {
        alert("Login successfully");
        window.location = "loginsuccess.html";
        return false;
    }
    
     else {
        input--;
        alert("Kalan deneme hakkınız: " + input);

        if (input === 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementsByTagName("button")[0].disabled = true;
            return false;
        }
    }
}
