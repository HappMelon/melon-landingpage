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
