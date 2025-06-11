

Blockly.Blocks['movimiento_Coordenadas'] = {
    init: function() {
        var DIRECCIONES_HORIZONTAL = [
            ["+", "ESTE"],
            ["-", "OESTE"]
        ];

        var DIRECCIONES_VERTICAL = [
            ["+", "NORTE"],
            ["-", "SUR"]
        ];

        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(DIRECCIONES_HORIZONTAL), "direccion_horizontal")
            .appendField("(");
        
        this.appendValueInput('x')
            .setCheck('Number');
        
        this.appendDummyInput()
            .appendField(",");
        
        this.appendValueInput('y')
            .setCheck('Number');
        
        this.appendDummyInput()
            .appendField(")");
        
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(DIRECCIONES_VERTICAL), "direccion_vertical");
        
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210); // Azul
        this.setTooltip("Mueve a coordenadas específicas en el plano");
    }
};



