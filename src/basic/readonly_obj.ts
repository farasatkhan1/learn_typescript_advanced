
type UserCredentials = {
    readonly _id: string, // readonly cannot be assigned later on
    name: string,
    email: string,
    password: string,
    credCardDetails?: number // ? is for optional
}

const user: UserCredentials = {
    _id: "1234",
    name: "ben",
    email: "ben@gmail.com",
    password: 'password'
}

// below is not possible because _id is read only
// user._id = "1234";


type CardNumber = {
    cardnumber: string,
}

type CardDate = {
    carddate: string,
}

type CardDetails = CardNumber & CardDate & {
    cvv: number
}