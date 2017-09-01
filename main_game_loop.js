var main_game_loop = ( function(){
    var initialize = function(
            input_game_name,
            input_game_initial,
            input_game_setting,
            input_draw_function,
            input_update_function,
            input_update_rate
    ){
        ////input draw funciton and update function to switch between games
        
        //checking setting correct
        console.log("==System: loading script for main game loop");

        //reset game title to match current game
        $(document).prop('title', input_game_name);

        //check initialization of the game, can be null
        if(input_game_initial != null){
            input_game_initial();
        }
        else{
            console.log("Didn't check initializations");
        }
        //execute game settings, if user want to change view point size or other settings.
        input_game_setting();

        // set time interval for main game loop
        setInterval( 
            function(){
                main_function(input_draw_function, input_update_function);
            },
            input_update_rate
        );

    };
    var main_function = function(input_draw_function, input_update_function){
        ////console.log("==System: main game loop.");
        input_update_function();
        input_draw_function();
    };
    return{
        initialize: initialize,
        main_function: main_function
    }

})();