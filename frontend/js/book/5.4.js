function t1() {
    var text = "cat, bat, sat, fat";
    var pattern1 = /.at/;
    var matches = pattern1.exec(text);
    //alert(matches.index);        //0
    //alert(matches[0]);           //cat
    //alert(matches);           //cat
    //alert(pattern1.lastIndex);   //0 
    //alert(pattern1.valueOf());
    var pattern2 = new RegExp("/.at/", "g");
    alert(pattern2.valueOf());
    alert(pattern2.toString());
}

function t2() {
    // 正则"组"
    var text = "cat,bat";
    var pat = /(.)at/;
    var matches = pat.exec(text);
    alert(matches);
    alert(matches[0]);
    alert(matches[1]);
    if (pat.test(text)) {
        alert(RegExp.input);
    }
}

function t3() {
    window.color = "red";
    var o = { color: "blue" };
    function sayColor() {
        alert(this.color);
    }
    var objectSayColor = sayColor.bind(o);
    objectSayColor();    //blue
    sayColor();    //red
}

function t4() {
    var chinese = "中国";
    alert(chinese.length);
}
