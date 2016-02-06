/**
 * Created by devonmcb on 1/28/16.
 *
 * I got this from: http://stackoverflow.com/questions/625920/jquery-popup-bubble-tooltip
 */
$('span.row1').click(function(event) {
    createTooltip(event);
}).mouseout(function(){
    // create a hidefunction on the callback if you want
    hideTooltip();
});

function createTooltip(event){
    $('<div class="tooltip">test</div>').appendTo('body');
    positionTooltip(event);
};

/* a function to position the tooltip with the offset position of the DOM-element that triggered the mouseover event */
function positionTooltip(event){
    var tPosX = event.pageX + 10;
    var tPosY = event.pageY + 10;
    $('div.tooltip').css({'position': 'absolute', 'top': tPosY, 'left': tPosX});
};