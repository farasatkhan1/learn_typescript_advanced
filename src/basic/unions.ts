let score: number | string = "55";

score = 33;

type User = {
    user: string,
    password: string,
}

type Admin = {
    username: string,
    password: string,
}

const ben: User | Admin = {
    username: "ben",
    password: "hello"
}


function getDBid(id: number | string) {
    if (typeof id === "number") {
        return `${id}`
    } else {
        return `${id.toUpperCase()}`
    }
}

getDBid(2);


const data3: (string | number)[] = [1, 2, 3, "4"];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"