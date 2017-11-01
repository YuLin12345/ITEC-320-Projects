/* gal.JS fall 2017  */
"use strict";
var gal = {};
gal.hide = function (art) {
    gal.hideElements(gal.getElements(art));
};
gal.hideElements = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.hideElement(elements[i]);
    }
};
gal.hideElement = function (element) {
    gal.styleElement(element, "display", "none");
};
gal.show = function (art, a) {
    var elements = gal.getElements(art);
    if (a) {
        gal.hideElements(elements);
    }
    gal.showElements(elements);
};
gal.showElements = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.showElement(elements[i]);
    }
};
gal.showElement = function (element) {
    gal.styleElement(element, "display", "block");
};
gal.addStyle = function (art, prop, val) {
    gal.styleElements(gal.getElements(art), prop, val);
};
gal.styleElements = function (elements, prop, val) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.styleElement(elements[i], prop, val);
    }
};
gal.styleElement = function (element, prop, val) {
    element.style.setProperty(prop, val);
};
gal.toggleShow = function (art) {
    var i, x = gal.getElements(art),
        l = x.length;
    for (i = 0; i < l; i++) {
        if (x[i].style.display == "none") {
            gal.styleElement(x[i], "display", "block");
        } else {
            gal.styleElement(x[i], "display", "none");
        }
    }
};
gal.addClass = function (art, name) {
    gal.addClassElements(gal.getElements(art), name);
};
gal.addClassElements = function (elements, name) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.addClassElement(elements[i], name);
    }
};
gal.addClassElement = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
};
gal.removeClass = function (art, name) {
    gal.removeClassElements(gal.getElements(art), name);
};
gal.removeClassElements = function (elements, name) {
    var i, l = elements.length,
        arr1, arr2, j;
    for (i = 0; i < l; i++) {
        gal.removeClassElement(elements[i], name);
    }
};
gal.removeClassElement = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
};
gal.toggleClass = function (art, c1, c2) {
    gal.toggleClassElements(gal.getElements(art), c1, c2);
};
gal.toggleClassElements = function (elements, c1, c2) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.toggleClassElement(elements[i], c1, c2);
    }
};
gal.toggleClassElement = function (element, c1, c2) {
    var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
    t1 = (c1 || "");
    t2 = (c2 || "");
    t1Arr = t1.split(" ");
    t2Arr = t2.split(" ");
    arr = element.className.split(" ");
    if (t2Arr.length == 0) {
        allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {
                allPresent = false;
            }
        }
        if (allPresent) {
            gal.removeClassElement(element, t1);
        } else {
            gal.addClassElement(element, t1);
        }
    } else {
        allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {
                allPresent = false;
            }
        }
        if (allPresent) {
            gal.removeClassElement(element, t1);
            gal.addClassElement(element, t2);
        } else {
            gal.removeClassElement(element, t2);
            gal.addClassElement(element, t1);
        }
    }
};
gal.getElements = function (id) {
    if (typeof id == "object") {
        return [id];
    } else {
        return document.querySelectorAll(id);
    }
};