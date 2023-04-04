const mission = process.argv[2];
console.log(process.argv);

if (mission === 'learn') {
	console.log('Time to learn some Node.js');
} else {
	console.log(`Is ${mission} more fun to do ?`);
}
