var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function sub(a, b) {
        return a - b;
    }
    MathOperations.sub = sub;
})(MathOperations || (MathOperations = {}));
