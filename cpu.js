


function buildRegistersNull(nes){
	this.nes = nes;
	
	nes.mem = null;
	nes.REG_ACC = null;
	nes.REG_X = null;
	nes.REG_Y = null;
	nes.REG_SP = null;
	nes.REG_PC = null;
	
}

function loadMemory(nes){
	nes.mem = new Array(0x10000);
	
	this.REG_ACC = 0;
	this.REG_X = null;
}