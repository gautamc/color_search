Polymer(

    "app-router", {

        routes: [],

        ready: function(){
            var my = this;

            this.render_view( this.get_route() );

            var observer = new PathObserver(window, 'location.hash');
            observer.open(function(new_value, old_value) { 
                my.handle_route_change(new_value, old_value);
            });
        },

        get_route: function() {
            var my = this;
            var path = window.location.hash || "#";
            var matching_route = this.routes.filter(function(route){
                if( my.has_variable_p( route.urn ) ) {
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
            this.render_view( this.get_route() );
        },

        render_view: function(route){
            if( this.has_variable_p( route.urn ) ) {

                var variable_in_urn = this.extract_variable(window.location.hash || "#", route.urn);
                var container = document.getElementById(route.name);

                if( container.childNodes.length == 0 ) {
                    var view = document.createElement(route.name);
                    view.params = { input: variable_in_urn };
                    container.appendChild(view);
                    view.render();
                } else {
                    var view = document.querySelector(route.name);
                    view.params = { input: variable_in_urn };
                    view.render();
                }

            } else {

                var container = document.getElementById(route.name);

                if( container.childNodes.length == 0 ) {
                    var view = document.createElement(route.name);
                    container.appendChild(view);
                    view.render();
                } else {
                    var view = document.querySelector(route.name);
                    view.params = { input: null };
                    view.render();
                }

            }
        },

        has_variable_p: function(route_urn){
            return route_urn.match(/:\w+/) != null;
        },

        extract_variable: function(hash_path, route_urn) {
            var urn_re = new RegExp( route_urn.replace(/:\w+/, '(.+)') );
            var urn_match = hash_path.match(urn_re);
            if ( urn_match != null ) {
                return urn_match[1];
            }
            return null;
        }

    }

);