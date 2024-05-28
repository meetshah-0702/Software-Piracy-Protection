const users = {
    "rk77@gmail.com": {
        email: "rk77@gmail.com",
        password: "abhinav@123",
        productId: "hello123"
    },
    "abhi@gmail.comm": {
        email: "abhi@gmail.com",
        password: "abhi",
        productId: "hello123"
    },
    "amit@gmail.comm": {
        email: "amit@gmai.com",
        password: "suraj@123",
        productId: "amit23"
    },
}

// to check whether the product key is generated or not
let isGenerated = false;
let storedKey ;

// to get random integer value 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// to generate the product key 
function generateProductKey(id) {
    if (isGenerated) {
        copyProductKey(id);
        return;
    }
    document.getElementById(id).innerText = "Copy";
    isGenerated = true;
    var tokens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        chars = 5,
        segments = 4,
        keyString = "";

    for (var i = 0; i < segments; i++) {
        var segment = "";

        for (var j = 0; j < chars; j++) {
            var k = getRandomInt(0, 35);
            segment += tokens[k];
        }

        keyString += segment;

        if (i < (segments - 1)) {
            keyString += "-";
        }
    }

    let keyContainer = document.getElementById("product-key");
    keyContainer.innerText = keyString;
    // window.location.href = "./productKeyVerification.html?key=" + keyString;
}

function copyProductKey(id)
{
    document.getElementById(id).innerText = "Copied!";
    let text = document.getElementById("product-key").innerText;
    copyText(text);
}

const copyText = (text) => {
    let inputElement2 = document.createElement('textarea');
    inputElement2.appendChild(document.createTextNode(text));
    document.body.appendChild(inputElement2);
    inputElement2.select();
    document.execCommand('copy');
    inputElement2.parentNode.removeChild(inputElement2);
}

function redirectToVerification() {
    let productKey = document.getElementById("product-key").innerText;
    window.localStorage.setItem("productKey", productKey);
    window.location.href = "./productKeyVerification.html";
}


function saveUserData() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // ------------
    if(users[email] === undefined) {
        console.log("new user");
    } else {
        
    }
    // -------------
    cancel();
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if(password.length > 0 && password === confirmPassword){
        document.getElementById("save-btn").disabled = false;
    } else {
        document.getElementById("save-btn").disabled = true;
    }
}

function cancel(){
    clearTimeout(submitTimer);
    console.log('Submit Canceled');
  }

  function verifyProductKey() {
    let enteredKey = document.getElementById("product-key-input").value;
    let storedKey = window.localStorage.getItem("productKey");
    console.log(storedKey);

    if (enteredKey === storedKey) {
        // Redirect to the special feature page
        window.location.href = './special_feature.html';
    } else {
        // Product key is invalid
        document.getElementById("message").innerText = "Invalid Product Key. Please try again.";
    }
}

