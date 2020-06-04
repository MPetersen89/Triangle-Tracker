$(document).ready(function() {
  $("form#triangle").submit(function() {
    const a = parseInt($("#sideA").val());
    const b = parseInt($("#sideB").val());
    const c = parseInt($("#sideC").val());

    if (a + b >= c) {
      if (a === b && c == b) {
        alert("Equilateral");
      } else if (a === b || c == b || a == c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else if (c + a >= b) {
      if (a === b && c == b) {
        alert("Equilateral");
      } else if (a === b || c == b || a == c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else if (c + b >= a) {
      if (a === b && c == b) {
        alert("Equilateral");
      } else if (a === b || c == b || a == c) {
        alert("Isosceles");
      } else {
        alert("Scalene");
      }
    } else {
      alert("not a triangle")
    }

  });
});