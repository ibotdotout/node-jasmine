var arr_sum = require("../arr-sum");

describe("simple array sum", function () {

  it("should sum 1 2 and 3", function () {
    var sum = arr_sum.sum([1, 2, 3]);
    expect(sum).toBe(6);
  });

  it("should sum 1 2 3 4 10 11", function () {
    var sum = arr_sum.sum([1, 2, 3, 4, 10 ,11]);
    expect(sum).toBe(31);
  });
});
