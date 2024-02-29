const Users = {
    name: "ben",
    email: "ben@gmail.com",
    isActive: true
}

function createUser(User: {name: string, email: string}): {name: string, email: string} {
    return User;
}

console.log(createUser(Users));