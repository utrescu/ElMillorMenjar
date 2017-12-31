export class UserProfile {
    public anonymous: boolean;
    public email: string;
    public emailVerified: boolean;
    public name: string;
    public profileImageURL: string;
    public refreshToken: string;
    public uid: string;
}

export class User {
    public email: string;
    public password: string;
}