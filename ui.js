let $mainAvatar = $("#changeMain")
let $realAvatar = $(".theRealAvatar > img")
let $realAvatarLeftArm = $("#userLeftArm")
let $realAvatarUserTorso = $("#userTorso")
let $realAvatarRightArm = $("#userRightArm")
let $realAvatarUserHead = $("#userHead")
let $realAvatarLegs = $("#userLegs")

$(document).on("click", ".body-icon > img", function(e){
    let bodyPart = $(this).attr("src")
    whichPart(bodyPart)
});
// $(document).on("click", "")
// function hideElements() {
//     const elementsArr = [
     
//     ];
//     elementsArr.forEach($elem => $elem.hide());
//   }
//checks which part of the body it is by checking if includes folder for body part
function whichPart(bodyPart){
    /** 
     * checks if has folder body / arm-left / arm-right
     */
    if(bodyPart.includes('/body/')){
        changeTorso(bodyPart)
    }
    if(bodyPart.includes('/arm-left/')){
        changeLeftArm(bodyPart)
    }
    if(bodyPart.includes('/arm-right/')){
        changeRightArm(bodyPart)
    }
    if(bodyPart.includes('/head/')){
        changeHead(bodyPart)
    }
    if(bodyPart.includes('/legs/')){
        changeLegs(bodyPart)
    }
   
}
function changeTorso(bodyPart){
    newBody = bodyPart.split("/body/");
    $realAvatarUserTorso.attr("src", `images/avatar/torso/${newBody[1]}`)
}
function changeLeftArm(bodyPart){
    newBody = bodyPart.split("/arm-left/");
    $realAvatarLeftArm.attr("src", `images/avatar/arm-left/${newBody[1]}`)
}
function changeRightArm(bodyPart){
    newBody = bodyPart.split("/arm-right/");
    $realAvatarRightArm.attr("src", `images/avatar/arm-right/${newBody[1]}`)
}

function changeHead(bodyPart){
    newBody = bodyPart.split("/head/");
    $realAvatarUserHead.attr("src", `images/avatar/head/${newBody[1]}`)
}
function changeLegs(bodyPart){
    newBody = bodyPart.split("/legs/");
    $realAvatarLegs.attr("src", `images/avatar/legs/${newBody[1]}`)
}
