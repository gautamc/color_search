Polymer(
    "home-view", {
        ready: function(){
            this.params = {};
            this.results = "";
        },
        paramsChanged: function(old_value, new_value) {
            this.render();
        },
        render: function(){
            this.results = "Query and Display results for color: " + this.params.input;
        }
    }
);