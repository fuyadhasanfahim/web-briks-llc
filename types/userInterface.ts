import { Types } from 'mongoose';

interface IUser {
    _id: Types.ObjectId;
    userId: string;
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    country: string;
    address: string;
    company: string;
    role:
        | 'superAdmin'
        | 'Admin'
        | 'accountant'
        | 'teamManager'
        | 'teamLeader'
        | 'user';
    password: string;
    profileImageUrl: string;
    isEmailVerified: boolean;
}

export default IUser;
