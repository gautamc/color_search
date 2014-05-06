Polymer(

    "home-view", {

        ready: function(){
            this.params = {};
            this.results = "";

            jQuery(this.$.color_picker).spectrum({
                preferredFormat: "hex",
                flat: true,
                showInput: true,
                allowEmpty:true
            });
        },

        paramsChanged: function(old_value, new_value) {
            this.render();
        },

        render: function(){
            this.results = this.params.input ?
                "Query and Display results for color: " + this.params.input :
                "No color selected";
        }

    }

);