Polymer(
    "color-spectrum", {
        ready: function(){
            var color_value_elm = this.$.color_value_elm;
            jQuery(color_value_elm).spectrum({
                preferredFormat: "hex",
                flat: true,
                showInput: true,
                allowEmpty:true
            });
        }
    }
);