export const formatDateTime = (date: Date) =>
	new Intl.DateTimeFormat('ru', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	}).format(date);

export const formatMonth = (date: Date) =>
	new Intl.DateTimeFormat('ru', {
		month: 'long',
	}).format(date);
