var test = require("prova");
var generateURLs = require("./");

test('generating source urls for given flickr photo id', function (t) {
  t.plan(10);
  var urls = generateURLs({ id: 14321741011, farm: 3, server: 2922, secret: "aeb3b41d62", osecret: "0ddc14584b", format: "jpg" });
  t.equal(urls.square, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_s.jpg");
  t.equal(urls.largeSquare, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_q.jpg");
  t.equal(urls.thumbnail, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_t.jpg");
  t.equal(urls.small, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_m.jpg");
  t.equal(urls.small320, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_n.jpg");
  t.equal(urls.medium, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62.jpg");
  t.equal(urls.medium640, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_z.jpg");
  t.equal(urls.medium800, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_c.jpg");
  t.equal(urls.large, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_b.jpg");
  t.equal(urls.original, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_0ddc14584b_o.jpg");
});

test('doesnt generate original size if original secret is not passed', function (t) {
  t.plan(10);
  var urls = generateURLs({ id: 14321741011, farm: 3, server: 2922, secret: "aeb3b41d62", format: "jpg" });
  t.equal(urls.square, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_s.jpg");
  t.equal(urls.largeSquare, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_q.jpg");
  t.equal(urls.thumbnail, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_t.jpg");
  t.equal(urls.small, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_m.jpg");
  t.equal(urls.small320, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_n.jpg");
  t.equal(urls.medium, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62.jpg");
  t.equal(urls.medium640, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_z.jpg");
  t.equal(urls.medium800, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_c.jpg");
  t.equal(urls.large, "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_b.jpg");
  t.notOk(urls.original);
});
