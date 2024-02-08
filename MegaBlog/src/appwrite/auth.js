import Configuration from "../Configuration/Configuration"
 // Import configuration object from Configuration module
import { Client, Account, ID } from "appwrite"; // Import Client Account and ID classes from the Appwrite SDK

// Define authService class
export class AuthService {
    client = new Client(); // Create a new instance of the Client class
    account; // Declare account property

    // Constructor method - initializes client and account properties
    constructor() {
        // Configure the Appwrite client
        this.client
            .setEndpoint(Configuration.appwriteUrl) // Set the API endpoint using configuration object
            .setProject(Configuration.appwriteProjectId); // Set the project ID using configuration object
        
        // Initialize account property with a new instance of Account class using the configured client
        this.account = new Account(this.client);
    }

    // For Creating Account
    async createAccount ({email, password, name}) {
        try {
            const userAccount = await this.account(ID.unique(), email, password, name) // Account Creation
            if(userAccount){ // If account is created directly login of user .
                return this.signIn(email,password)
            }
        } catch (error) {
            throw error ;
        }
    }

    // For login Purpose
    async signIn ({email, password}) {
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error ;
        }
    }

    // For getting Current login Details
    async getCurrentUser () {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
    }

    //For Current User Logout
    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
        }
    }

}

// Create a new instance of authService class
const authService = new AuthService();

export default authService