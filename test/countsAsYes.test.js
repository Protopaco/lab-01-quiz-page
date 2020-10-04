// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { userMeantYes } from '../utils/translateToYes.js';

const test = QUnit.test;

test('passes words beginning in y, should return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yWords = 'yes';
    const yWords2 = 'ya';
    const yWords3 = 'yesh';
    const expectedTrue = true;

    const nonYWords = 'naw';
    const nonYWords2 = 'nope';
    const nonYWords3 = 'pizza';
    const expectedFalse = false;
    //Act 
    // Call the function you're testing and set the result to a const

    const actual = userMeantYes(yWords);
    const actual2 = userMeantYes(yWords2);
    const actual3 = userMeantYes(yWords3);
    expect.equal(actual, expectedTrue);
    expect.equal(actual2, expectedTrue);
    expect.equal(actual3, expectedTrue);


    const actual4 = userMeantYes(nonYWords);
    const actual5 = userMeantYes(nonYWords2);
    const actual6 = userMeantYes(nonYWords3);
    expect.equal(actual4, expectedFalse);
    expect.equal(actual5, expectedFalse);
    expect.equal(actual6, expectedFalse);
});
