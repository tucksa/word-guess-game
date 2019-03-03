var Words = ["ocean", "coral", "shellfish", "offshore", "gulf", "fishing", "coastal", "maritime", "glacier", "crustacean", "oceanography", "sailing", "sand", "whale", "beach", "swim", "tsunami",
    "seashore", "island", "harbor", "submarine", "shoreline", "lobster", "fisherman", "seafaring", "saltwater", "typhoon", "oceanside", "seahorse", "waves", "dock", "trunks", "kelp", "lifeguard",
    "shark", "octopus", "coastline", "crab", "harbour", "tidal", "tropical", "sailor", "squid", "dophin", "barnacle", "sponge", "driftwood", "harpoon", "kite", "snorkle", "scuba", "boat", "clam",
    "tuna", "flounder", "salmon", "cruise", "snorkel", "yacht", "windsurfing", "surfboard", "shipyard", "nautical", "tide", "lobster", "octopus", "prawn", "shrimp", "oyster", "anemone", "narwhal",
    "walrus", "grouper", "marlin", "mackerel", "clownfish", "swordfish", "penguin", "pelican"]
    
var randomWord = Math.floor(Math.random()*(Words.length));
var choosenWord = Words[randomWord];
var letters = choosenWord.split("");
var underscore = [];
var correctLetter= [];
var guessCounter = 0;


function playFunction () {
    
    function generateUnderscore () {
        for (var i=0; i < choosenWord.length; i++) {
            underscore.push("_");
        }
        return underscore;
    } 
    document.getElementsByClassName("wordSelected")[0].innerHTML = generateUnderscore().join(" ");
    document.getElementById("guessCounter").innerHTML = guessCounter;


    document.addEventListener("keypress", (event) => {
        var keyword = String.fromCharCode(event.keyCode);
        if(choosenWord.indexOf(keyword) != -1) {
            for (var i =0; i < choosenWord.length; i++) {
                if(choosenWord[i] === keyword) {
                    correctLetter.push(keyword);
                    underscore[i] = keyword; 
                    document.getElementsByClassName("wordSelected")[0].innerHTML = underscore.join(" ");
                }
            }
            guessCounter++;
            document.getElementById("guessCounter").innerHTML = guessCounter;
            document.getElementsByClassName("letter-guess")[0].append(keyword);
            console.log(guessCounter);
        
        }
        else {
            document.getElementsByClassName("letter-guess")[0].append(keyword);
            document.getElementById("guessCounter").innerHTML = guessCounter++;
            console.log(guessCounter);
        }   
        winLose ();
    });
    function winLose() {
        if (correctLetter.length == choosenWord.length) {
            document.getElementsByClassName("win-lose")[0].innerHTML = "You WIN! Refresh to play again";
            document.getElementById("guessCounter").innerHTML= " ";
        }else if (guessCounter == 11){
            document.getElementsByClassName("win-lose")[0].innerHTML = "You Lose...Refresh to play again";      
            document.getElementById("guessCounter").innerHTML= "the word was " + choosenWord;
        }
    }

}
