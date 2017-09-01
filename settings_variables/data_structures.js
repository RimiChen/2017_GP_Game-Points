var data_structures = ( function(){
    var initialize = function(){
        //checking setting correct
        console.log("==System: loading script for data structures--game objects");
    };
    var main_function = function(){

    }
    return = {
        initialize: initialize,
        main_function: main_function
    }

})();

// define data structures in here
//// Capitalize the first character of Class name
function Game_Sprite(sprite_id){
    this.id = sprite_id;
}
function Game_objects( object_id){
    this.id = object_id;
    console.log("==Object: "+this.id);
}