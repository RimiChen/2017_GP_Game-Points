//// this script doesn't allow to use any functions. It combines engine functions to create different games
var main_game_loop = ( function(){
    var initialize = function(){
        //checking setting correct
        console.log("==System: loading script for main game loop");
    };
    var main_function = function(){
        sample_alchemy.initialize();
        sample_alchemy.main_function();
    }
    return = {
        initialize: initialize,
        main_function: main_function
    }

})();