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
var wrongLetter= [];
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
        if(choosenWord.indexOf(keyword) > -1) {
            for (var i =0; i < choosenWord.length; i++) {
                if(choosenWord[i] === keyword) {
                    correctLetter.push(keyword);
                    underscore[choosenWord.indexOf(keyword)] = keyword; 
                    document.getElementsByClassName("wordSelected")[0].innerHTML = underscore.join(" ");
                    document.getElementsByClassName("correct-guess")[0].innerHTML = correctLetter;
                    document.getElementById("guessCounter").innerHTML = guessCounter++;
                }
            }
        
        }
        else {
            wrongLetter.push(keyword);
            document.getElementsByClassName("wrong-guess")[0].innerHTML = wrongLetter;
            document.getElementById("guessCounter").innerHTML = guessCounter++;
        }
        
        function winLose() {
            if (correctLetter == choosenWord.length) {
                document.write("You WIN! Refresh to play again")
            }else if (guessCounter == 16){
                document.write("You Lose...Refresh to play again")
            }
        }
        winLose ();
    });
}
