let intId;
const leftPos = 'matrix(0.5, 0.866025, -0.866025, 0.5, 0, 0)';
const rightPos = 'matrix(0.5, -0.866025, 0.866025, 0.5, 0, 0)';
const width = -0.866025 * 2;
let dir = false;

function startR() {
    const val = Number.parseFloat($('#pendulum').css('transform').split(' ')[1]);
    $('#pendulum').css('transition-duration', Math.abs(2 * val / width + 's'));
    if(dir)
        reverseRotate();
    else directRotate();
    function anim() {
        intId = setTimeout(() => {
            $('#pendulum').css('transition-duration', '2s');
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
