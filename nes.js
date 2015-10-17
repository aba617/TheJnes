/*(function() {
	//skeleton
	function NES() {

	}

	module.exports = NES;
})();

*/
var nes = function (){
	var CPU = require('./cpu.js');
	var cpu = new CPU();
	cpu.init();
	
	//cpu.start();
	//	cpu.loadRegisters();
	//cpu.functions.start;
};

nes = new nes();
//console.log("load");
