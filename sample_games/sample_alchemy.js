//// this script doesn't allow to use any functions except game customize parts. It combines engine functions to create different games
var sample_alchemy = ( function(){
    var update = function(){
        console.log("==Game: this is the UPDATE funciton of game \'alchemy\'.");

        //put game content in here, update data and computation results.
    };
    var draw = function(){
        console.log("==Game: this is the DRAW funciton of game \'alchemy\'.");
        
        // change game layout in here
    };
    //customize functions
    return{
        update: update,
        draw: draw
    }

})();