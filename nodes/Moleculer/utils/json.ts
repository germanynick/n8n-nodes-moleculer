export class Json {
	public static parse(value: any) {
		return typeof value === 'string' ? JSON.parse(value) : value;
	}
}
