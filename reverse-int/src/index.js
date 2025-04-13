module.exports = function reverse (n) {
    let newN = 0;
    n = Math.abs(n);
    while (n > 0) {
        newN *= 10;
        newN += n % 10;
        n = Math.trunc(n / 10);
    }
    return newN;
}
