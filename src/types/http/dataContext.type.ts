import { type ImagesDatum } from './generic.type';
import { type About, type Contacts } from './homePage.type';

export interface DataContextType {
	contacts: Contacts;
	about: About;
	promotion: ImagesDatum[];
	licensen: ImagesDatum[];
}
