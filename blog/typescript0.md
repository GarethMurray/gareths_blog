---
title: Codereview.ts[0]
date: 2022-05-20
excerpt: More than the basics
---

## I really like TS (when I know what I'm doing)
My pet peeve lately are tutorials that teach code which is not typesafe. I don't mind tutorials written in JS, in fact I think it's often a better option to avoid any cognitive overhead when learning a new topic.

**But**, I've seen *so* many tutorial where unsafe actions are leveraged.

I just needed to get that off of my chest.

### Code Review

Recently I was shown this snippet of code

```ts
export const removeFromArr = <T, K extends keyof T>(
  elementToRemove: T,
  arrayToRemoveElementFrom: T[] | undefined,
  identifyingField?: K // K is limited to the keys of type T
): T[] => {
  // If there is nothing in the array, return empty array
  if (!arrayToRemoveElementFrom) return [];

  // If there's a field, we try to avoid checking by referrence and value
  if (identifyingField) {
    // If the element to remove does not have a 
    // value at the field to check we remove nothing
    if (!elementToRemove[identifyingField]) return arrayToRemoveElementFrom;
    // Else we remove by that field
    return arrayToRemoveElementFrom.filter(
      (element) =>
        element[identifyingField] !== elementToRemove[identifyingField]
    );
  }
  // Lastly remove by reference and value
  return arrayToRemoveElementFrom.filter(
    (element) => element !== elementToRemove
  );
};
```

There is nothing wrong with this of course. But it's possibly more verbose than it could be 

Additionally, I feel as though this function is trying to solve two different problems. Removing an element from an array, and removing an object with a specifc key:value pair from an array. So firstly, I would prefer these to be two different functions.

This way, the identifying field no longer needs to be optional. 

As we are explicitly defining the array argument as an array, and not undefined, we can remove the guard clause, similarly for the optional identifying field

```ts
export const removeFromArr = <T>(
  arrayToRemoveElementFrom: T[],
  elementToRemove: T,
): T[] => arrayToRemoveElementFrom.filter((element) => element !== elementToRemove)

export const removeFromArr = <T, K extends keyof T>(
  arrayToRemoveElementFrom: T[],
  elementToRemove: T,
  identifyingField: K
): T[] => {

    // If the element to remove does not have a 
    // value at the field to check we remove nothing
    if (!elementToRemove[identifyingField]) return arrayToRemoveElementFrom;
    // Else we remove by that field
    return arrayToRemoveElementFrom.filter(
      (element) =>
        element[identifyingField] !== elementToRemove[identifyingField]
    );

};
```

This is looking a lot cleaner, however I still think there is room for improvement. If ```elementToRemove[idendifyingField] === 0``` this function will do nothing, so we can now improve the guard clause.

```ts
export const removeObjectWithKeyFromArr = <T, K extends keyof T>(
  arrayToRemoveElementFrom: T[],
  elementToRemove: T,
  identifyingField: K
): T[] => {
    // We instead ckeck to see if the key exists as a guard
    if (identifyingField in elementToRemove){
	    return arrayToRemoveElementFrom.filter(
	      (element) => element[identifyingField] !== elementToRemove[identifyingField]
	    )
  	} else {
    // And then handle the error in a meaningful way
    console.error(`Key ${identifyingField} does not exist on object: ",
      elementToRemove`)
    return arrayToRemoveElementFrom;
	}
}
```

After more consideration, this guard clause is pointless because ```identifyingField``` *has* to exist as a key of ```elementToRemove``` and as such, the array can be of any type. Additionally, interacting with this function can be made much simpler by specifying a key to check and a value to find in that key. Now instead of calling this function in the pattern of

```ts
removeFromArr(arrayToRemoveElementFrom, elementToRemove, identifyingField)
```
We can call it as
```ts
removeObjectFromArrByKey(array, key, value)
```

So my final  snippet has ended up as 

```ts
export const removeFromArr = <T>(
  arrayToRemoveElementFrom: T[],
  elementToRemove: T
): T[] =>
  arrayToRemoveElementFrom.filter((element) => element !== elementToRemove)

export const removeObjectFromArrByKey = <T, K extends keyof T>(
  arrayToRemoveElementFrom: T[], // an array of generic types
  key: K, // The key of the element to remove
  value: T[K] // A value from the one item in the array 
): T[] => arrayToRemoveElementFrom.filter((e) => e[key] !== value)

const person1 = { name: "Mike", age: 32 }
const person2 = { name: "Steve", age: 25 }
const person3 = { name: "James", age: 35 }
const myArr = [person1, person2, person3]

removeObjectFromArrByKey(myArr, "age", 32) // valid
removeObjectFromArrByKey(myArr, "name", "mike") // valid
removeObjectFromArrByKey(myArr, "person", "age") // error, the key is invalid
removeObjectFromArrByKey(myArr, "age", "55") // error, the value is of the wrong type
```
I think this is a good example of how to use generics to both enforce better type safety, but also make code more readable and maintainable. Most importantly, how slippery a slope it can be to write overly complex functions. I am a huge advocate for simplicity and I think this snippet is testament to benefit of trying to make code as easy to understand as possible.

### No Unchecked Indexed Access

One other consideration is removing a key:value pair when the value is undefined. While I don't think this is an issue, while running through this, I also learned about the, ```noUncheckedIndexedAccess``` flag, which allows objects, or arrays to describe *values* as potentially undefined.

This does something pretty fun, but not directly related to our use case here

###### Consider this
```ts
type ObjOfArrays<T> = Record<string, any[]>

const studentSubjects: ObjOfArrays<string> = {
	names: ["Jonh", "Henry", "Chris"],
	subjects: ["Maths", "Science", "Art"],
}  

studentSubjects.names.push('Reginald')
```

```obj2.test3``` does not exist, but our typing allows us to call an array method on it. To mitigate this risk, we can add an undefined union, which does something really cool, if you type out the last line again, TS will automatically add optional chaining in

```ts
type ObjOfArrays<T> = Record<string, any[] | undefined>

const studentSubjects: ObjOfArrays<string> = {
	names: ["Jonh", "Henry", "Chris"],
	subjects: ["Maths", "Science", "Art"],
}  

studentSubjects.names?.push('Reginald')
```

But needing to add an undefined onto each case where you have a similar use case can be inconvenient.

```json
// tsconfig.json
{
	"compilerOptions": {
		...
		"noUncheckedIndexedAccess": false
	},
}

```
Now the TS compiler will help us confirm or check if values are defined, without requiring an undefined union

```ts
type ObjOfArrays<T> = Record<string, any[]>

const studentSubjects: ObjOfArrays<string> = {
	names: ["Jonh", "Henry", "Chris"],
	subjects: ["Maths", "Science", "Art"],
}  

studentSubjects.names?.push('Reginald')

// or
if (studentSubjects.names) studentSubjects.names.push('Reginald')
```
