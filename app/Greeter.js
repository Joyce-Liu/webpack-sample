/**
 * Created by joyce.liu on 7/6/17.
 */

var config = require('../config.json');
module.exports=function(){
    var greet = document.createElement('div');
    greet.textContent =config.greetText;
    return greet;
}