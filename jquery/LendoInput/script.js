//console.log($("h1").text());
//console.log($("h1").html());

//console.log($("#lista1").text());
//console.log($("#lista1").html());

//console.log($(novo).attr("name"));

//console.log($("h1").text("Lista de compras"));

//console.log($("#lista1").text());

// console.log($("#novo").attr("class", (_, oValue) => {
//   return oValue + " bg";
// }));

$("h1").addClass("bg");

setTimeout(() => {
  $("h1").removeClass("bg")
}, 2000)

setInterval(() => {
  $("h1").toggleClass("bg")
}, 400);

$("h1").css("font-size", "50px")

$("#novo").attr("class", (_, oValue) => {
  return oValue + " bg";
});

// console.log($("li").attr("name", function (i, oValue) {
//   if (oValue) {
//     return "item " + i + " " + oValue;
//   };
//   return "item " + i;
// }));

//console.log($("[key = 2]").remove(".item2, .item4"))

//$("#lista1").find("[key = 2]").remove();

$("#lista1").empty();

let box = $(".box");

box.append(
  "largura:", box.width(), "<br>",
  "largura + padding:", box.innerWidth(), "<br>",
  "largura + padding + borda:", box.outerWidth(), "<br>",
  "largura + padding + borda + margem:", box.outerWidth(true), "<br>",

)