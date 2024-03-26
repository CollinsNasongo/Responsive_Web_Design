(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['search_layout'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"text-4xl font-semibold mt-14 mb-6 log-color\">Search the site</h1>\r\n<p class=\"my-6 text-xl font-semibold\">Search all titles, standfirsts and body text across all sections.</p>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"search_form"),depth0,{"name":"search_form","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<div id=\"search-content\" class=\"w-full min-h-56\"></div>";
},"usePartial":true,"useData":true});
})();