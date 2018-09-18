function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector('#nested div div div .target');
}

function increaseRankBy(n) {
  for (let each in document.querySelectorAll('.ranked-list')) {
    console.log("test");
    each.innerHTML = parseInt(each.innerHTML) + 1;
  }
}

function deepestChild() {
  let
}