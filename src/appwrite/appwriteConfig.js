import { Client, Account, Databases } from "appwrite";
const client = new Client();

const appwrite_api_key = process.env.local.REACT_APP_APPWRITE_API_KEY;
const database_key = process.env.local.REACT_APP_DATABASE_APPWRITE_API_KEY;


client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(appwrite_api_key);

export const account = new Account(client);

//Database

export const databases = new Databases(client, database_key);
