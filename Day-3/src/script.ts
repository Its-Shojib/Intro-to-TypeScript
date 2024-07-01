//Commands are:
//tsc --init
//tsc -w
//tsc script.ts
//tsc

let myFun: Function;
myFun = () => {
    console.log("Hello world!");
}

myFun();

// myFun = 5; //This will provide an error message;


let paraMeteresFunc = (a: number, b: number, c?: string) => {
    console.log(a + b);
    if (c) {
        console.log(c);
    }
}
paraMeteresFunc(3, 4, 'Optional variable');


let returnTypes = (a: number, b: number, c?: string): number => {
    if(c){
        console.log(c);
    }
    return a + b;
}

console.log(returnTypes(5, 7));