import { CharacterEntity } from "crossbell"
export interface Album {
	id: number
	userId: number
	title: string
}

export interface Photo {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

export interface Follow {
	count: number
}

export interface Character extends CharacterEntity {}

export interface Tx {
	result: Result[]
}

export interface Result {
	blockHash: string
	blockNumber: number
	from: string
	input: string
	gas: number
	hash: string
	nonce: number
	timeStamp: number
	to: string
	value: string
}

export interface ArticleResult {
	list: Article[]
}
export interface Article {
	characterId: number
	noteId: number
	createdAt: string
	deleted: boolean
	locked: boolean
	metadata: ArticleMeta
}

export interface ArticleMeta {
	content: ArticleContent
}

export interface ArticleContent {
	tags: string[]
	title: string
	content: string
	sources: string[]
	summary: string
	authors?: string[]
	date_published: string
}

export interface HotTopics {
	list: string[]
	count: number
}

export interface BettingNote {
	count: number
	cursor: string
}
