import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63a6dcf0b03450648cf0")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "63a6dcf0b03450648cf0")