/**
 * Created by idbord on 2/29/16.
 */
var carousel = function(img_count, show_interval){
    var ul_element = document.createElement("ul");
    for(var i= 0; i<img_count; i++){
        var li_element = document.createElement("li"),
            img_element = document.createElement("img");
        li_element.className = "carousel-item tip-hide";
        img_element.src = images[i].src;
        img_element.className = "tip-common";
        li_element.appendChild(img_element);
        ul_element.appendChild(li_element);
    }
    var carousel_container = document.getElementById("carousel-container");
    carousel_container.appendChild(ul_element);

    var node_list = document.getElementsByClassName('carousel-item');
    node_list[0].className = "carousel-item tip-show";

    var getIndexByClassName = function(node_list, class_name){
        for(var i= 0, len=node_list.length; i<len; i++){
            if(node_list[i].className.indexOf(class_name) != -1){
                return i;
            }
        }
    };

    var change_carousel = function(){
        var current_index = getIndexByClassName(node_list, 'tip-show');
        node_list[current_index].className = "carousel-item tip-hide";
        node_list[(current_index+1)%4].className = "carousel-item tip-show";
    };

    setInterval(change_carousel, show_interval);
};