// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const catsCopy1 = [...cats, name];
    return catsCopy1;
}

function prependCat(name){
    const catsCopy2 = [name, ...cats];
    return catsCopy2;
}

function removeLastCat(){
    const catsCopy3 = cats.slice(0, -1);
    return catsCopy3;
}

function removeFirstCat(){
    const catsCopy4 = cats.slice(1);
    return catsCopy4;
}