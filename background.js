var url_api='http://200.17.225.171';
// var url_api = 'http://localhost:8000';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == 'WHAT_IS_DOMAIN') {

      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function(tabs) {
        sendResponse({
          type: tabs[0].url
        });
      });
      return true; //so i can use sendResponse later
    } else if (request.type == 'GET_URL_IMG') {
      var url = chrome.runtime.getURL("icons8.png");
      sendResponse({
        u: url
      });
      return true;
    } else if (request.type == 'GET_URL_IMG2') {
      var url = chrome.runtime.getURL("nicEditIcons-latest.gif");
      sendResponse({
        u: url
      });
      return true;
    } else if (request.type == 'DEL_ANOTATIONS') {
      var url = request.url;
      var tk = 'Token ' + request.token;
      fetch(url, {
        method: 'delete',
        headers: {
          'Authorization': tk
        },

      }).then(function(response) {
        return response
      }).then(
        function(res) {

          sendResponse(res)
        }
      )
      return true;
    } else if (request.type == 'GET_ANOTATIONS') {
      var tk = 'Token ' + request.token;
      var tit = request.t;

      fetch(url_api + '/anotacoes/', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': tk
          },
          body: JSON.stringify({
            'titulo': tit
          })

        }).then(res => res.json())
        .then(function(valor) {


          sendResponse(valor)

          // populateSelect(valor)
        });
      return true;
    } else if (request.type == 'GET_UNIQUE_TITLES') {
      var tk = 'Token ' + request.token;

      fetch(url_api + '/get_uniques_titles/', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',

            'Authorization': tk
          },

        }).then(res => res.json())
        .then(function(valor) {
        
          sendResponse(valor)


        }).catch(function(error) {
          alert(error)
          console.log('There has been a problem with your fetch operation: ' + error.message);
        });
      return true; //so i can use sendResponse later
    } else if (request.type == "SAVE_DATA") {

      sendResponse({
        sucess: 'sim'
      });
      return true;
    } else if (request.type == "SEND_AJAX") {
      var tk = 'Token ' + request.token;
      fetch(url_api + '/insert_anotation/', {
        method: 'put',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': tk
        },
        body: JSON.stringify(request.data)
      }).then(res => {
        if (res.length == 0) {
          sendResponse({
            'status': 'error'
          })
        } else if (res.statusText == 'OK') {
          sendResponse({
            'status': 'salvo'
          })

        } else if (JSON.stringify(res) == '{}') {
          sendResponse({
            'status': 'error'
          })
        }
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      return true;
    } else if (request.type == 'TOKEN_IS_VALID') {
      tk = 'Token ' + request.token;

      fetch(url_api + '/token_is_valid/', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': tk
          },
          body: JSON.stringify({
            't': tk
          })
        }).then(res => res.json())
        .then(function(res) {



          sendResponse({
            status: res.status
          })
        }).catch(function(error) {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});
      return true;
    } else {
      sendResponse({
        status: 'error'
      })
      return true
    }
  }
);
var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {

    chrome.tabs.sendMessage(tabs[0].id, {
        message: 'TOGGLE-EXTENSION',
        toggle: toggle
      },
      function(response) {
        console.log(response)
        return true;
      }

    )
  });
})
// fetch('http://200.17.225.171/insert_anotation/', {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json',
//         'Authorization':'Token 63d73c7f5d5e8b06be185c7778e0aa1fe41f52f2'
//       },
//       body: JSON.stringify({data: "your data"})
//     }).then(res=>res.json())
//       .then(res => console.log(res));
