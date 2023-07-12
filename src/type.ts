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
	gas: number
	hash: string
	nonce: number
	timeStamp: number
	to: string
	value: number
}
