// An error is raised in the browser's interpreter and output to the browser's console:

// Uncaught (in promise) DOMException: Quota exceeded.
// hello.js:1 Uncaught SyntaxError: Invalid or unexpected token

var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

// There are spaces at the end of line 5 after the backslash character.
// Extra whitespace prevents the escaping of newline chracter at the end of the line, causing SyntaxError to be raised.

// The second bug is that whitespaces are present in the beginning of each line before the text, even if the SyntaxError is resolved, the console will show extra spaces in the middle of some of the sentences. 

// The program considers the whole string to be continuous. Spacces at the beginning of each line are interpreted as part of the string.

