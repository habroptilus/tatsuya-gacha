function RollGacha() {
    ResetReflection()
    PlaySlotSound()
    elements = document.getElementsByClassName("slot_item");
    elements = Array.from(elements);
    elements.forEach(element => element.setAttribute("src", "static/images/" + element.id + ".gif"))
}


function FixGacha() {
    const item_num = 5
    for (var i = 0; i < 3; i++) {
        rand_id = String(Math.floor(Math.random() * item_num) + 1);
        target = document.getElementById("slot" + String(i + 1))
        if (target.src.slice(-4) == ".gif") {
            target.setAttribute("src", "static/images/tatsuya_ex" + rand_id + ".jpg")
            if (i == 2) {
                StopSound()
            }
            PlayFixSound()
            CheckGacha()
            break;
        }
    }
}

function CheckGacha() {
    var id_arr = [];
    for (var i = 0; i < 3; i++) {
        target = document.getElementById("slot" + String(i + 1))
        if (target.src.slice(-4) == ".jpg") {
            id_arr.push(target.src.charAt(target.src.length - 5));
        } else {
            return;
        }
    }
    if (id_arr.every(v => v === id_arr[0])) {
        SetReflection()
        PlayTatsuyaScream()
    }
}

function SetReflection() {
    target = document.getElementById("slot")
    target.setAttribute("class", "center reflection")
}

function ResetReflection() {
    target = document.getElementById("slot")
    target.setAttribute("class", "center")
}

function PlayTatsuyaScream() {
    audioElem = new Audio();
    audioElem.src = "static/sounds/scream_tatsuya.mp3";
    audioElem.play();
}


function PlaySlotSound() {
    audioElem_slot = new Audio();
    audioElem_slot.loop = true;
    audioElem_slot.src = "static/sounds/slot.mp3";
    audioElem_slot.play();
}

function PlayFixSound() {
    audioElem = new Audio();
    audioElem.src = "static/sounds/fix.mp3";
    audioElem.play();
}

function StopSound() {
    audioElem_slot.pause();
}