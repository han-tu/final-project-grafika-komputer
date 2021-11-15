export function getOnKeyUpEvent(move) {
    const onKeyUp = function (event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                move.setMoveForwardStatus(false) ;
                break;

            case 'ArrowLeft':
            case 'KeyA':
                move.setMoveLeftStatus(false);
                break;

            case 'ArrowDown':
            case 'KeyS':
                move.setMoveBackwardStatus(false);
                break;

            case 'ArrowRight':
            case 'KeyD':
                move.setMoveRightStatus(false);
                break;
        }
    };

    return onKeyUp;
}