function check() {
    let location = document.getElementById("location").value;
    let train = document.getElementById("train").value;
    let ageAdult = Number(document.getElementById("age-adult").value)*20;
    let ageKids = Number(document.getElementById("age-kids").value)*10;
    let ageSr = Number(document.getElementById("age-sr").value)*15;
    let locationprice = 0;
    let trainprice = 0;

    switch (location) {
        case "Mumbai-to-Delhi":
            locationprice = 10;
            break;
        case "Delhi-to-Rajesthan":
            locationprice = 20;
            break;
        case "Kerla-to-Banglore":
            locationprice = 30;
            break;
        case "Punjab-to-Haryana":
            locationprice = 40;
            break;
        case "Surat-to-Goa":
            locationprice = 50;
            break;
        case "Goa-to-Mumbai":
            locationprice = 60;
            break;
        case "Delhi-to-Bihar":
            locationprice = 70;
            break;
        default:
            locationprice = 0;
            break;
    }



    switch (train) {
        case "Duranto Express":
            trainprice = 10;
            break;
        case "Rajdhani Express":
            trainprice = 20;
            break;
        case "Mata Vasho":
            trainprice = 30;
            break;
        case "Vashali":
            trainprice = 40;
            break;
        case "Goa Express":
            trainprice = 50;
            break;
        case "Swaraj Express":
            trainprice = 60;
            break;
        default:
            trainprice = 0;
            break;
    }

    total="Total Price "+(locationprice+trainprice+ageAdult+ageKids+ageSr)+" Rs";
    document.getElementById("total").innerText=total;
    // alert(total)
    // alert(location)
    // alert(train)
    // alert(ageAdult)
    // alert(ageKids)
    // alert(ageSr)
    // alert(trainprice)
}