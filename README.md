![npm](https://github.com/apoorvsingh15/js-awesome-utils/assets/26206845/348f2405-7f6f-42ff-8485-4041e1e5d644)
# Js Awesome Utils Documentation

A lightweight util store for all your javascript needs.

## Introduction

The Validation Utils package provides a set of functions to perform common data validation tasks. It includes functions for validating email addresses, passwords, URLs, and phone numbers. Additionally, it offers a utility function for removing duplicates from an array.

## Installation

To install the Validation Utils package, use the following npm command:

```js
npm install js-awesome-utils
```

Usage

## 1. isValidEmail

- Use this function to check if an email address is valid.

```js
import { isValidEmail } from "js-awesome-utils";

const email = "example@example.com";
const isEmailValid = isValidEmail(email);
console.log(isEmailValid); // Output: true
```

## 2. isStrongPassword

- Verify if a password is strong by checking for minimum length and the inclusion of uppercase, lowercase, digit, and special characters.
- Password should be at least 8 characters long and contain at least one uppercase, one lowercase, one digit, and one special character

```js
import { isStrongPassword } from "js-awesome-utils";

const password = "StrongP@ssw0rd";
const isPasswordStrong = isStrongPassword(password);
console.log(isPasswordStrong); // Output: true
```

## 3. isValidUrl

- Check if a given URL is valid using a basic regular expression.

```js
import { isValidUrl } from "js-awesome-utils";

const url = "https://www.example.com";
const isUrlValid = isValidUrl(url);
console.log(isUrlValid); // Output: true
```

## 4. isValidPhoneNumber

- Validate a phone number using a basic regular expression.

```js
import { isValidPhoneNumber } from "js-awesome-utils";

const phoneNumber = "1234567890";
const isPhoneNumberValid = isValidPhoneNumber(phoneNumber);
console.log(isPhoneNumberValid); // Output: true
```

## 5. removeDuplicates

- Remove duplicates from an array while preserving the order of the unique elements.

```js
import { removeDuplicates } from "js-awesome-utils";

const arrayWithDuplicates = [1, 2, 3, 1, 2, 4];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
```

## 6. generateRandomString

- Parameterslength (number): The desired length of the random string to be generated.
- Return Value: A string containing random characters with a length equal to the specified length parameter.

```js
import { generateRandomString } from "js-awesome-utils";

const randomString = generateRandomString(12);
console.log(randomString);
```

## 7. formatNumber(num: number): string

- Formats the provided number by inserting commas as thousand separators.

num (number): The number to be formatted.
Returns: A string representing the formatted number with commas as thousand separators.

```js
import { formatNumber } from "js-awesome-utils";

formatNumber(1000); // Output: "1,000"
formatNumber(10000); // Output: "10,000"
formatNumber(100000); // Output: "100,000"
```

# Type Definitions

## Primitive

The Primitive type represents basic data types like string, number, boolean, null, and undefined.

## removeDuplicates<T>

The removeDuplicates function accepts an array of type T and returns an array with duplicate elements removed.

## 8. objectsAreEqual

```js
/**
 * Checks if two objects are equal by comparing their properties and values.
 *
 * @param obj1 The first object to compare.
 * @param obj2 The second object to compare.
 * @returns Returns `true` if the objects are equal, `false` otherwise.
 */
function objectsAreEqual(obj1: AnyObject, obj2: AnyObject): boolean {
  // Implementation details...
}
```

## Parameters:

obj1: The first object to compare.
obj2: The second object to compare.
Returns:
Returns true if the objects are equal (i.e., they have the same properties with the same values), false otherwise.
Example Usage:

```js
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(objectsAreEqual(obj1, obj2)); // true
console.log(objectsAreEqual(obj1, obj3)); // false
```

## Notes:

This function performs a deep comparison of objects, checking each property and its value recursively.
The function returns true if both objects are null or undefined.
If the objects have different numbers of properties, they are considered unequal.
Properties with undefined values are considered equal to non-existent properties.
This function provides type safety for TypeScript projects.
It's particularly useful for comparing configurations, state objects, or any other plain JavaScript objects.

## 9. Remove Spaces

```js
/**
 * Removes all spaces from a given string.
 * @param input The input string from which spaces are to be removed.
 * @returns A new string with all spaces removed.
 */
function removeSpaces(input: string): string {
  // Use regular expression to replace all spaces with an empty string
  return input.replace(/\s/g, "");
}
```

## Function Description:

- Function Name: removeSpaces
  Description: This function removes all spaces from a given string.
- Parameters:
  input (string): The input string from which spaces are to be removed.
- Returns: A new string with all spaces removed.

```js
const stringWithSpaces = "This is a string with spaces";
const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces); // Output: "Thisisastringwithspaces"
```

## Note:

This function utilizes the replace() method with a regular expression / /g to match all occurrences of spaces (\s) globally (g) and replaces them with an empty string, effectively removing all spaces from the input string.

# Tests

```js
npm run test
```

## Contributing

If you encounter issues or have suggestions for improvements, please open an issue on GitHub.

## License

This package is licensed under the MIT License.
