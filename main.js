(function (exports) {
  'use strict';

  exports.LZW = function () {
    this.dictionarySize = 256;
  };

  exports.LZW.compress = function (data) {
    var i;
    var dictionary = {};
    var character;
    var wc;
    var w = '';
    var result = [];

    for (i = 0; i < this.dictionarySize; i = i + 1) {
      dictionary[String.fromCharCode(i)] = i;
    }
//nice
    for (i = 0; i < data.length; i = i + 1) {
      character = data.charAt(i);
      wc = w + character;
      if (dictionary.hasOwnProperty(wc)) {
        w = wc;
      } else {
        result.push(dictionary[w]);
        dictionary[wc] = this.dictionarySize;
        this.dictionarySize = this.dictionarySize + 1;
        w = String(character);
      }
    }//to change
