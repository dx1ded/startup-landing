"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sliderElement = document.querySelector('.about__slider .slider__container');
var ITEMS_COUNT = document.querySelectorAll('.slider__container .slider__item').length - 1;
var SLIDER_COUNT = sliderElement.getBoundingClientRect().width;
var prevBtn = document.querySelector('.about__slider .slider__action.prev');
var nextBtn = document.querySelector('.about__slider .slider__action.next');

var slideAction = function slideAction(px, direction) {
  // Direction: 1 - right, 0 - left
  if (direction && !nextBtn.classList.contains('disabled')) {
    sliderElement.style.transform += "translateX(-".concat(px, "px)");
    SLIDER_COUNT += px;
  } else if (!direction && !prevBtn.classList.contains('disabled')) {
    sliderElement.style.transform += "translateX(".concat(px, "px)");
    SLIDER_COUNT -= px;
  }

  validateSlide();
};

var validateSlide = function validateSlide() {
  nextBtn.classList.remove('disabled');
  prevBtn.classList.remove('disabled');

  if (SLIDER_COUNT >= (sliderElement.children[0].getBoundingClientRect().width + 20 * 2) * ITEMS_COUNT) {
    nextBtn.classList.add('disabled');
  }

  if (SLIDER_COUNT <= sliderElement.getBoundingClientRect().width) {
    prevBtn.classList.add('disabled');
  }
};

validateSlide(); // Initialize

prevBtn.addEventListener('click', function () {
  return slideAction(sliderElement.children[0].getBoundingClientRect().width + 20 * 2, 0);
});
nextBtn.addEventListener('click', function () {
  return slideAction(sliderElement.children[0].getBoundingClientRect().width + 20 * 2, 1);
});
window.addEventListener('resize', function () {
  SLIDER_COUNT = sliderElement.getBoundingClientRect().width;
  sliderElement.style.transform = 'translateX(0px)';
  validateSlide();
});
var burgerElement = document.querySelector('.burger');
var burgerOpen = document.querySelector('.burger__btn.open');
var burgerClose = document.querySelector('.burger__btn.close');
var burgerItems = document.querySelectorAll('.burger__list .header__item');
burgerOpen.addEventListener('click', function () {
  return burgerElement.classList.remove('closed');
});
burgerClose.addEventListener('click', function () {
  return burgerElement.classList.add('closed');
});

var _iterator = _createForOfIteratorHelper(burgerItems),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var element = _step.value;
    element.addEventListener('click', function () {
      return burgerElement.classList.add('closed');
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var sliderRow = document.querySelector('.clients .slider__container .row');
var sliderAuthor = document.querySelector('.clients .row__author');
var sliderButtons = document.querySelectorAll('.clients .slider__action-btn');
var obj = [{
  author: 'John Doe, Google Inc',
  text: 'Hvaing placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum”'
}, {
  author: 'Vladilen M, Yahoo Com',
  text: 'Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unfeeling he objection consisted.'
}, {
  author: 'Andrey Filich, Yandex Org',
  text: 'Removing yourself be in answered he. Otline grid salling this to Consider occasion get improved him she eat. Letter by lively oh denote an. '
}];

var slideHandler = function slideHandler(index) {
  sliderRow.children[1].textContent = obj[index].text;
  sliderRow.children[2].textContent = obj[index].author;
  sliderButtons.forEach(function (button, i) {
    button.classList.remove('active');
    return index === i && button.classList.add('active'); // Index
  });
};

sliderButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    return slideHandler(index);
  });
});

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});