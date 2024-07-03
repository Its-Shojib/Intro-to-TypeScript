    //Commands are:
    //tsc --init
    //tsc -w
    //tsc script.ts
    //tsc

    console.log("Hello world!");

    const country = 'Bangladesh and Myanmar';
    console.log(country);

    let Player = "Mashrafi Bin Mortaza"
    console.log(Player);
    // Player =  34; // this will produce an error message
    Player = "Tamim Iqbal Khan"
    console.log(Player);

    let age;
    console.log(age); // this will log undefined
    age = 34;
    console.log(age); // this will log 34
    age = "Mashrafi Bin Mortaza";
    console.log(age); // this will log Mashrafi Bin Mortaza without any errors

    function multiply(a: number, b: number){
        return a * b;
    }
    console.log(multiply(5, 3)); // this will log 15
    // console.log(multiply("5", 3)); // this will produce an error message because the function expects number inputs

    let myArray: number[] = [1, 2, 3, 4, 5];
    console.log(myArray); // this will log [1, 2, 3, 4, 5]
    myArray.push(6);
    console.log(myArray); // this will log [1, 2, 3, 4, 5, 6]
    myArray.pop();
    console.log(myArray); // this will log [1, 2, 3, 4, 5]
    myArray[0] = 10;
    console.log(myArray); // this will log [10, 2, 3, 4, 5]
    myArray.splice(1, 2, 7, 8);
    console.log(myArray); // this will log [10, 7, 8, 5]
    myArray.reverse();
    console.log(myArray); // this will log [8, 7, 10, 5]

    // myArray.push('hello');
    // console.log(myArray); // this will log [8, 7, 10, 5, "hello"]

    