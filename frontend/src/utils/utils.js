/**
 * Formats a given amount into Indian Rupee currency format.
 * 
 * @param {string|number} amount - The amount to be formatted, can be a string or a number.
 * @returns {string} - The formatted currency string.
 * @throws {TypeError} - If the amount cannot be converted to a valid number.
 */
export function formatAmount(amount) {
    // Attempt to convert the input to a number
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

    // Check if the conversion was successful and the result is a valid number
    if (isNaN(numericAmount)) {
        throw new TypeError('Amount must be a valid number or a string representing a number');
    }

    // Create a new instance of Intl.NumberFormat for Indian currency
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    // Format the amount and return
    return formatter.format(numericAmount);
}

/**
 * Converts an ISO 8601 date string to a readable format MM/DD/YYYY.
 * 
 * @param {string} isoDate - The ISO 8601 date string to be converted.
 * @returns {string} - The formatted date string in MM/DD/YYYY format.
 * @throws {Error} - If the input is not a valid date string.
 */
export function formatDate(isoDate) {
    // Parse the date string into a Date object
    const date = new Date(isoDate);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date format');
    }

    // Extract month, day, and year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    // Return the formatted date string
    return `${day}/${month}/${year}`;
}
