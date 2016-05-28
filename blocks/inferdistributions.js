'use strict';

Blockly.Blocks['infer_bernoulli'] = {
  init: function() {
    this.setColour(45);
    this.appendDummyInput()
        .appendField("Bernoulli");
    this.setOutput(true, "inferbool");
    this.appendValueInput("PROB")
        .setCheck(["Number", "inferdouble"])
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
        .setCheck(["Boolean", "inferbool"])
        .appendField("First distribution");
    this.appendValueInput("DISTR2")
        .setCheck(["Boolean", "inferbool"])
        .appendField("Second distribution");
    this.setOutput(true, "inferbool");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['infer_gaussianmeanvar'] = {
  init: function() {
    this.setColour(240);
    this.appendDummyInput()
        .appendField("Gaussian");
    this.setOutput(true, "inferdouble");
    this.appendValueInput("MEAN")
        .setCheck(["Number", "inferdouble"])
        .appendField("Mean:");
    this.appendValueInput("VAR")
        .setCheck(["Number", "inferdouble"])
        .appendField("Variance:");
    this.setTooltip('Creates a Gaussian-distributed random variable with the mean and variance represented by random variables.');
    this.setHelpUrl('http://research.microsoft.com/en-us/um/cambridge/projects/infernet/codedoc/html/M_MicrosoftResearch_Infer_Models_Variable_GaussianFromMeanAndVariance.htm');
  }
};

Blockly.Blocks['infer_newdouble'] = {
  init: function() {
    this.setColour(240);
    this.appendDummyInput()
        .appendField("Double");
    this.setOutput(true, "inferdouble");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};