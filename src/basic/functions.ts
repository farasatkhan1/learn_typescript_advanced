function addNumber(num1: number, num2: number) {
    return num1 + num2;
}

function lowerToUpperCase(val: string) {
    return val.toUpperCase();
}

function signUp(name: string, email: string, password: string, isPaid: boolean = false): boolean {
    
    return true;
}

function login(email: string, password: string): boolean {
    return true;
}


const auth = (authToken: string) : string => {
    return authToken;
}


function isSubscribed(str: string) : void {
    console.log(str);
}

// to handle errors more gracefully use never type when returning error
function handleErrors(msg: string) : never {
    throw new Error(msg);
}