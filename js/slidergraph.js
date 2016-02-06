/**
 * Created by devonmcb on 1/27/16.
 */
$(document).ready(function() {

    // How to set a minimum range of $10,
    // and how to set $0 rather than $ as the minimum?
    var options = {
        // disabled: true, // Thought it would disable allowing movement, but it's not that.
        /* This will be the stock's 52 week low and high */
        from: 92,
        to: 126,
        //round: 10,
        // heterogeneity: ['50/100', '75/250'],
        //scale: ["$0", '|', "$50", '|' , "$100", '|', "$250", '|', "$500"],
        limits: true,
        //step: 10,
        format: { format: '$#,' },
        skin: "green", // "blue", // "round_plastic", // green and red turn out to be yellow.  Blue is blue.
        /* don't need, because I'm using the slider as if it were a one-dimensional graph
        onStateChange: function(value) {
            var min = parseInt(value.split(";")[0]);
            var max = parseInt(value.split(";")[1]);
            if ((max-min) < 100) {
                // Can't implement a minimum range  using return false, or by setting values manually?
                //$('.holder').slider("value",'100','120');
                return false;
            }
        }
        */
    };
    jQuery("#price-slider").slider(options);

});