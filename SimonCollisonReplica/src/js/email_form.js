(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['email_form'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" class=\"form-border flex  mt-7\">\r\n    <input type=\"email\" placeholder=\"Email address\" class=\"w-4/5 p-2\">\r\n    <button class=\"input-color w-1/5 text-white\">\r\n        ⟶ \r\n    </button>\r\n</form>";
},"useData":true});
})();