const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// Message class correctly creates a message object with the specified name and associated commands
describe("Message class", () => {
    it('Should create a message object with name and commands', () => {
        //create an array of Command Objects
        let commands = [new Command('MODE_CHANGE', 'LOW POWER'), new Command('STATUS_CHECK')];

        //create a Message Object
        let message = new Message('Test message with two commands', commands);

        //check if message object has the correct name and commands
        expect(message.name).toBe('Test message with two commands');
        expect(message.commands).toEqual(commands);
    });

        it('Should throw an error if the name is NOT passed into the constructor as the first parameter', () => {
    //define a function that tries to create a message object without a name
        let createMessageWithoutName = () => {
            new Message();
    };

        //check if creating a Message without a name throws an error
        expect(createMessageWithoutName).toThrowError("Message name must be a non-empty string");
    });

        it('Constructor sets name', () => {
            //define test name
            let testName = 'Test Message Name';

            //create a Message object with the specified name
            let message = new Message(testName);

            //check if the name property is set right
            expect(message.name).toBe(testName);
        });

        it('Contains a commands array passed into the constructor as the 2nd argument', () => {
            //Create a Message Object with the testCommands array
            let message = new Message('Test message with two commands', testCommands);

            //Check if the Message Object's command property matches the testCommands array
            expect(message.commands).toEqual(testCommands);
        });
});