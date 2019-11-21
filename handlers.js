let intId;
const leftPos = 'matrix(0.5, 0.866025, -0.866025, 0.5, 0, 0)';
const rightPos = 'matrix(0.5, -0.866025, 0.866025, 0.5, 0, 0)';
const width = 2 / 3 * Math.PI;
let dir = false;

function startR() {
    const val = Number.parseFloat($('#pendulum').css('transform').split(' ')[1]);
    let m;
    if(val < 0)
        if(!dir)
            m = 2 * Math.asin(val) / width;
        else
            m = (width - Math.asin(val)) / width;
    else
        if(!dir)
            m = (width - Math.asin(val)) / width;
        else
            m = 2 * Math.asin(val) / width;
    if(m === 0) m = 2;
    $('#pendulum').css('transition-duration',  m + 's');
    $('#pendulum').css('transition-function', 'linear');
    //console.log(`v=${val}\nm=${m}`);
    if(dir)
        reverseRotate();
    else directRotate();
    setTimeout(() => {
        $('#pendulum').css('transition-function', 'ease-in-out');
        $('#pendulum').css('transition-duration', '2s');
        function anim() {
            intId = setTimeout(() => {
                switch($('#pendulum').css('transform')){
                    case leftPos:
                        reverseRotate();
                        break;
                    case rightPos:
                        directRotate();
                }
                anim();
            }, 100)
        }
        anim();
    }, m * 1000);
}

function stopR() {
    clearTimeout(intId);
    $('#pendulum').css('transform',
        $('#pendulum').css('transform'));
}

function anim() {
    $('#pendulum').css('transform')
}

function directRotate() {
    dir = false;
    $('#pendulum').css('transform', 'rotate(60deg)');
}

function reverseRotate() {
    dir = true;
    $('#pendulum').css('transform', 'rotate(-60deg)');
}
