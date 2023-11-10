// const Command = require('./command.js');

class Command {
    constructor(commandType, value) {
      this.commandType = commandType;
      this.value = value;
      if (!this.commandType) {
        throw new Error("Command type required.");
      }
      
    }
  }

module.exports = Command;