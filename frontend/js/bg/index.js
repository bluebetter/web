var story = [
    '<h2 class="title" id="big_title">一些示例文字</h2> <div> <p>有个老头儿的狗死了，老头就把死狗打包托运准备带回家乡厚葬。但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了！</p> </div>',

    '<div><h2 class="title">'
    +'h2'+'</h2>'
    +'<p>但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了123123132</p><p>但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了321321</p>'
    +'</div>',

    '<div><h2 class="title">'
    +'h3'+'</h2>'
    +'<p>于是老头给吓死了123123132</p><p>但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了321321</p>'
    +'</div>',
];

var touchStartX = '',
    touchStartY = '',
    touchEndX = '',
    touchEndY = '',
    storyIdx = 0;
function handleTouchEvent(event) {
    var bigTitle = document.getElementById('big_title');
    if (1 || 2 == event.touches.length) {
        switch(event.type) {
            case 'touchstart':
                touchStartX = event.changedTouches[0].clientX;
                touchStartY = event.changedTouches[0].clientY;
                break;
            case 'touchend':
                touchEndX = event.changedTouches[0].clientX;
                touchEndY = event.changedTouches[0].clientY;

                if (touchStartX && touchStartY && touchEndX && touchEndY) {
                    diff = touchEndX - touchStartX;
                    if (diff < 10) {
                        if (storyIdx >= (story.length-1)) {
                            storyIdx = story.length-1;
                        } else {
                            storyIdx++;
                        }
                    } else if (diff > -10) {
                        if (storyIdx <= 0) {
                            storyIdx = 0;
                        } else {
                            storyIdx--;
                        }
                    }
                    letter.innerHTML = story[storyIdx];
                }
                touchStartX = touchStartY = touchEndX = touchEndY = '';
                break;
        }
    }
}

var letter = document.getElementById('letter');
letter.addEventListener("touchstart", handleTouchEvent, false);
letter.addEventListener("touchend", handleTouchEvent, false);
letter.innerHTML = story[storyIdx];
