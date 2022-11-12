//var n = parseInt(window.prompt('input'));

/*2
  2 * 2
  2 * 2 * 2
  2 * 2 * 2 * 2*/
//n的阶乘；
//     var mul = 1;
//     for(var i = 1; i <= n; i++) {
//         mul *= i;
//     }
//     document.write(mul);
var num1 = parseInt(window.prompt('input'));
var num2 = parseInt(window.prompt('input'));
var num3 = parseInt(window.prompt('input'));
if (num1 > num2) {
    if (num1 > num3) {
        document.write(num1);
    } else {
        document.write(num3)
    }
} else {
    if (num2 > num3) {
        document.write(num2)
    } else {
        document.write(num3)
    }
}





