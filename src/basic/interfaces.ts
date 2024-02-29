interface IUser {
    readonly _id: number,
    email: string,
    password: string,
    googleId?: string,
    startTrial: () => string,
    endTrial(): string, // alternative way
    getCoupon(coupon: string): string
}

// reopening of interfaces
interface IUser {
    githubId: string,
}

interface IAdmin extends IUser {
    role: "admin" | "administrator"
}

interface ISuperAdmin extends IUser, IAdmin {
    role: "administrator"
}

const benUser: IUser = {
    _id: 1, 
    email: "ben@gmail.com", 
    password: "password",
    startTrial: () => {
        return "trial started"
    },
    endTrial: () => {
        return "trial ended"
    },
    getCoupon: (coupon) => {
        return coupon;
    },
    githubId: "github"
}

interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    createStory(): void {
        console.log("Story was created")
    }
}