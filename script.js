function firstWord(s) {
  // your code here
	s = s.trim();
	let firstSpace = s.indexOf(' '); 
	if(firstSpace === -1) {
		return s;
	};

	return s.substring(0, firstSpace);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
