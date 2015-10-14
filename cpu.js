function nes(){};

nes.cpu = function() { 
	
	/*memory*/
		this.nes = nes;
	
		nes.memory = null;
		nes.REG_ACC = null;
		nes.REG_X = null;
		nes.REG_Y = null;
		nes.REG_SP = null;
		nes.REG_PC = null;
	

	function loadMemory(){
		nes.memory = new Array(0x10000);
	
		nes.REG_ACC = 0;
		nes.REG_X = 0;
		nes.REG_Y = 0;
		nes.REG_SP = 0;
		nes.REG_PC = 0;
		console.log("memory loaded");
	}
	
	function buildZeroPage(){
		for (var i = 0; i < 0x2000; i++){
			nes.memory[i] = 0xFF;
		}
	}

	loadMemory();
	buildZeroPage();
		/*Addressing Modes*/
		nes.addr_acc;
		nes.addr_impl;
		nes.addr_imm;
		nes.addr_abs;
		nes.addr_zp;
		nes.addr_rel;
		nes.addr_absx;
		nes.addr_absy;
		nes.addr_zpx;
		nes.addr_zpy;
		nes.addr_zpii;
		nes.addr_zpiiy;
		/*Op Codes*/
};

nes.cpu();
console.log(nes.REG_Y);
console.log(nes.memory[0x0000]);