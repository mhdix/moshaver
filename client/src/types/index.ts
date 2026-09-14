export interface User {
    _id?: string;
    name?: string;
    email?: string;
    role?: string;
    password?: string;
    phoneNumber?: number;
    createdAt?: string;
    updatedAt?: string;
    status?: "active" | "inactive";
}