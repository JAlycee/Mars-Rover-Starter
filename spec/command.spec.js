const Command = require('../command.js');
const Message = require('../message.js');
const Rover = require('../rover.js');
// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", () => {
  let commandType = [
    new Command('MOVE', 100), // For example, moving to position 100
    new Command('STATUS_CHECK'), // Status check command with no value
    new Command('MODE_CHANGE', 'NORMAL') // Change mode to LOW_POWER
  ];
//Test 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect(() => { new Command();}).toThrowError(new Error('Command type required.'));
  });
//Test 2
  it('constructor sets command type', ()=>{
    //arrange
      let expectedCommandType = 'MODE_CHANGE';
    //act
      let actualCommand = new Command(expectedCommandType);
    //assert
      expect(actualCommand.commandType).toBe(expectedCommandType);
  });
//Test 3
  it('constructor sets a value passed in as the 2nd argument', ()=>{
    //arrange
      let expectedValue = 'NORMAL';
    //Act
      let actualCommand = new Command('MODE_CHANGE', expectedValue);
    //Assert
    expect(actualCommand.value).toBe(expectedValue);
    });
});
