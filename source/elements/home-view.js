Polymer(

    "home-view", {

        ready: function(){
            this.params = {};
            this.loading = false;
            this.timed_loader_handle = null;

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

            var my = this;
            this.timed_loader_handle = window.setTimeout(
                function () { if ( my.timed_loader_handle != null ) { my.loading = true; } },
                1000
            );

            var ajax = this.$.rately_feed;
            ajax.body = JSON.stringify( { payload: { colors: [this.params.input == null ? "" : this.params.input], keywords: ["candle"] } } );
            // window.setTimeout(function() { ajax.go(); }, 3000); /* simulating 3 second network delay */
            ajax.go();
        },

        feed_results_callback: function(response, xhr) {
            var listing_element = this.$.results_listing;
            listing_element.model = {
                response: response.detail.response
            }
        },

        feed_results_complete_callback: function(response, xhr) {
            if( this.timed_loader_handle != null ) {
                window.clearInterval( this.timed_loader_handle );
            }
            this.loading = false;
        }

    }

);