import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    email: string;
    company: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, email: string, phone: string, company: string, message: string): Promise<boolean>;
}
