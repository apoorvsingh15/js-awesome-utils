// basic email validation - example@example.com
function isValidEmail(email: string): boolean {
  // Regular expression for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Strong password checker
function isStrongPassword(password: string): boolean {
  // Password should be at least 8 characters long and contain at least one uppercase, one lowercase, one digit, and one special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordRegex.test(password);
}

// check if the website url is valid
function isValidUrl(url: string): boolean {
  // Basic URL validation using a regular expression
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  return urlRegex.test(url);
}

// check if the phone number is valid

function isValidPhoneNumber(phoneNumber: string): boolean {
  // Regular expression for a basic phone number validation
  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phoneNumber);
}
function removeDuplicates<T>(arr: T[]): T[] {
  const uniqueSet = new Set<string | number | symbol>();
  const result: T[] = [];

  for (const item of arr) {
    const stringRepresentation = stringifyForComparison(item);
    if (!uniqueSet.has(stringRepresentation)) {
      uniqueSet.add(stringRepresentation);
      result.push(item);
    }
  }

  return result;
}

function stringifyForComparison(value: unknown): string {
  if (typeof value === 'object' && value !== null) {
    // Handle objects and arrays by JSON.stringify
    return JSON.stringify(value);
  } else {
    // For primitive values, use the value itself
    return String(value);
  }
}

function generateRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to check if two objects are equal
// Interface for generic objects
interface AnyObject {
  [key: string]: any;
}

// Function to check if two objects are equal
function objectsAreEqual(obj1: AnyObject, obj2: AnyObject): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null && obj2 === null) {
    return true;
  }

  // Check if one object is null or undefined
  if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
    return false;
  }

  // Check if both objects have the same number of properties
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Check if all properties of obj1 are present in obj2 and have the same values
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
}

function removeSpaces(input: string): string {
  // Use regular expression to replace all spaces with an empty string
  return input.replace(/\s/g, '');
}

function isPalindrome(str: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  // Check if the cleaned string equals its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}



export {
  isValidEmail,
  isStrongPassword,
  isValidUrl,
  isValidPhoneNumber,
  removeDuplicates,
  generateRandomString,
  formatNumber,
  objectsAreEqual,
  removeSpaces,
  isPalindrome
}