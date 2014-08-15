<%
if(props.jquery) { %>$(document).on('ready', function() {<%
}
if(props.handlebars) { %>

  var indexTemplate = Handlebars.template(Handlebars.templates.index)
  var indexHtml = indexTemplate({
    city: 'Boulder'
  });
  $('body').append(indexHtml);
<%
}
if(props.jquery) { %>
});<%
}%>
