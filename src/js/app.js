'use strict';

(function (document) {
  var message = 'Hello, World!';
  var p = document.createElement("p");
  var body = document.createElement("body");
  p.innerText = message;
  body.appendChild(p);
  document.title = message;
  document.body = body;
})(document);
