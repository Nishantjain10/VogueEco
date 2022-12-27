import {Client, Account, Databases} from 'appwrite'
const client = new Client();

client
    .setEndpoint('https://157.245.101.77/v1/')
    .setProject('63aa9d800c7370ab6efb');


export const account = new Account(client)

//Database

export const databases = new Databases(client, "63aa9d800c7370ab6efb")