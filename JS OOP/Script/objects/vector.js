(function (objects) {

    class Vector {
        constructor(x = 0, y = 0) {
            this._x = x;
            this._y = y;
        }
        toString() {
            return `(${this._x}, ${this._y})`;
        }
        
        
            
    }
    Vector.distance = function (vec1, vec2) {
        return Math.sqrt(Math.pow(vec2._x - vec1._x, 2) + Math.pow(vec2._y - vec1._y, 2));
    };
    
    objects.Vector = Vector;
})(objects || (objects = {}));