const maxElement = require("./maxElementSolution")


test(`Expect the maxElement of [1, 2, 4, 6, 1, 9] to equal 9`, () => {
    expect(maxElement([1, 2, 4, 6, 1, 9])).toEqual(9);
});

test(`Expect the maxElement of [] to equal undefined`, () => {
    expect(maxElement([])).toEqual(undefined);
});

test(`Expect the maxElement of [7] to equal 7`, () => {
    expect(maxElement([7])).toEqual(7);
});

test(`Expect the maxElement of [1.4, 2.6, 4.6, 6.6] to equal 6.6`, () => {
    expect(maxElement([1.4, 2.6, 4.6, 6.6])).toEqual(6.6);
});

test(`Expect the maxElement of [-5, -7, -2, -57] to equal -57`, () => {
    expect(maxElement([-5, -7, -2, -57])).toEqual(-2);
});
