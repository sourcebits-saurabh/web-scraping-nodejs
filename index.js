var request = require("request");
var cheerio = require("cheerio");

request(
  {
    uri: "http://www.medium.com"
  },
  function(error, response, body) {
    var $ = cheerio.load(body);
    $("a").each(function() {
      var link = $(this);
      var text = link.text();
      var href = link.attr("href");
      console.log(text + " -> " + href);
    });
  }
);
