

import { serializable, alias, object, list, primitive } from 'serializr';

export class Todo {

	@serializable(alias('title', primitive()))
	title?: string[];


	

	



}