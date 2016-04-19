'use strict';

Blockly.Blocks['inferboilerplate'] = {
  init: function() {
    this.setColour(0);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CSHARP_BOILER);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INFERENCE_ENGINE_ALGORITHM)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.EP, "EP"], [Blockly.Msg.VMP, "VMP"], [Blockly.Msg.GIBBS, "Gibbs"]]), "ALGORITHM_DROPDOWN");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setTooltip('');
    this.setHelpUrl('http://research.microsoft.com/en-us/um/cambridge/projects/infernet/docs/Inference%20engine%20settings.aspx');
  }
};
