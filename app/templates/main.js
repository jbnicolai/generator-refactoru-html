<%
if(props.jquery) { %>$(document).on('ready', function() {<%
}
if(props.handlebars) { %>

  var indexHtml = Template.render('index', {
    city: 'Boulder'
  });
  $('body').append(indexHtml);
<%
}
if(props.jquery) { %>
});<%
}%>
