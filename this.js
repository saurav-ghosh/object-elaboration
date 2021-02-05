const myObj = {
    name: 'kuddus ali',
    getFullName: function(){
        console.log(this);
        return 'Mr.' + this.name;
    } 
}

const anotherObj = {
    name: 'biddut ali',
};

anotherObj.getFullName = myObj.getFullName;
console.log(anotherObj.getFullName); 
myObj.getFullName();
anotherObj.getFullName();