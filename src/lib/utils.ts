import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Web3 from "web3"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function RandomHexColor(): string {
	let letters = "0123456789ABCDEF"
	let color = "#"
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}

export function GenerateRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function Tovalue(v: string): string {
	const value = Web3.utils.fromWei(v, "ether")
	return value
}

export function CalculateDate(date: string): string{
	const now = new Date()
	const diff = Number(now) - Number(new Date(date))

	const seconds = Math.floor(diff / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)
	const weeks = Math.floor(days / 7)
	const months = Math.floor(days / 30)
	const years = Math.floor(days / 365)

	if (seconds < 60) {
		return `${seconds} seconds ago`
	} else if (minutes < 60) {
		return `${minutes} minute ago`
	} else if (hours < 24) {
		return `${hours} hour ago`
	} else if (days < 7) {
		return `${days} days ago`
	} else if (weeks < 4) {
		return `${weeks} weeks ago`
	} else if (months < 12) {
		return `${months} moons ago`
	} else {
		return `${years} years ago`
	}
}
