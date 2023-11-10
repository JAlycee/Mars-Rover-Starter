const Message = require('../message.js');
const Command = require('../command.js');
// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// Message class correctly creates a message object with the specified name and associated commands
describe("Message class", () => {
    class Message {
        constructor(name, commands) {
          this.name = name;
          this.commands = commands;
          
          // Check if name is not provided and throw an error if it's missing
          if (!name) {
            throw new Error("Name required.");
          }
        }
      }
      
    //let testCommands = [
        //{"commandType": "MODE_CHANGE", "value": "LOW_POWER"}, {"commandType": "STATUS_CHECK", "value": undefined}
//Test 4    
    it('Throws error if a name is NOT passed into the constructor as the first parameter', () => {
        //create an array of Command Objects
        expect(() => new Message()).toThrowError(new Error("Name required."));

    });
//Test 5
        it('Constructor sets name', () => {
            //define test name
            let name = 'Test Message';

            //create a Message object with the specified name
            let message = new Message(name,[]); //testCommands);


            //check if the name property is set right
            expect(message.name).toBe(name);
        });
//Test 6
        it('Contains a commands array passed into the constructor as the 2nd argument', () => {
            //Create a Message Object with the testCommands array
            let testCommands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command('STATUS_CHECK')];
            let message = new Message('Test Message', testCommands);

            //Check if the Message Object's command property matches the testCommands array
            expect(message.commands).toEqual(testCommands);
        })
});