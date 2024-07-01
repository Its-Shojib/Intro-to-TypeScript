    //Commands are:
    //tsc --init
    //tsc -w
    //tsc script.ts
    //tsc

    //DataTypes
    let a:string = "Md Shojib Hossain";
    let b: number = 25;
    let c: boolean = true;
    let d: any = "Hello World";
    console.log(a, b, c, d);

    //Arrays
    let e: (string | number | boolean)[] = [];
    e = ["Md Shojib Hossain", 25, true];
    console.log(e);

    //Objects
    let f: { 
        name: string, 
        age: number, 
        isStudent: boolean 
    };
    f = { 
        name: "Md Shojib Hossain", 
        age: 24, 
        isStudent: true 
    };
    console.log(f);

    //Functions
    function greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }
    greet("Md Shojib Hossain");

    function sum(x: number, y: number): number {
        return x + y;
    }
    console.log(sum(10, 20));


    //Union Types
    let x:(string | number)[] = [];
    x.push("Hello");
    x.push(10);
    console.log(x);

    let y: string | number;
    y = "Hello";
    console.log(y);
    y = 10;
    console.log(y);

    //Type Inference: Any
    let z: any;
    z = "Hello";
    console.log(z);
    z = 10;
    console.log(z);
    z={
        name: "Md Shojib Hossain",
        age: 24
    }
    console.log(z);