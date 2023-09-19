// Create a library for recording logs in an application, 
// which might be sent to an external source for analysis.
// Create a generic type LogEntry which contains the following fields:
// timestamp - a Date object
// data - A generic type
// tags - An array of strings for categorisation
// Create a function for creating LogEntry objects
// Create a function which takes a LogEntry as a parameter, 
// formats it nicely, and uses console.log to output it to stdout

type LogEntry<T> = {
  timestamp: Date;
  data: T;
  tags: string[];
}
function createLogEntry<T>(data: T, tags: string[] = []): LogEntry<T> {
  return {
    timestamp: new Date(),
    data,
    tags,
  };
}

function outputObj<T>(logEntry: T): void {
  console.log(logEntry);
}

function logFormattedEntry<T>(entry: LogEntry<T>): void {
  const formattedEntry = `
    Timestamp: ${entry.timestamp.toISOString()}
    Data: ${JSON.stringify(entry.data)}
    Tags: ${entry.tags.join(', ')}
  `;
  console.log(formattedEntry);
}

const logEntry1 = createLogEntry({ message: 'Log message 1' }, ['hello']);
const logEntry2 = createLogEntry({ error: 'Error message' }, ['error', 'important']);

logFormattedEntry(logEntry1);
logFormattedEntry(logEntry2);
