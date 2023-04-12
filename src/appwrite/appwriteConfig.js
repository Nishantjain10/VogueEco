import { Client, Account, Databases } from "appwrite";
const client = new Client();

const appwrite_api_key = process.env.REACT_APP_APPWRITE_API_KEY;

client
  .setEndpoint("http://appwrite.vogueeco.us/v1")
  .setProject(appwrite_api_key);

export const account = new Account(client);

//Database

export const databases = new Databases(client, "63aaef5036cc3edd20a3");
