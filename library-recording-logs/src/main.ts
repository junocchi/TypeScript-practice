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

function newLogEntry<T>(logEntry: T): T {
  return logEntry;
}

function outputObj<T>(logEntry: T): void {
  console.log(logEntry);
}

