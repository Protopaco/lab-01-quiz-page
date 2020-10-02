// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { userMeantYes } from '../utils/translateToYes.js';

const test = QUnit.test;

test('passes words beginning in y, should return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yWords = ['yes', 'yesh', 'yay', 'yup', 'yupple', 'yop'];
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const

    const actual = userMeantYes(yWords[0]);
    // for (let i = 0; i < yWords.length; i++){
    //     const actual = userMeantYes(yWords[i]);

    // }
    expect.equal(actual, expected);
    //Expect
    // Make assertions about what is expected versus the actual result
});
