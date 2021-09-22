/**
 * EventDataStore
 * An in memory data store that provides CRUD operation
 * for an event resource.
 *
 * An event should take the following structure:
 * type Event {
 * 		id: integer
 *    name: string
 *    type: 'Social' | 'Educational' | 'Entertainment' | 'Political' | 'Corporate' | 'Sport'
 *    details: string
 * 		cost: number
 *    startDate: string | Date
 *    duration: integer
 *    dateCreated: string | Date
 *    dateUpdated: string | Date
 *    isDeleted: Boolean
 * }
 */
export default class EventDataStore {
	constructor() {
		this._events = [];
	}

	findOne(id) {}

	findAll(search) {}

	create(event) {}

	update(id, event) {}

	delete(id) {}
}
