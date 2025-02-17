
//iterface for the address
export interface Address {
    street: string;
    city: string;
    zipCode: string;
  }
 
//interface for the user
export interface User {
    name: string;
    email: string;
    address: Address; //nested interface for the address
}