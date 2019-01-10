function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget(){
 return document.querySelector('#nested .target');

};

function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
}
}

// Step 1. In the above example, the first query says, "Starting from document (the object we've called querySelector() on), find a ul with a className of ranked-list (the . is for className). Then find an li that is a child of that ul. Then find a ul that is a child (but not necessarily a direct descendant) of that li. Finally, find an li that is a child of that (second) ul."
//
// Step 2. querySelectorAll works a lot like querySelector() -- it accepts a selector as its argument, and it searches starting from the element that it's called on (or from document) -- but instead of returning the first match, it returns a NodeList (which, remember, is not an Array) of matching elements.
//
// Step 3. If we called document.getElementById('app').querySelectorAll('ul.ranked-list li'), we'd get back a NodeList of <li>1</li>, <li>2</li>, <li>10</li>, <li>11</li>.
//
// We could change the .innerHTML of these lis like so:
// Step 4.
// Now our lis, even though they're children of two separate uls, will count up from 1 to 4.

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}

//that pulls out the most deeply nested child element from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
// HINT 1: Your solution for deepestChild() does not need to be totally generic; we don't expect it to work in every case. For example, we know that div#grand-node has only one node at each level — for this lab, you can solve for that case, and not worry about a case where there are sibling nodes.
//
// HINT: Remember learning about breadth-first search? A similar technique might come in handy here.
//
// Have fun, and good luck!
