document.getElementById("name").innerHTML = localStorage.getItem("name");
document.getElementById("card_number").innerHTML = localStorage.getItem("number");
document.getElementById("month").innerHTML = localStorage.getItem("month");
document.getElementById("year").innerHTML = localStorage.getItem("year");
document.getElementById("cvc").innerHTML = localStorage.getItem("cardcvc");

const form = document.forms["form"];

function isNumber(array, id) {
    for (let k = 0; k < array.length; k++) {
        if (!(Number.isInteger(Number(array[k])))) {
            document.getElementById(id).innerHTML = "Wrong format numbers only";
            return false;

        }

    }
    document.getElementById(id).innerHTML = "";
    return true;
}

function validateName() {
    let x = form["cardholder_name"].value.split(" ");
    if (x == "") {
        document.getElementById("nameMsg").innerHTML = "Cant' be blank";
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if (!x[i].toString().match(/^[A-Za-z]+$/)) {
            document.getElementById("nameMsg").innerHTML = "Wrong format letters only";
            return false;
        }
    }
    document.getElementById("nameMsg").innerHTML = "";
    return true;


}

function validateNumber() {
    let x = form["card_number"].value.split(" ");
    if (x == "") {
        document.getElementById("numberMsg").innerHTML = "Cant' be blank";
        return false;

    }
    for (let i = 0; i < x.length; i++) {
        let j = x[i];
        if (j.length == 4) {
            return isNumber(j, "numberMsg");
        } else {
            document.getElementById("numberMsg").innerHTML = "Wrong format must be 16 digits divided in 4 part each of them 4 digits long";
            return false;
        }



    }

}

function validateDateCvc(x, id) {

    if (x == "") {
        document.getElementById(id).innerHTML = "Can't be black";
        return false;
    }
    if (id == "monthMsg" || id == "yearMsg") {
        if (Number.isInteger(Number(x))) {
            if (x.length < 2) {
                document.getElementById(id).innerHTML = "Field length must be 2";
                return false
            }
        }
    }
    if (id == "cvcMsg") {
        if (Number.isInteger(Number(x))) {
            if (x.length < 3) {
                document.getElementById(id).innerHTML = "Field length must be 3";
                return false
            }
        }
    }
    if (id == "monthMsg") {

        if (Number.isInteger(Number(x))) {
            if (x <= 12) {
                console.log(x);
                return isNumber(x, id);
            }
            document.getElementById(id).innerHTML = "Month must be less then or equal to 12";
            return false;
        } else {
            return isNumber(x, id);
        }


    } else {
        return isNumber(x, id);
    }


}

function validateForm() {
    const validate_name = validateName();
    const validate_number = validateNumber();
    const validate_month = validateDateCvc(form["exp_month"].value, "monthMsg");
    const validate_year = validateDateCvc(form["exp_year"].value, "yearMsg");
    const validate_cvc = validateDateCvc(form["cvc"].value, "cvcMsg");
    if (!validate_name || !validate_number || !validate_month || !validate_year || !validate_cvc) {
        return false;
    }
    localStorage.setItem("name", form["cardholder_name"].value);
    localStorage.setItem("number", form["card_number"].value);
    localStorage.setItem("month", form["exp_month"].value.toString());
    localStorage.setItem("year", form["exp_year"].value.toString());
    localStorage.setItem("cardcvc", form["cvc"].value.toString());






};





