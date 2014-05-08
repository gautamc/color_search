Polymer(
    "colors-list", {
        colors: [],
        stripLeadingHash: function(hex_value){
            return hex_value.replace(/^#/, '');
        },
        ready: function(){
            this.colors = [
                {name: "#F0F8FF"}, {name: "#FAEBD7"}, {name: "#00FFFF"}, {name: "#7FFFD4"}, {name: "#F0FFFF"}, {name: "#F5F5DC"}, {name: "#FFE4C4"},
                {name: "#8A2BE2"}, {name: "#A52A2A"}, {name: "#DEB887"}, {name: "#5F9EA0"}, {name: "#7FFF00"}, {name: "#D2691E"}, {name: "#FF7F50"},
                {name: "#6495ED"}, {name: "#FFF8DC"}, {name: "#DC143C"}, {name: "#00FFFF"}, {name: "#00008B"}, {name: "#008B8B"}, {name: "#B8860B"},
                {name: "#A9A9A9"}, {name: "#006400"}, {name: "#BDB76B"}, {name: "#8B008B"}, {name: "#556B2F"}, {name: "#FF8C00"}, {name: "#9932CC"},
                {name: "#8B0000"}, {name: "#E9967A"}, {name: "#8FBC8F"}, {name: "#483D8B"}, {name: "#2F4F4F"}, {name: "#00CED1"}, {name: "#9400D3"},
                {name: "#FF1493"}, {name: "#00BFFF"}, {name: "#696969"}, {name: "#1E90FF"}, {name: "#B22222"}, {name: "#FFFAF0"}, {name: "#228B22"},
                {name: "#FF00FF"}, {name: "#DCDCDC"}, {name: "#F8F8FF"}, {name: "#FFD700"}, {name: "#DAA520"}, {name: "#808080"}, {name: "#008000"},
                {name: "#ADFF2F"}, {name: "#F0FFF0"}, {name: "#FF69B4"}, {name: "#CD5C5C"}, {name: "#4B0082"}, {name: "#FFFFF0"}, {name: "#F0E68C"},
                {name: "#E6E6FA"}, {name: "#FFF0F5"}, {name: "#7CFC00"}, {name: "#FFFACD"}, {name: "#ADD8E6"}, {name: "#F08080"}, {name: "#E0FFFF"},
                {name: "#FAFAD2"}, {name: "#D3D3D3"}, {name: "#90EE90"}, {name: "#FFB6C1"}, {name: "#FFA07A"}, {name: "#20B2AA"}, {name: "#87CEFA"},
                {name: "#778899"}, {name: "#B0C4DE"}, {name: "#FFFFE0"}, {name: "#00FF00"}, {name: "#32CD32"}, {name: "#FAF0E6"}, {name: "#FF00FF"},
                {name: "#800000"}, {name: "#66CDAA"}, {name: "#0000CD"}, {name: "#BA55D3"}, {name: "#9370DB"}, {name: "#3CB371"}, {name: "#7B68EE"},
                {name: "#00FA9A"}, {name: "#48D1CC"}, {name: "#C71585"}, {name: "#191970"}, {name: "#F5FFFA"}, {name: "#FFE4E1"}, {name: "#FFE4B5"},
                {name: "#FFDEAD"}, {name: "#000080"}, {name: "#FDF5E6"}, {name: "#808000"}, {name: "#6B8E23"}, {name: "#FFA500"}, {name: "#FF4500"},
                {name: "#DA70D6"}, {name: "#EEE8AA"}, {name: "#98FB98"}, {name: "#AFEEEE"}, {name: "#DB7093"}, {name: "#FFEFD5"}, {name: "#FFDAB9"},
                {name: "#CD853F"}, {name: "#FFC0CB"}, {name: "#DDA0DD"}, {name: "#B0E0E6"}, {name: "#800080"}, {name: "#FF0000"}, {name: "#BC8F8F"},
                {name: "#4169E1"}, {name: "#8B4513"}, {name: "#FA8072"}, {name: "#F4A460"}, {name: "#2E8B57"}, {name: "#FFF5EE"}, {name: "#A0522D"},
                {name: "#C0C0C0"}, {name: "#87CEEB"}, {name: "#6A5ACD"}, {name: "#708090"}, {name: "#FFFAFA"}, {name: "#00FF7F"}, {name: "#4682B4"},
                {name: "#D2B48C"}, {name: "#008080"}, {name: "#D8BFD8"}, {name: "#FF6347"}, {name: "#40E0D0"}, {name: "#EE82EE"}, {name: "#F5DEB3"},
                {name: "#FFFFFF"}, {name: "#F5F5F5"}, {name: "#FFFF00"}, {name: "#9ACD32"}, {name: "#000000"}, {name: "#FFEBCD"}, {name: "#0000FF"}
            ]
        }
    }
);