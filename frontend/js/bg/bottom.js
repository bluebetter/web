
function getDocumentTop() {
    var scrollTop = bodyScrollTop = documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    return scrollTop;
    scrollTop = (bodyScrollTop > documentScrollTop) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
 
//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    return bodyScrollHeight;
    //scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

window.onscroll = function () {
    console.log(document.body.scrollTop+' '+document.body.scrollHeight+' '+document.body.clientHeight);

    var scrollHeight = getScrollHeight(),
        windowHeight = getWindowHeight(),
        docTop = getDocumentTop();
    console.log(scrollHeight+' '+windowHeight+' '+docTop);
    if (getScrollHeight() == getWindowHeight() + getDocumentTop()) {
        //alert('a');
    }
}
