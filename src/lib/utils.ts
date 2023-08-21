type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
  return formatter.format(new Date(date))
}

/**
 * This function asserts that the provided error has a `message` property.
 * Note: We use a traditional function declaration instead of an arrow function
 * because TypeScript currently does not support assertion signatures with arrow functions.
 *
 * @param error - The error object or string to check and possibly throw.
 * @throws {Object} Throws an object with a message property.
 */
export function handleErrorMessage(error: unknown): asserts error is { message: string } {
  if (typeof error === 'string') {
    throw { message: error }
  }

  if (error instanceof Error) {
    return // it already has a message property
  }

  throw { message: 'An unexpected error occurred.' }
}
