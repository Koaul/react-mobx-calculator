import {observable, action, decorate} from 'mobx';

class Value {
    constructor(){
        this.values = [];
    }
    NumberAction(symbol) {
        switch(symbol){
            case '=':
                //eval is evil, don't wanna make this code harder
                this.values=[(eval(this.values.join('')))];
                break;
            case 'C':
                this.values.splice(0,this.values.length);
                break;
            default:
                this.values.push(symbol);
                break;
        }
    }
}

decorate(Value, {
    values: observable,
    NumberAction: action
});

export default Value;