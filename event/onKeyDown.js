export function getOnKeyDownEvent(move, velocity, flashlight) {
    const onKeyDown = function (event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                move.setMoveForwardStatus(true);
                break;

            case 'ArrowLeft':
            case 'KeyA':
                move.setMoveLeftStatus(true);
                break;

            case 'ArrowDown':
            case 'KeyS':
                move.setMoveBackwardStatus(true);
                break;

            case 'ArrowRight':
            case 'KeyD':
                move.setMoveRightStatus(true);
                break;

            case 'Space':
                if (move.getCanJumpStatus() === true) velocity.y += 250;
                move.setCanJumpStatus(false);
                break;
            
            case 'KeyL':
                if (flashlight.intensity == 1) flashlight.intensity = 0;
                else flashlight.intensity = 1;
                break;
        }
    };

    return onKeyDown;
}