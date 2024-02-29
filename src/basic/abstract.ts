abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getCameraMode(): void;
    getReelTime(): number {
        return 1;
    }
}

class FacebookApp extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number){
            super(cameraMode, filter);
        }
    
        getCameraMode(): void {
            console.log("camera mode")
        }
}