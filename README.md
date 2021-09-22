# Events RestAPI Live Interview

I was given the task to complete an events RestAPI for a mobile app that should
allow the app developer to make requests to perform basic CRUD operations, however, due
to my incompetencies I are unable to complete said task. 😅

Your task is to help me not lose my job by implementing the routes and data store methods.

## Additonal Information

An event can be described as a public assembly for the purpose of celebration, education, marketing or reunion and is represented in the system as an Object which has the following structure:

```ts
Event {
 	  id: integer
    name: string
    type: 'Social' | 'Educational' | 'Entertainment' | 'Political' | 'Corporate' | 'Sport'
    details: string
  	 cost: number
    startDate: string | Date
    duration: integer
    dateCreated: string | Date
    dateUpdated: string | Date
    isDeleted: Boolean
}
```

### Business Rules

1. No two events can have the same name.

2. All event properties are **required**.

3. An event duration **cannot** lost longer than 8 hours.

4. An event **cannot** have a start date less than tommorrow.

5. Events are **not** allowed to be permanently deleted, hence a soft delete approach should be used.
