var keys = {
  square: 's',
  largeSquare: 'q',
  thumbnail: 't',
  small: 'm',
  small320: 'n',
  medium: '',
  medium640: 'z',
  medium800: 'c',
  large: 'b',
  large1600: 'h',
  large2048: 'k',
  original: 'o'
};

module.exports = all;

function all (options) {
  var result = {};

  var key;
  for (key in keys) {
    result[key] = one(key, options);
  }

  return result;
}

function one (key, options) {
  var secret = key == "original" ? options.osecret || options.originalSecret | options.original_secret : options.secret;
  return "https:\/\/farm" + options.farm + ".staticflickr.com\/" + options.server + "\/" + options.id + "_" + secret + (keys[key] ? "_" + keys[key] : "") + "." + options.format;
}
