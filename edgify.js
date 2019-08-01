
$(document).ready(function() {
    let notEdgy; 
    $("#input").on("change", function(){
        notEdgy= this.value;    
      })
    
   

    $("#submit").on("click", function(button) {
        button.preventDefault();
         
        const sentencePattern = /\b[A-Za-z0-9\s\,\']+(\.|\!|\?)/g;
        const properNounPattern = /\b[A-Z][a-z]+\b/g;
        const thePattern = /\bthe\b/gi;
        const thisPattern = /\bthis\b/gi;
        const mePattern = /\bme\b/gi;
        const silentEPattern= /e\b/gi;
           
    
        let slightlyEdgier = notEdgy.replace(sentencePattern, function(x){
             return "~*~*" + x + "*~*~";
        });

         slightlyEdgier = slightlyEdgier.replace(properNounPattern, function(x){
            return "Xx" + x + "xX";
        });


        
        
        slightlyEdgier = slightlyEdgier.replace(/!/g, "!!1!!!1!");
        slightlyEdgier = slightlyEdgier.replace(thePattern, "teh");
        slightlyEdgier = slightlyEdgier.replace(thisPattern, "dis");
        slightlyEdgier = slightlyEdgier.replace(mePattern, "meh");

        slightlyEdgier = slightlyEdgier.replace(silentEPattern, function(x){
            switch(Math.floor(Math.random()*2)) {
                case 0:
                    return "";
                    break;
                case 1:
                    return "ee";
                    break;
            }
        });
        
        let edgyArray = slightlyEdgier.split(" ");
        edgyArray.forEach(function(word, index, array) {
            var letters = word.split("");
            if (!word.match(/Xx[A-Z][a-z]+xX/)) {
                letters.forEach(function(char, index, array){
                    switch(Math.floor(Math.random()*2)) {
                        case 0:  
                            array[index] = char.toUpperCase(); 
                            break;
                        case 1:
                            array[index] = char.toLowerCase(); 
                            break;
                    }
                });
            }
            array[index] = letters.join("")
        });
        $("#result").html(edgyArray.join(" ")); 
    });

    $("#tweet").on("click", function(button) {
        button.preventDefault();
        
        let tweetText = $("#result").text() + "\n -- edgify your text at MakeMeEdgy.tk";
        let URL = "https://twitter.com/intent/tweet?text=" + tweetText;
        
        window.open(URL, 'newwindow', 'width=600,height=250');

    });
        
});
