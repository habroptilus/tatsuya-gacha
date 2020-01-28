function RollGacha() {
    elements = document.getElementsByClassName("slot_item");
    elements = Array.from(elements);
    //elements.forEach(element => element.setAttribute("src", '/static/images/test.gif'));
    elements.forEach(element => element.setAttribute("src", "/static/images/" + element.id + ".gif"))
}
