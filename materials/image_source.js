function Image_pool(){
    this.dic = {};

    this.add_new_image =function(image_name, image_src){
        if(this.dic[image_name]){
            console.log("==Image pool: image "+image_name+" already exist!");
        }
        else{
            this.dic[image_name] = image_source;
        } 
    }
    this.is_image_exist = function(image_name){
        if(this.dic[image_name]){
            return true;
        }
        else{
            return false;
        }
    }
    this.delete_image_from_pool = function(image_name){
        if(this.dic[image_name]){
            delete this.dic[image_name];
        }
        else{
            console.log("==Image pool: doesn't have image "+image_name);
        }
        
    }    
};
var image_source = ( function(){
    var initialize = function(){
        //checking setting correct
        console.log("==System: loading script for image source");

    };
    return{
        initialize: initialize
    }

})();

