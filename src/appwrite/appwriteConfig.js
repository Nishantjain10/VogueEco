import {Client, Account, Databases} from 'appwrite'
const client = new Client();

client
    .setEndpoint('http://143.244.134.240/v1')
    .setProject('63aaeaf74d0ae48e48a5');

export const account = new Account(client)

//Database

export const databases = new Databases(client, "63aaef5036cc3edd20a3")