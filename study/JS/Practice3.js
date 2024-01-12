/*
const me = {
    name : '한재현',
    address : '제주도 제주시 인다 1길',
    phoneNum : '010-8000-0000',
    canWalk : function(){
        console.log('재현이가 걷는다.');
    },
    teaching : function(student){
        student.levelUp();
    }
}

const ormi = {
    level: 1,
    levelUp : function(){
        this.level++;
    }
}

function NewFactory(name){
    this.name = name;
    this.sayYourName = function(){
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

function NewFactory2(name){
    this.name = name;
}

NewFactory2.prototype.sayYourName = function(){
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}
 */

``` 프로토타입 적용 ```
function MakeMe(name){
    this.name = name;
}

MakeMe.prototype.saymyName = function(){
    console.log('my name is ${this.name}. Sir.')
}
