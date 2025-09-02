const tryParseDate = (date, format) => {
    if (date === null || date instanceof Date) {
        return date;
    }
    // This is a simplified version. For a more robust solution, a library like moment.js or date-fns would be better.
    // For now, we assume the date is in the correct format.
    try {
        return new Date(date);
    } catch (e) {
        return null;
    }
};

const parseDate = (date, format) => {
    const parsedDate = tryParseDate(date, format);
    if (!parsedDate) {
        throw new Error(`Invalid date format (${date} does not conform to ${format})`);
    }
    return parsedDate;
};

module.exports = {
    tryParseDate,
    parseDate,
};
