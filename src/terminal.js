const MAX_LINES = 50; // Maximum number of visible lines. Keep low for low perfomance systems
const queue = []; // Message queue
const terminal = document.getElementById('terminal');
const typespeed = 6;

let currentLine = document.createElement('div'); // Current line container
const cursor = document.createElement('span'); // Typing cursor
cursor.className = 'typing-cursor';
currentLine.appendChild(cursor); // Cursor starts in the current line
terminal.appendChild(currentLine);

const tagStack = []; // Stack to track open tags
let animationClass = null; // Animation class to apply after line completion

// Checks if max lines is reached and remove last line
function truncateTerminal() {
  while (terminal.childNodes.length > MAX_LINES) {
    terminal.removeChild(terminal.firstChild); // Remove the oldest line
  }
}

// Handles color tags
function createColoredSpan(color) {
  const span = document.createElement('span');
  span.style.color = color;
  return span;
}

// Handles style tags
function createStyledSpan(style) {
  const span = document.createElement('span');
  if (style === 'b') span.style.fontWeight = 'bold';
  else if (style === 'i') span.style.fontStyle = 'italic';
  else if (style === 'u') span.style.textDecoration = 'underline';
  return span;
}

function typechar(message, index, callback) {
  if (index < message.length) {
    // Handle double line breaks for blank lines
    if (message.startsWith('\n\n', index)) {
		if (animationClass) {
        currentLine.classList.add(animationClass); // Add animation class
        animationClass = null; // Reset after applying
      }
      // Create a blank line
      const blankLine = document.createElement('div');
      terminal.insertBefore(blankLine, currentLine.nextSibling);
      // Create a new current line
      currentLine = document.createElement('div');
	  const br = document.createElement("br");
	  blankLine.appendChild(br);
      currentLine.appendChild(cursor); // Add cursor to the new line
      terminal.insertBefore(currentLine, blankLine.nextSibling);
      index += 2; // Move past the two newlines
    }
    // Handle single line breaks
    else if (message[index] === '\n') {
		if (animationClass) {
        currentLine.classList.add(animationClass); // Add animation class
        animationClass = null; // Reset after applying
      }
      // Create a new current line
      const newLine = document.createElement('div');
      currentLine = newLine;
      currentLine.appendChild(cursor); // Add cursor to the new line
      terminal.insertBefore(newLine, cursor.nextSibling);
      index++; // Move past the newline
    }
    // Handle tabs
    else if (message[index] === '\t') {
      const tab = document.createTextNode('\u00A0\u00A0'); // Four spaces for tab
      currentLine.insertBefore(tab, cursor); // Insert tab before the cursor
      index++; // Move past the tab
    }
    // Adds color tags
    else if (message.startsWith('<color:', index)) {
      const endTag = message.indexOf('>', index);
      if (endTag !== -1) {
        const color = message.substring(index + 7, endTag); // Extract color
        const span = createColoredSpan(color);
        currentLine.insertBefore(span, cursor); // Add colored span to the current line
        tagStack.push(span); // Track the open color span
        index = endTag + 1; // Move past the color tag
      }
    } else if (message.startsWith('<b>', index) || message.startsWith('<i>', index) || message.startsWith('<u>', index)) {
      const tag = message.substring(index + 1, index + 2); // Extract tag type (b, i, u)
      const span = createStyledSpan(tag);
      currentLine.insertBefore(span, cursor); // Add styled span
      tagStack.push(span); // Track the open tag
      index += 3; // Move past the opening tag
    } else if (message.startsWith('</b>', index) || message.startsWith('</i>', index) || message.startsWith('</u>', index)) {
      if (tagStack.length > 0) {
        tagStack.pop(); // Close the last opened style tag
      }
      index += 4; // Move past the closing tag
    } else if (message.startsWith('</color>', index)) {
      if (tagStack.length > 0) {
        tagStack.pop(); // Close the current color span
      }
      index += 8; // Move past the closing tag
    }  else if (message.startsWith('<anim:', index)) {
      const endTag = message.indexOf('>', index);
      if (endTag !== -1) {
        animationClass = message.substring(index + 6, endTag); // Extract animation class
        index = endTag + 1; // Move past the animation tag
      }
    } else if (message.startsWith('<link:', index)) {
      const endLink = message.indexOf(',', index) + 1;
      const endTag = message.indexOf('>', index);
      if (endTag !== -1) {
        const link = message.substring(index + 6, endLink - 1); // Extract link
        const span = document.createElement('a');
        span.style.textDecoration = 'underline';
        span.target = '_blank'; // Open link in a new tab
        span.style.color = 'blue'; // Set link color
        span.href = link; // Set the link
        span.className = 'link'; 
        span.textContent = message.substring(endLink, endTag); // Set the text content to the link
        currentLine.insertBefore(span, cursor); // Add link to the current line
        index = endTag + 1; // Move past the link tag
      }
    }
    // Handle regular characters
    else {
      const char = document.createTextNode(message[index]);
      if (tagStack.length > 0) {
        tagStack[tagStack.length - 1].appendChild(char); // Append to the last color span
      } else {
        currentLine.insertBefore(char, cursor); // Append before the cursor
      }
      index++; // Move to the next character
    }

    truncateTerminal(); // Ensure lines don't exceed the limit
    terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom
    setTimeout(() => typechar(message, index, callback), typespeed);
  } else {
    if (callback) callback(); // Execute the callback when typing finishes
    queue.shift(); // Remove the current message from the queue
    processQueue(); // Process the next message in the queue
  }
}

function termtext(message, callback) {
  queue.push({ message, callback });
  if (queue.length === 1) {
    processQueue(); // Start processing the queue if it's the only message
  }
}

function processQueue() {
  if (queue.length === 0) return; // No messages to process

  const { message, callback } = queue[0]; // Get the first message in the queue
  typechar(message, 0, callback);
}

// Bootup message
termtext(`MAIN \tCSECT\n\t \t\tSTM\t \t14,12,12(13)\n\t \t\tLR\t\t\t12,15\n\t \t\tUSING \tMAIN,12\n\t \t\tLA\t\t\t14,MSVE\n\t \t\tST\t\t\t13,4(,14)\n\t \t\tST\t\t\t14,8(,13)\n\t \t\tLR\t\t\t13,14\n\nRESET\tDS\t\t\t0H\n\t \t\tLA\t\t\tEPRMS\n\t\t \tL\t \t\t15,=V(ETHER)\n\t \t\tBALR\t\t14,15\n<anim:term-bounce>\t ______ _______ _\t\t_ ______ _____\n<anim:term-bounce>\t|\t____|__\t __| |\t| |\t____|\t__ \\\n<anim:term-bounce>\t| |__ \t\t| |\t| |__| | |__\t| |__) |\n<anim:term-bounce>\t|\t__|\t\t| |\t|\t__\t|\t__| |\t_\t/\n<anim:term-bounce>\t| |____ \t| |\t| |\t| | |____| | \\ \\\n<anim:term-bounce>\t|______|\t|_|\t|_|\t|_|______|_|__\\_\\\n<anim:term-bounce>\t\t\t\t\t\t\t\t | \\\t| |\t____|_\t\t_|\n<anim:term-bounce>\t\t\t\t\t\t\t\t |\t\\ | | |__\t\t|\t|\n<anim:term-bounce>\t\t\t\t\t\t\t\t | . \`\` |\t__| \t|\t|\n<anim:term-bounce>\t\t\t\t\t\t\t\t | |\\ \t| |____\t|\t|\n<anim:term-bounce>\t\t\t\t\t\t\t\t |_| \\__|______| |__|\n\t\t\t\t <b>Software Development Portfolio</b>\n\t\t\t\t\t\t\t\t\t\t\tby <color:yellow>Brett Williams</color>\n\n<anim:term-green>Welcome to ETHER-NET, select a query.\n<color:green>ETHER-NET@Guest</color>:<color:blue>~</color>$\n`);