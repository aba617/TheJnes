# TheJnes
JS NES emulator (in progress)

Technical Notes:

Core system architecture:

CPU
PPU - picture processing unit
pAPU - psuedo Audio Processing Unit 
RAM
Game ROM
Controllers

Some Dev notes:

-memory is little endian
-8bit data bus, 8 bit control bus, 16 bit addressing bus

Address ranges:
$0000 - $FFFF
	Zero page: $0000-$00FF
	Memory Mirroring: $0800-$1FFF
		Mirroring occurs 3 times, i.e.
		data written at $0000 will be written to $0800, $1000, $1800
	Memory Mapped I/O regs:
		$2000-$401F
		$2000-$2007 mirrored every 8 bytes in region - $2008-$3FFF
	$8000 onwards is address allocated to cartridge PRG-ROM
		games with one 16KB bank of PRG-ROM load into:
		$8000 & $C000
		games with two 16KB bank of PRG-ROM load into:
		$8000 & $C000



