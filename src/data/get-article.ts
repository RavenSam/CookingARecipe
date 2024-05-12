import { Query } from "appwrite"
import { db } from "../lib/appwrite"

export type Article = {
	title: string
	slug: string
	image_gen_id: string
	image: string
	image_id: string
	content: string
	excerpt: string
	$id: string
	$createdAt: string
	$updatedAt: string
	$permissions: any[] // Assuming an array of any for simplicity
	$databaseId: string
	$collectionId: string
}

export type ArticlesResponse = {
	total: number
	documents: Article[]
}

export const getArticleBySlug = async (slug: string) => {
	const article: ArticlesResponse = await db.listDocuments(
		import.meta.env.DATABASE_ID!,
		import.meta.env.COLLECTION_ID!,
		[Query.equal("slug", slug)]
	)
	return article
}

/**
 *
 * @param limit the limit number of documents fetch
 * @default 150 set limit to 50 documents
 * @returns
 */
export const getArticles = async (limit = 999) => {
	const articles: ArticlesResponse = await db.listDocuments(
		import.meta.env.DATABASE_ID!,
		import.meta.env.COLLECTION_ID!,
		[Query.limit(limit)]
	)
	return articles
}

/**
 *
 * @param limit the limit number of documents fetch
 * @default 10 set limit to 10 documents
 * @returns
 */
export const getLatestArticles = async (limit = 10) => {
	const articles: ArticlesResponse = await db.listDocuments(
		import.meta.env.DATABASE_ID!,
		import.meta.env.COLLECTION_ID!,
		[Query.limit(limit), Query.orderDesc("$createdAt")]
	)
	return articles
}

// export const getRandomArticles = async (limit = 10) => {
// 	const articles: ArticlesResponse = await db.listDocuments(
// 		import.meta.env.DATABASE_ID!,
// 		import.meta.env.COLLECTION_ID!,
// 		[Query.limit(limit), Query.offset(random(fromTableLength()))]
// 	)
// 	return articles
// }
