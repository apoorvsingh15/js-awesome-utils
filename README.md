[![npm](https://github.com/apoorvsingh15/js-awesome-utils/assets/26206845/b55bfbef-0dae-49fb-bdf9-e6fcb6c2dec5)](https://www.npmjs.com/package/js-awesome-utils)

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

# Tests

```js
npm run test
```

## Contributing

If you encounter issues or have suggestions for improvements, please open an issue on GitHub.

## License

This package is licensed under the MIT License.
