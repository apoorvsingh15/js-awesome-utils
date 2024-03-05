# Js Awesome Utils Documentation

## Introduction

The Validation Utils package provides a set of functions to perform common data validation tasks. It includes functions for validating email addresses, passwords, URLs, and phone numbers. Additionally, it offers a utility function for removing duplicates from an array.

Installation
To install the Validation Utils package, use the following npm command:

```js
npm install js-awesome-utils
```

Usage

## 1. isValidEmail

- Use this function to check if an email address is valid.

```js
import { isValidEmail } from "validation-utils";

const email = "example@example.com";
const isEmailValid = isValidEmail(email);
console.log(isEmailValid); // Output: true
```

## 2. isStrongPassword

- Verify if a password is strong by checking for minimum length and the inclusion of uppercase, lowercase, digit, and special characters.

```js
import { isStrongPassword } from "validation-utils";

const password = "StrongP@ssw0rd";
const isPasswordStrong = isStrongPassword(password);
console.log(isPasswordStrong); // Output: true
```

## 3. isValidUrl

- Check if a given URL is valid using a basic regular expression.

```js
import { isValidUrl } from "validation-utils";

const url = "https://www.example.com";
const isUrlValid = isValidUrl(url);
console.log(isUrlValid); // Output: true
```

## 4. isValidPhoneNumber

- Validate a phone number using a basic regular expression.

```js
import { isValidPhoneNumber } from "validation-utils";

const phoneNumber = "1234567890";
const isPhoneNumberValid = isValidPhoneNumber(phoneNumber);
console.log(isPhoneNumberValid); // Output: true
```

## 5. removeDuplicates

- Remove duplicates from an array while preserving the order of the unique elements.

```js
import { removeDuplicates } from "validation-utils";

const arrayWithDuplicates = [1, 2, 3, 1, 2, 4];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4]
```

## Type Definitions

## Primitive

The Primitive type represents basic data types like string, number, boolean, null, and undefined.

## removeDuplicates<T>

The removeDuplicates function accepts an array of type T and returns an array with duplicate elements removed.

## Contributing

If you encounter issues or have suggestions for improvements, please open an issue on GitHub.

## License

This package is licensed under the MIT License.
