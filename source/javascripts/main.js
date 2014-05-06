$.noConflict();

jQuery(document).ready(function(){
    /*
    window.setTimeout(
        function() {
            jQuery("#color-picker-box").append('<input type="text" id="color-picker" />')
            console.log( jQuery("#color-picker") );
        }, 2000
    );
    */
});

document.addEventListener(
    "DOMContentLoaded",
    function(){
    }
)

document.addEventListener(
    "WebComponentsReady",
    function(){
    }
)

document.addEventListener(
    "polymer-ready",
    function(){
        jQuery("#color-picker").spectrum({
            preferredFormat: "hex",
            flat: true,
            showInput: true,
            allowEmpty:true
        });
    }
)
