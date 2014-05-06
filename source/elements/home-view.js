Polymer(
    "home-view", {
        params: {},
        ready: function(){
            console.log( this.params );
        },
        paramsChanged: function(old_value, new_value) {
            console.log( this.params );
        }
    }
);