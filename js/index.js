const form = document.forms["form"];


function validateForm(){
    let x = form["cardholder_name"].value;
    console.log(x);
    if(x == "") {
    document.getElementById("nameMsg").innerHTML = "Cant' be blank"
    return false;
    }
};





