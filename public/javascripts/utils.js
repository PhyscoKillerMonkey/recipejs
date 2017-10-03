// public/javascripts/utils.js

function byid(id) {
  return document.getElementById(id);
}

function ajax(method, url, params, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState, xhr.status);
    if (xhr.readyState > 3 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }
  xhr.send(params);
  return xhr;
}

function ajaxGet(url, params, callback) {
  return ajax("GET", url, params, callback);
}

function ajaxDelete(url, callback) {
  console.log("DELETE: " + url);
  return ajax("DELETE", url, {}, callback);
}

function deleteRecipe(id) {
  ajaxDelete("/api/recipe/" + id, function(res) {
    window.location.href = "/recipes"
  });
}