Polymer(
    "home-view", {
        params: {},
        results: "",
        ready: function(){
            //console.log( this.params );
        },
        paramsChanged: function(old_value, new_value) {
            this.results = "Query and Display results for color: " + new_value.input;
        }
    }
);