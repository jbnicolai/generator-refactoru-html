Template = {};
Template.render = function(templateName, context) { return Handlebars.template(Template.templates[templateName])(context) };
this["Template"] = this["Template"] || {};
this["Template"]["templates"] = this["Template"]["templates"] || {};
this["Template"]["templates"]["index"] = {"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "Hi "
    + escapeExpression(((helper = helpers.city || (depth0 && depth0.city)),(typeof helper === functionType ? helper.call(depth0, {"name":"city","hash":{},"data":data}) : helper)))
    + "!\n";
},"useData":true};
