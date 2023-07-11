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
