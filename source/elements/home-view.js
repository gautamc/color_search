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
        },

        render: function(){
            this.results = this.params.input ?
                "Query and Display results for color: " + this.params.input :
                "No color selected";
            var ajax = this.$.google_feed;
            ajax.params = { "alt":"json", "q": this.params.input };
            ajax.go();
        },

        feed_results_callback: function(e) {
            var listing_element = this.$.results_listing;
            listing_element.model = {
                response: e.detail.response
            }
        }

    }

);