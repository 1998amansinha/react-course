const configuration = {

    // Converting Id into String
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),                                // MegaProject
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),                   // MegaProject
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),                 // Blog
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),             // Articles
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)                      // images

}

export default configuration ;