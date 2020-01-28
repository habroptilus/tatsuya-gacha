function RollGacha() {
    elements = document.getElementsByClassName("slot_item");
    elements = Array.from(elements);
    elements.forEach(element => element.setAttribute("src", "/static/images/" + element.id + ".gif"))
    //setTimeout(FixGacha(), 100000000)
}


function FixGacha() {
    for (var i = 0; i < 3; i++) {
        rand_id = String(Math.floor(Math.random() * 4) + 1);
        target = document.getElementById("slot" + String(i + 1))
        if (target.src.slice(-4) == ".gif") {
            target.setAttribute("src", "/static/images/tatsuya_ex" + rand_id + ".jpg")
            break;
        }
    }
}