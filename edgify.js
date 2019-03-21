
$(document).ready(function() {
    var notEdgy 
    $("#input").on("change", function(){
        notEdgy= this.value;    
        console.log(notEdgy);
      })
    
    
    $("#submit").on("click", function(button) {
        button.preventDefault();
         
        var sentencePattern = /\b[A-Z][A-Za-z0-9\s]+(\.|\!|\?)/g;
        var properNounPattern = /\b[A-Z][a-z]+\b/g;
        var thePattern = /\bthe\b/gi;
        var thisPattern = /\bthis\b/gi;
        var mePattern = /\bme\b/gi;
        var silentEPattern= /e\b/gi;
           
        
        var slightlyEdgier = notEdgy.replace(sentencePattern, function(x){
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
        
        var edgyArray = slightlyEdgier.split(" ");
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

        
});