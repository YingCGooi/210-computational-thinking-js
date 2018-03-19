const p = (...args) => {
  args.length > 0
       ? console.log(...args) // logs 1+ comma separated arguments - ex: console.log(1, 'a', [])
       : console.log('');     // logs a blank line if no arguments.
return args.length === 0
         ? undefined          // returns undefined if no arguments passed.
         : args.length === 1
           ? args[0]          // returns single argument's value if one argument.
           : args;            // returns all args as an array if 2+ arguments.
};