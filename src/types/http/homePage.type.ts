import { type GenericResponse, type Images } from './generic.type';

export interface HomePageProps {
	contacts: Contacts;
	about: About;
	promotion: Promotion;
	licensen: Licensen;
}

export interface Contacts {
	phones: string[];
	address: string;
	workingHours: {
		monSat: string;
		sun: string;
	};
	additionalSchedule: string[];
}

export interface ContactsResponse extends GenericResponse<Contacts> {}

export interface About {
	description: string;
}

export interface AboutResponse extends GenericResponse<About> {}

export interface Promotion {
	images: Images;
}

export interface PromotionResponse extends GenericResponse<Promotion> {}

export interface Licensen {
	images: Images;
}

export interface LicensenResponse extends GenericResponse<Licensen> {}
