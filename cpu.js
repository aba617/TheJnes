function nes(){};

nes.cpu = function() { 
		this.nes = nes;
	
		nes.mem = null;
		nes.REG_ACC = null;
		nes.REG_X = null;
		nes.REG_Y = null;
		nes.REG_SP = null;
		nes.REG_PC = null;
	
	

	function loadMemory(){
		nes.mem = new Array(0x10000);
	
		nes.REG_ACC = 0;
		nes.REG_X = 0;
		nes.REG_Y = 0;
		nes.REG_SP = 0;
		nes.REG_PC = 0;
		console.log("memory loaded");
	}
	
	loadMemory();
};

nes.cpu();
console.log(nes.REG_Y);