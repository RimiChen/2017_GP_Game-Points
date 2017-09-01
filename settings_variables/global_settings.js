var global_settings = ( function(){
    var initialize = function(){
        //checking setting correct
        console.log("==System: loading global setting variables.");
    };


    var post_global_variable_sets_names = function(){
        //report system current settins
        console.log("==System:\n"
            +"VIEW PORT WIDTH: " + g_settings.main_frame_width +"\n"
            +"VIEW PORT HEIGHT: " + g_settings.main_frame_height +"\n"
            +"WINDOW BACKGROUND COLOR: " + g_settings.window_background_color +"\n"
        );
    };


    /*
    set functions for global game settings
    */
    var set_view_port = function(new_width, new_height){
        g_settings.main_frame_width = new_width;
        g_settings.main_frame_height = new_height;
    };
    var set_window_background_color = function(new_r, new_g, new_b, new_a){
        new_color = "rgba( "+new_r+", "+new_g+", "+new_b+", "+new_a+" )";
        g_settings.window_background_color = new_color;
    }



    return{
        initialize: initialize,
        post_global_variable_sets_names: post_global_variable_sets_names,
        set_view_port: set_view_port,
        set_window_background_color: set_window_background_color
    }

})();

//setting variables in here
var g_settings = {
    //default view port (height, width) = (800, 600). 
    main_frame_width: 800,
    main_frame_height: 600,
    
    //default background color is "black"
    window_background_color: "rgba(0, 0, 0, 1)"

} ;
