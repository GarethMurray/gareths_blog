---
title: Codereview.ts[0]
date: 2022-05-20
excerpt: More than the basics
---

## I really like TS (when I know what I'm doing)
My pet peeve lately are tutorials that teach code which is not typesafe. I don't mind tutorials written in JS, in fact I think it's often a better option to avoid any cognitive overhead when learning a new topic.

**But**, I've seen *so* many tutorial where unsafe actions are leveraged.

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
    // If the element to remove does not have a value at the field to check we remove nothing
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

Additionally, I feel as though this function is trying to solve two different purposes. Removing an element from an array, and removing an object with a specifc key:value pair from an array. This way the identifying field is no longer optional. As we are explicitly defining the array argument as an array, and not undefined, we can remove the guard clause, similarly for the optional identifying field

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

    // If the element to remove does not have a value at the field to check we remove nothing
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
	console.error(`Key ${identifyingField} does not exist on object: ", elementToRemove)
	return arrayToRemoveElementFrom;
	} 
}
```

After more consideration, this guard clause is pointless because ```
identifyingField
``` *has* to exist as a key of ```
elementToRemove```

So my final  snippet has ended up as 

```ts
export const removeFromArr = <T>(
  arrayToRemoveElementFrom: T[],
  elementToRemove: T,
): T[] => 
	arrayToRemoveElementFrom.filter((element) => 
		element !== elementToRemove)


export const removeObjectWithKeyFromArr = <T, K extends keyof T>(
  arrayToRemoveElementFrom: T[],
  elementToRemove: T,
  identifyingField: K
): T[] => 
	arrayToRemoveElementFrom.filter((element) =>  
		element[identifyingField] !== elementToRemove[identifyingField])
```





One other consideration is removing a key:value pair when the value is undefined. While I don't think this is an issue, while running through this, I also learned about the, ```noUncheckedIndexedAccess``` flag, which allows objects, or arrays to describe *values* as potentially undefined.

This does something pretty fun, but not directly related to our use case here

###### Consider this
```ts
type TObj<T> = Record<string, any[]>

const obj2: TObj<string> = {
	test: ["test"],
	test2: ["test2"],
}  

obj2.test3.push('test3')
```

```obj2.test3``` does not exist, but our typing allows us to call an array method on it. To mitigate this risk, we can add an undefined union, which does something really cool, if you type out the last line again, TS will automatically add optional chaining in

```ts
type TObj<T> = Record<string, any[] | undefined>

const obj2: TObj<string> = {
	test: ["test"],
	test2: ["test2"],
}  

obj2.test3?.push('test3')
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
type TObj<T> = Record<string, any[]>

const myObj: TObj<string> = {
	test: ["test"],
	test2: ["test2"],
}  

myObj.test3?.push('test3')

// or
if (myObj.test3) myObj.test3.push('test3')
```
