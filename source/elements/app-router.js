Polymer(
    "app-router", {
        routes: [],
        ready: function(){
            var my = this;

            console.log( this.get_route() );

            var observer = new PathObserver(window, 'location.hash');
            observer.open(function(new_value, old_value) { 
                my.handle_route_change(new_value, old_value);
            });
        },
        get_route: function() {
            var path = window.location.hash || "#";
            var matching_route = this.routes.filter(function(route){
                if( route.urn.match(/:\w+/) != null ) {
                    var urn_re = new RegExp( route.urn.replace(/:\w+/, '.+') );
                    if ( path.match(urn_re) != null ) {
                        return true;
                    }
                } else {
                    return route.urn == path;
                }
            })[0];
            return matching_route;
        },
        handle_route_change: function(new_route, old_route) {
            console.log( this.get_route() );
        },
        render_view: function(){
            
        }
    }
);