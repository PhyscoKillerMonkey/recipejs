// public/javascripts/utils.js

function byid(id) {
  return document.getElementById(id);
}

function ajax(method, url, params, callback) {
  console.log(`${method}: ${url}`, params)
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState, xhr.status);
    if (xhr.readyState > 3 && xhr.status == 200) {
      callback(xhr);
    }
  }
  xhr.send(params);
  return xhr;
}

function ajaxGet(url, params, callback) {
  return ajax("GET", url, params, callback);
}

function ajaxDelete(url, callback) {
  return ajax("DELETE", url, {}, callback);
}

function deleteRecipe(id) {
  ajaxDelete(`/recipes/${id}`, function(res) {
    console.log(`Deleted recipe with ID: ${id}`);
    if (res.status == 200) {
      window.location.href = "/recipes"
    }
  });
}