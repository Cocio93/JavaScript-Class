module.exports = {
    add: function(n1, n2) {
        return n1+n2;
    },
    minus: function(n1, n2) {
        return n1-n2;
    },
    divide: function(n1, n2) {
        if (n1 == 0 || n2 == 0) {
            throw new Error("Attempt to divide by zero");
        } else {
            return n1/n2;
        }   
    },
    multiply: function(n1, n2) {
        return n2*n2;
    }
}