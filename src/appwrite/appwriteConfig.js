import {Client, Account, Databases} from 'appwrite'
const client = new Client();

client
    .setEndpoint('http://157.245.101.77/v1')
    .setProject('63aa9d800c7370ab6efb');


export const account = new Account(client)

//Database

export const databases = new Databases(client, "63a6dcf0b03450648cf0")