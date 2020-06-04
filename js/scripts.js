$(document).ready(function() {
  $("form#triangle").submit(function() {
    const a = parseInt($("#sideA").val());
    const b = parseInt($("#sideB").val());
    const c = parseInt($("#sideC").val());
    const aplusb = a + b;
    const cplusa = a + c;
    const cplusb = c + b;

    if (aplusb >= c) {
      if (a === b && c === b) {
        alert("Equilateral");
      } else if (a === b || c === b || a === c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else if (cplusa >= b) {
      if (a === b && c === b) {
        alert("Equilateral");
      } else if (a === b || c === b || a === c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else if (cplusb >= a) {
      if (a === b && c === b) {
        alert("Equilateral");
      } else if (a === b || c === b || a === c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else {
      alert("not a triangle")
    }

  });
});