//Shout
    function shout (string){ //NAMEOFSHOUT
        return string.toUpperCase(); //GIVES STRING ACTION 
    }

//Whisper 
    function whisper (string){  //GIVES NAME
        return string.toLowerCase(); //GIVES ACTION
    }

//logShout 
    function logShout (string){ //GIVES NAME
        console.log(string.toUpperCase()); //ADDS INPUT
    }

//logwhisper
    function logWhisper (string){
        console.log(string.toLowerCase())
    }


function sayHiToHeadphonedRoommate (string) {
    var cantHearYou = "I can\'t hear you!";
    var canHearYou = "YES INDEED!";
    var loveto = "I would love to!";

        if (string.toLowerCase(string)=== string){
            return cantHearYou
        }
            else if (string.toUpperCase(string)===string){
                return canHearYou
            }
                else if ("Let's have dinner together!" ===string){ 
                    return loveto

                }
                }