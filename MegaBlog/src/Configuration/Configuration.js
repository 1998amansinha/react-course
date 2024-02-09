const conf = {

    // Appwrite base URL
    // The URL where your Appwrite backend is hosted
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

    // Appwrite Project ID
    // The unique identifier for your Appwrite project
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    // Appwrite Database ID
    // The ID of the database within your Appwrite project
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    // Appwrite Collection ID
    // The ID of the collection within your Appwrite database where articles are stored
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    // Appwrite Bucket ID
    // The ID of the storage bucket within Appwrite where images are stored
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default conf
