class Animal {
    move () {
        console.log("move");
    }
}

class Cow extends Animal {
    moo() {
        console.log ("In Moo function");
    }
}

const cow:Cow = new Cow();
cow.move();
cow.moo();