export class Move {
    //  moveForward;
    // boolean moveLeft;
    // boolean moveBackward;
    // boolean moveRight;

    constructor() {
        this.moveForward = false;
        this.moveLeft = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.canJump = false;
    }

    getMoveForwardStatus() {
        return this.moveForward;
    }

    getMoveLeftStatus() {
        return this.moveLeft;
    }

    getMoveBackwardStatus() {
        return this.moveBackward;
    }

    getMoveRightStatus() {
        return this.moveRight;
    }

    getCanJumpStatus() {
        return this.canJump;
    }

    setMoveForwardStatus(status) {
        this.moveForward = status;
    }

    setMoveLeftStatus(status) {
        this.moveLeft = status;
    }

    setMoveBackwardStatus(status) {
        this.moveBackward = status;
    }

    setMoveRightStatus(status) {
        this.moveRight = status;
    }

    setCanJumpStatus(status) {
        this.canJump = status;
    }
}