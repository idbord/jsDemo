/**
 * Created by idbord on 3/2/16.
 */
var eventUtil = {
    addEvent: function(element, type, event){
        if(element.addEventListener){
            element.addEventListener(type, event, false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type, event);
        }else{
            element["on"+type] = event;
        }
    },
    removeEvent: function(element, type, event){
        if(element.removeEventListener){
            element.removeEventListener(type, event, false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type, event);
        }else{
            element["on"+type] = null;
        }
    }
};