//alert(1);
function myFunc(num1, num2) {
    //alert(arguments[0]);
    //alert(arguments[1]);
    arguments[1] = 10;
    alert(arguments[1]);
    alert(num2);
    return num1;
}
//myFunc(1,2);
//myFunc(1,2,3);