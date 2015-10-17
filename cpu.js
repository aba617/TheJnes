function cpu(){};

cpu.prototype = { 
	
	init : function(){
		this.loadRegisters();
		console.log("Registers initialized to 0");
		this.buildZeroPage;
	},

	loadRegisters : function() {
		cpu.memory = new Array(0x10000);
	
		cpu.REG_ACC = 0;
		cpu.REG_X = 0;
		cpu.REG_Y = 0;
		cpu.REG_SP = 0;
		cpu.REG_PC = 0;
		console.log("registers loaded");
	},
	
	buildZeroPage : function() {
		for (var i = 0; i < 0x2000; i++){
			cpu.memory[i] = 0xFF;
		}
	}

	/*memory*/
		//this.cpu = cpu;
	
		/*cpu.memory = null;
		cpu.REG_ACC = null;
		cpu.REG_X = null;
		cpu.REG_Y = null;
		cpu.REG_SP = null;
		cpu.REG_PC = null;
	*/
/*	loadRegisters();
	buildZeroPage();

		/*Addressing Modes*/
		/*cpu.addr_acc;
		cpu.addr_impl;
		cpu.addr_imm;
		cpu.addr_abs;
		cpu.addr_zp;
		cpu.addr_rel;
		cpu.addr_absx;
		cpu.addr_absy;
		cpu.addr_zpx;
		cpu.addr_zpy;
		cpu.addr_zpii;
		cpu.addr_zpiiy;*/
		/*Op Codes*/
};

/*cpu.prototype.functions = {
	start : function(){
		this.mem = new cpu();
	}
};*/
//cpu.functions.start;
module.exports = cpu;
//cpu.cpu();
//console.log(cpu.REG_Y);
//console.log(cpu.memory[0x0000]);
//cpu.