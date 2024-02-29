type Credentials = {
    email: string,
    password: string
}

const signup = (user: Credentials) : boolean => {
    if (user) {
        return true;
    }
    return false;
}