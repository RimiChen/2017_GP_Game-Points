//// this script doesn't allow to use any functions except game customize parts. It combines engine functions to create different games
var sample_alchemy = ( function(){
    var image_pool = new Image_pool();
    var initial_checking = function(){
        console.log("==Game: this funciton check all of initial settings of the system.");
    
        ////check all of the scripts are reachable

        //<script src="settings_variables/data_structures.js"></script>
        data_structures.initialize();
        //<script src="settings_variables/global_settings.js"></script>
        global_settings.initialize();
        //<script src="settings_variables/name_register.js"></script>
        name_register.initialize();
        //<script src="materials/image_source.js"></script>
        image_source.initialize();
        //<script src="shared_functions/shared_functions.js"></script>
        shared_functions.initialize();
    }
    var settings = function(){
        console.log("==Game: this is the SETTING funciton of game \'alchemy\'.");

        // set windows
        global_settings.set_view_port(1300, 900);
        //put game initial settins in here, such as loading images.
        //image_pool.add_new_image("fire", "fire.png");
        //image_pool.add_new_image("water", "water.png");
        //image_pool.add_new_image("earth", "earth.png");
        //image_pool.add_new_image("air", "air.png");
    };
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
        image_pool: image_pool,
        initial_checking: initial_checking,
        settings: settings,
        update: update,
        draw: draw
    }

})();