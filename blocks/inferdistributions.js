'use strict';

Blockly.Blocks['infer_bernoulli'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("Bernoulli");
    this.setOutput(true, "inferbool");
    this.appendValueInput("PROB")
        .setCheck("Number")
        .appendField("True probability:");
    this.setTooltip('Represents a distribution on a binary variable.');
    this.setHelpUrl('http://research.microsoft.com/en-us/um/cambridge/projects/infernet/codedoc/html/T_MicrosoftResearch_Infer_Distributions_Bernoulli.htm');
  }
};

Blockly.Blocks['infer_bernoulli_c'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("Combined Bernoulli")
        .appendField(new Blockly.FieldDropdown([["and", "AND"], ["or", "OR"]]), "TYPE");
    this.appendValueInput("DISTR1")
        .setCheck("inferbool")
        .appendField("First distribution");
    this.appendValueInput("DISTR2")
        .setCheck("inferbool")
        .appendField("Second distribution");
    this.setOutput(true, "inferbool");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
