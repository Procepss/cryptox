export function toNumber(value: string) {
	const parsed = parseInt(value, 10);
	return Number.isNaN(parsed) ? 0 : parsed;
}
