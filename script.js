class Calculator {
    constructor(x,y) {
        if (this.isValidNumber(x) && this.isValidNumber(y)) {
            this.x = x;
            this.y = y;
        } else {
            throw new Error('Ошибка');
        }
 
        this.setX = this.setX.bind(this);
        this.setY = this.setY.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
        this.isValidNumber = this.isValidNumber.bind(this);
    }
    
    setX(num) {
        if (this.isValidNumber(num)){
            this.x = num;
        } else {
            throw new Error('Ошибка')
        }
    }

    setY(num) {
        if (this.isValidNumber(num)){
            this.y = num;
        } else {
            throw new Error('Ошибка')
        }
    }
 
    logSum() {
        console.log(this.x + this.y);
    }

    logMul() {
        console.log(this.x * this.y);
    }

    logSub() {
        console.log(this.x - this.y);
    }

    logDiv() {
        if (this.y !== 0) {
          console.log(this.x / this.y);
        } else {
          throw new Error('Ошибка');
        }
    }    

    isValidNumber(num) {
        return typeof num === 'number' && isFinite(num) && !isNaN(num);
    }
}
