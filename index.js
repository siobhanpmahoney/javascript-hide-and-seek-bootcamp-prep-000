function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var rankedListItems = document.querySelectorAll("ul.ranked-list li");
  for (var i = 0; i<rankedListItems.length; i++) {
    rankedListItems[i].innerHTML = (parseInt(rankedListItems[i].innerHTML) + n).toString();
  }
}

function deepestChild () {
  let grandNodeList = document.getElementById("grand-node").querySelectorAll("div");
  let next = [];
  for (let i = 0; i<grandNodeList.length; i++) {
    if (grandNodeList[i].children.length>0) {
      next.push(i)
    }
    if (grandNodeList[i].children.length === 0) {
      return grandNodeList[i]
    }
  }
}
