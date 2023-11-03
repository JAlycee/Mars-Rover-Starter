class Message {
   constructor(name, commands) {
      this.name = name; // Set the name property to the provided name
      this.commands = commands; //Set the commands property to the array of commands 
      if (!name) {
         throw Error("Message type required.");
      }
   }
}

module.exports = Message;