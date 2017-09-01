var main_game_loop = ( function(){
    var initialize = function(
            input_draw_function,
            input_update_function,
            input_update_rate
    ){
        ////input draw funciton and update function to switch between games
        
        //checking setting correct
        console.log("==System: loading script for main game loop");

        // set time interval for main game loop
        setInterval( 
            function(){
                main_function(input_draw_function, input_update_function);
            },
            input_update_rate
        );

    };
    var main_function = function(input_draw_function, input_update_function){
        console.log("==System: main game loop.");
        input_update_function();
        input_draw_function();
    };
    return{
        initialize: initialize,
        main_function: main_function
    }

})();