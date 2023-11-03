const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// Message class correctly creates a message object with the specified name and associated commands
describe("Message class", () => {
//Test 4    
    it('Throws error if a name is NOT passed into the constructor as the first parameter', () => {
        //create an array of Command Objects
        expect(() => { new Message();}).toThrowError(new Error('Message type required.'));

    });
//Test 5
        it('Constructor sets name', () => {
            //define test name
            //let testName = 'Test Message Name';

            //create a Message object with the specified name
            let message = new Message('Message');

            //check if the name property is set right
            expect(message.name).toBe('Message');
        });
//Test 6
        it('Contains a commands array passed into the constructor as the 2nd argument', () => {
            //Create a Message Object with the testCommands array
            let message = new Message('Test message with two commands', testCommands);

            //Check if the Message Object's command property matches the testCommands array
            expect(message.commands).toEqual(testCommands);
        })
});