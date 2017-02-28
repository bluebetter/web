var story = [
    '<div><h2 class="title">'
    +'No'+'</h2>'
    +'<p>Just No!</p>'
	+'<p>6年前隐形被No。</p>'
	+'<p>4年前希望得到No。</p>'
	+'<p>现在，如愿以偿，等到了那个No。</p>'
	+'<p>我还不能死</p>'
	+'<p>太多“债”要还了</p>'
	+'<p>想不清楚该做什么、怎么做的时候</p>'
	+'<p>Follow The Heart，Try Best Not To Touble The Others。</p>',
    +'</div>',

    '<div><h2 class="title">'
    +'歌曲'+'</h2>'
    +'<p>《Feeling Good》	Avicli</p>'
    +'<p>《You\'re Beautiful》	James Blunt</p>'
    +'<p>《把悲伤留给自己》	蔡琴（陈升被和谐了）</p>',
    +'</div>',

    '<div><h2 class="title">'
    +'3.1'+'</h2>'
    +'<p>本来有一句话，想亲口说的：“如果有一天你答应了我，我想我最想做的一件事就是：把头放在你的肩上好好哭一场，但是我想到那个时候，我也许已经忘了怎么哭了。”</p>'
    +'<p>今天，很早就醒了，醒来的时候很难过，没多一会儿就开始流眼泪了。（为什么不说哭醒呢：醒来的瞬间没有泪水，应该不算吧。——强迫症）</p>'
    +'<p>妈妈语录：你又没受啥委屈，凭什么哭？</p>'
    +'<p>是啊。但是不知道为什么心里难受。</p>'
    +'<p>我捅了别人两刀，至少也要找个人给自己一刀。</p>'
    +'<p>我没有快乐的理由，那就把悲伤留给自己吧。</p>'
    +'<p>眼泪啊，不过是身体缓解情绪的物理手段罢了，我是不需要的，也是没资格要的。</p>'
    +'<p>只愿我爱的那些人不会流泪，当然我也不会了（已经好久好久没这样了）。</p>',
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
