(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['search_form'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" class=\"search-form-border flex  mt-7 w-3/4 lg:w-1/2\">\r\n    <input type=\"text\" placeholder=\"\" class=\"w-4/5 py-2 px-4\">\r\n    <button class=\"input-color w-1/5 text-white font-semibold p-1\">\r\n        Search \r\n    </button>\r\n</form>";
},"useData":true});
})();