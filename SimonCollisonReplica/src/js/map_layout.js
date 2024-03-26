(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['map_layout'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"text-4xl font-semibold mt-14 mb-6 log-color\">Geotagged posts</h1>\r\n<p class=\"my-6 text-xl font-semibold\">All posts with longitude and latitude metadata</p>\r\n<div class=\"w-full h-96\">\r\n    <iframe class=\"w-full h-full\" src=\"https://maps.google.com/maps?q=world&hl=en&z=1&amp;output=embed\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\">\r\n    </iframe>\r\n</div>\r\n<div>\r\n    <h3 class=\"text-3xl font-semibold mt-14 mb-6 log-color\">Sample tags</h3>\r\n    <ul class=\"flex justify-start gap-2 flex-wrap w-full  lg:w-2/3 text-lg\">\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Instagram</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Photos</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Japan</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Iceland</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">USA</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">The National</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Run</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Internet of Natural Things</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Notes</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Setlist</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Speaking</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Music</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Art</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Travel</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Outdoors</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Sport</a></li>\r\n    <li class=\"tag-item\"><a class=\"whitespace-nowrap\" href=\"\">Food & Drink</a></li>\r\n    </ul>\r\n\r\n    <p class=\"my-6 text-xl\">If you’re interested in how this map works, read <a class=\"page-link\" href=\"https://colly.com/stream/geotagging-posts\">this short post</a>.</p>\r\n</div>";
},"useData":true});
})();