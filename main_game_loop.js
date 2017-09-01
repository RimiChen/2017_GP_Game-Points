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
        if(input_game_name != ""){
            $(document).prop('title', input_game_name);
        }
        else{
            ////use default game name
            input_game_name = "GAME";
            $(document).prop('title', input_game_name);
        }

        //check initialization of the game, can be null
        if(input_game_initial != null){
            input_game_initial();
        }
        else{
            console.log("==System: Didn't check initializations");
        }
        
        //execute game settings, if user want to change view point size or other settings.
        if(input_game_setting != null){
            input_game_setting();
        }
        else{
            console.log("==System: Use default settings");
        }

        // set time interval for main game loop
        ////Error handling: update() and draw() cannot be null.
        if(input_update_function == null || input_draw_function == null || Number.isInteger(input_update_rate) == false){
            console.log("==System: either missing essential functions or update rate. End process.");
        }
        else{
            console.log("==System: Launch the game \'"+input_game_name+"\'.")
            setInterval( 
                function(){
                    main_function(input_draw_function, input_update_function);
                },
                input_update_rate
            );
        }

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