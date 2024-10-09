function taxpay(){
    let package = parseInt(window.prompt("Enter your package"));

    if(package<300000){
        window.alert("Package is less than 3 lakh so you dont want to pay");
    }
    else if(package >=300000 && package<750000){
        let tax = (package/100)*10;
        window.alert("You have to pay" + tax + "on your package");
    }
    else if(package>=750000){
        let tax = (package/100)*20;
        window.alert("You have to pay" + tax + "on your package");
    }
    else{
        window.alert("invalid input");
    }
}

taxpay();