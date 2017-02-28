var story = [
    '<div><h2 class="title">'
    +''+'</h2>'
    +'<p>Just No!</p>'
	+'<p>6年前隐形被No。</p>'
	+'<p>4年前希望得到No。</p>'
	+'<p>现在，如愿以偿，等到了那个No。</p>'

	+'<p>我还不能死</p>'
	+'<p>太多“债”要还了</p>'

	+'<p>想不清楚该做什么、怎么做的时候</p>'
	+'<p>Follow The Heart，Try Best Not To Touble The Others。</p>'
    +'<p></p>'
    +'<p></p>'
    +'<p></p>'
    +'<p></p>'
    +'<p></p>'
    +'<p></p>'
    +'<p></p>'
    +'</div>',
];

var touchStartX = '',
    touchStartY = '',
    touchEndX = '',
    touchEndY = '',
    storyIdx = 0;
function handleTouchEvent(event) {
    if (1 || 2 == event.touches.length) {
        switch(event.type) {
            case 'touchstart':
                touchStartX = event.changedTouches[0].clientX;
                touchStartY = event.changedTouches[0].clientY;
                break;
            case 'touchend':
                touchEndX = event.changedTouches[0].clientX;
                touchEndY = event.changedTouches[0].clientY;

                diffY = Math.abs(touchEndY - touchStartY);
                if (diffY > 100) {
                    break;
                }

                if (touchStartX && touchStartY && touchEndX && touchEndY) {
                    diff = touchEndX - touchStartX;
                    diffStand = 50;
                    if (diff < diffStand) {
                        if (storyIdx >= (story.length-1)) {
                            storyIdx = story.length-1;
                        } else {
                            storyIdx++;
                        }
                    } else if (diff > -diffStand) {
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
