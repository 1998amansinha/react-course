import { configuration } from "../Configuration/Configuration";
import { Client, Id, Databases, Query, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(configuration.appwriteUrl)
      .setProject(configuration.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        configuration.appwriteDatabaseId,
        configuration.appwriteCollectionId,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        configuration.appwriteDatabaseId,
        configuration.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        configuration.appwriteDatabaseId,
        configuration.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      return false;
    }
  }

  async getDocument(slug) {
    try {
      await this.databases.getDocument(
        configuration.appwriteDatabaseId,
        configuration.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getDocument :: error", error);
      return false;
    }
  }

  async listDocument() {
    try {
      await this.databases.listDocuments(
        configuration.appwriteDatabaseId,
        configuration.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("Appwrite service :: getDocument :: error", error);
      return false;
    }
  }

  // File Upload Service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        configuration.appwriteBucketId,
        Id.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: getDocument :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(configuration.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: getDocument :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    this.bucket.getFilePreview(
        configuration.appwriteBucketId ,
        fileId
    )
  }


}

const service = new Service();

export default Service;
