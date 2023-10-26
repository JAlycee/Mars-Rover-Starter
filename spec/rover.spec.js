const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", () => {
  // Test 7
  it('Constructor sets position and default values for mode and generatorWatts', () => {
    let rover = new Rover(100);

    //Check if position, mode, and generatorWatts properties are set correct
    expect(rover.position).toBe(100);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(110);
  });

  // Test 8
  it('response returned by receiveMessage contains the name of the message', () => {
    let rover = new Rover(100);
    let messageName = 'Test Message';
    let message = new Message(messageName, [ ]);

    let result = rover.receiveMessage(message);

    //Check if the response contains the name of the message
    expect(result.message).toBe(messageName);
  });

  // Test 9
  it('response returned by receiveMessage includes two results if two commands are sent in the message', () => {
    let rover = new Rover(100);
    let message = new Message('Test message' , [
      new Command("MODE _CHANGE", "LOW POWER"),
      new Command("MOVE", [200, 300])
    ]);

    let result = rover.receiveMessage(message);

    // Check if the response contains two results
    expect(result.results.length).toBe(2);
  });

  // Test 10
  it('responds correctly to the status check command', () => {
    let rover = new Rover(100);
    let message = new Message("Test Message", [new Command('STATUS_CHECK')]);
    let result = rover.receiveMessage(message);

    //Check if the response includes a roverStatus object
    expect(result.results[0].roverStatus).toBeDefined();

    //Check roverStatus fot accuracy
    let roverStatus = result.results[0].roverStatus;
    expect(roverStatus.mode).toBe(rover.mode);
    expect(roverStatus.generatorWatts).toBe(rover.generatorWatts);
    expect(roverStatus.position).toEqual(rover.position);
  });

  // Test 11
  it('responds correctly to the mode change command', () => {
    let rover = new Rover(100);

    //Test changing to 'LOW_POWER'
    let message1 = new Message ('Test Message', [new Command('MODE_CHANGE', 'LOW_POWER')]);
    let result1 = rover.receiveMessage(message1);

    // Check if the response includes a result with completed: true
    expect(result1.results[0].completed).toBe(true);

    // Check if the rover mode has changed to 'LOW_POWER'
    expect(rover.mode).toBe('LOW_POWER');

    // Test changing back to 'NORMAL'
    let message2 = new Message('Test Message', [new Command('MODE_CHANGE', 'NORMAL')]);
    let result2 = rover.receiveMessage(message2);

    //Check if the response includes a result with completed: true
    expect(results2.results[0].completed).toBe(true);

    //Check if the rover mode has changed back to 'NORMAL'
    expect(rover.mode).toBe('NORMAL');
  });

  // Test 12
  it('Responds with a false completed value when attempting to move in LOW_POWER mode', () => {
    let rover = new Rover(100);
     //Change rover to LOW_POWER mode
    let message1 = new Message('Test Message', [new Command('MODE_CHANGE', 'LOW_POWER')]);
    rover.receiveMessage(message1);
  })

  // Test 13
  it('responds with the position for the move command', () => {
  let rover = new Rover(100);
   //SEnd a MOVE command to change the rover's position
  let message = new Message('Test Message', [new Command('MOVE', [200, 300])]);
  let result = rover.receiveMessage(message);
  //Check if the response includes the updated position
  expect(result.results[0].completed).toBe(true);
  expect(rover.position).toEqual({ x: 200, y: 300 });
  });

});
