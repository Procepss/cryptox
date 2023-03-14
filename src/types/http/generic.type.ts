export interface GenericResponse<ResponseData> {
	data: Array<Datum<ResponseData>>;
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}

export interface Datum<ResponseData> {
	id: number;
	attributes: AttributesMeta & ResponseData;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type AttributesMeta = {
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
};

/**
 * Страпи присылает много полезной информации о картинках.
 *
 * @export
 * @interface Images
 */
export interface Images {
	data: ImagesDatum[];
}

export interface ImagesDatum {
	id: number;
	attributes: ImageAttributes;
}

export interface ImageAttributes {
	name: string;
	alternativeText: null; // нужное
	caption: null;
	width: number; // нужно от layout shift
	height: number; // нужно от layout shift
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string; // сама картинка
	previewUrl: null;
	provider: string;
	provider_metadata: null;
	createdAt: string;
	updatedAt: string;
}

export interface Formats {
	thumbnail: Resizes;
	large?: Resizes; // может и не быть. Страпи сам решает
	medium: Resizes;
	small: Resizes;
}

export interface Resizes {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: null;
	width: number;
	height: number;
	size: number;
	url: string;
}
