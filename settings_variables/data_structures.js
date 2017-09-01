var data_structures = ( function(){
    var initialize = function(){
        //checking setting correct
        console.log("==System: loading script for data structures--game objects");
    };
    return{
        initialize: initialize
    }

})();

// define data structures in here
//// Capitalize the first character of Class name
function Game_Sprite(sprite_id, sprite_width, sprite_height, sprite_image_src){
    // sprite id
    this.id = sprite_id;
    console.log("==Sprite: "+this.id);
    
    // sprite image
    this.image = new Image();
    this.image.width = sprite_width;
    this.image.height = sprite_height;
    this.image.src = sprite_image_src;    

}
function Game_objects( object_id, object_x, object_y, object_w, object_h, object_sprite){
    // game object id
    this.id = object_id;
    console.log("==Object: "+this.id);

    // object position
    this.x = object_x;
    this.y = object_y;

    // object size
    this.width = object_w;
    this.height = object_h;    

    // game object properties
    this.property_list = {};
    this.update_property = function(property_name, property_value){
        this.property_list[property_name] = property_value;
    }
    this.check_property_exist = function(property_name){
        if(this.property_list[property_name]){
            return true;
        }
        else{
            return false;
        }
    }
    this.delete_property = function(property_name){
        if(this.property_list[property_name]){
            delete this.property_list[property_name];
        }
        else{
            console.log("==Object: doesn't have property "+property_name);
        }
        
    }

    // game object behaviors
    this.behavior_list = {};
    this.update_behavior = function(behavior_name, behavior_function){
        if(behavior_function instanceof Function){
            this.behavior_list[behavior_name] = behavior_function;
        }
        else{
            console.log("==Object: "+behavior_name+" is not a function.");
        }
    }
    this.check_behavior_exist = function(behavior_name){
        if(this.behavior_list[behavior_name]){
            return true;
        }
        else{
            return false;
        }
    }
    this.delete_behavior = function(behavior_name){
        if(this.behavior_list[behavior_name]){
            delete this.behavior_list[behavior_name];
        }
        else{
            console.log("==Object: doesn't have behavior "+behavior_name);
        }
        
    }
    this.execute_behavior = function(behavior_name, behavior_args){
       //// passing non determined parameters
        if(this.behavior_list[behavior_name]){
            this.behavior_list[behavior_name].apply(this, arguments);
        }
        else{
            console.log("==Object: doesn't have behavior "+behavior_name);
        }        
    }
    
    // object visual representation
    this.sprite = null;
    if(object_sprite != null){
        this.sprite = object_sprite;
    }
    else{
        // don't habe sprite
        console.log("==Object: "+this.id+" doesn't have a sprite.");
    }
    this.add_sprite = function(new_sprite){
        if(new_sprite instanceof Game_Sprite){
            this.sprite = new_sprite;
        }
        else{
            console.log("==Object: fail to add sprite for "+this.id+".");
        }
    }
    this.clear_sprite = function(){
        this.sprite = null;
    }

}