class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL'; //set the default value for mode
      this.generatorWatts = 110; //set the default value for generatorWatts
   }
// Methods for Message Commands and Rover's Status

// It returns a response object with information about the message results.
   receiveMessage(message) {
      let results = [];
      
      for(let command of message.commands) {
         results.push(this.processCommand(command));
      }
      return {
         message: message.name,
         results,
      };
   }
 //Processes individual commands in a message.
   processCommand(command) {
      //Check the type of command
if (command.commandType === 'MODE_CHANGE') {
      //If command = MODE_CHANGE, update mode.
   this.mode = command.value;
   return { completed: true };
}  else if (command.commandType === 'MOVE') {
      //MOVE = does rover allow movement.
   if (this.mode === 'LOW_POWER') {
      //Rover can't move if it's in LOW_POWER
   return {completed: false };
   } //Normal mode = update position
   let [x, y] = command.value;
   this.position = { x, y };
   return { completed: true };
} else if (command.commandType === 'STATUS_CHECK') {
   //Status_Check command = get rover's status
   return { completed: true, roverStatus: this.getRoverStatus() };
}
   return { completed: false }; //If not recognized
}
getRoverStatus() {
   //Gets current status of rover (mode, generatorWatts, & position).
      return {
         mode: this.mode,
         generatorWatts: this.generatorWatts,
         position: this.position,
      };
   }
}

module.exports = Rover;