$.noConflict();

jQuery(document).ready(function(){
    jQuery("#color-picker").spectrum({
        preferredFormat: "hex",
        flat: true,
        showInput: true,
        allowEmpty:true
    });
});

document.addEventListener(
    "DOMContentLoaded",
    function(){
    }
)