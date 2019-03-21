
$(document).ready(function() {
    var notEdgy 
    $("#input").on("change", function(){
        notEdgy= this.value;    
        console.log(notEdgy);
      })
    
    
    $("#submit").on("click", function(button) {
        button.preventDefault();
         
        
        var properNounPattern = /\b[A-Z][a-z]+\b/g;
        var slightlyEdgier = notEdgy.replace(properNounPattern, function(x){
            return "Xx" + x + "xX";
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