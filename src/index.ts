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


export {
  isValidEmail,
  isStrongPassword,
  isValidUrl,
  isValidPhoneNumber,
  removeDuplicates,
  generateRandomString
}