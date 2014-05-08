Polymer(

    "home-view", {

        ready: function(){
            this.params = {};
            this.loading = false;

            jQuery(this.$.color_picker).spectrum({
                preferredFormat: "hex",
                flat: true,
                showInput: true,
                allowEmpty:true,
                cancelText: "",
                change: function(color) {
                    window.location.href = window.location.origin + window.location.pathname + "#color/" + color.toHexString();
                }
            });
        },

        paramsChanged: function(old_value, new_value) {
        },

        render: function(){
            this.loading = true;
            var ajax = this.$.rately_feed;
            ajax.body = JSON.stringify( { payload: { colors: [this.params.input == null ? "" : this.params.input], keywords: ["candle"] } } );
            ajax.go();
        },

        feed_results_callback: function(response, xhr) {
            var listing_element = this.$.results_listing;
            listing_element.model = {
                response: response.detail.response
            }
        },

        feed_results_complete_callback: function(response, xhr) {
            this.loading = false;
        }

    }

);