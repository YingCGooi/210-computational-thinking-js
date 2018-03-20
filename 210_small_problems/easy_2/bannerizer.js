function logInBox(text, width) {
  var i;
  var j;
  var line = '';

  console.log(`+-${'-'.repeat(width)}-+`);
  console.log(`| ${' '.repeat(width)} |`);

  for (i = 0; i < text.length; i++) {
    line += text[i];
      
    // if the line's character count exceeds specified width
    if (line.length >= width) {
      // we count from the last character of the line until a space is found
      for (j = 1; j < width; j++) {
        if (line[width - j] === ' ') {
          // we log the current line, minus any leftover characters from the space character
          console.log(`| ${line.substring(0, width - j).padEnd(width)} |`);

          // we start a new line beginning with the leftover characters
          line = line.substring(width - j + 1, width);
        }
      }
    }
  }

  // the leftover line will be finally logged
  console.log(`| ${line.padEnd(width)} |`);
  console.log(`| ${' '.repeat(width)} |`);
  console.log(`+-${'-'.repeat(width)}-+`);  
}

logInBox('Space: the final frontier. These are the voyages of the' +
 ' starship Enterprise. Its continuing mission: to explore strange' + 
 ' new worlds, to seek out new life and new civilizations' + 
 ', to boldly go where no one has gone before.', 30);

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+


// count from the end of the line character by character
// when arrive at space, record j
// log the line until index j
// whatever that is left behind gets added to the next line

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+