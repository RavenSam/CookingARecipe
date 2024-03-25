import { Client, Databases } from "appwrite"

export const client = new Client()
export const db = new Databases(client)

client
	.setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
	.setProject("65f91281c0ebfd26c496") // Your project ID
