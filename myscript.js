chrome.storage.local.get("status_plugin", function(data) {
  var st = data.status_plugin;
  var write_anotattion = document.getElementById("divform");
  var read_anotattion = document.getElementById("read_anotattion");
  var dv_st = document.getElementById("divform");
  var bt_st = document.getElementById("showHide");
  if (typeof st === 'undefined'){


  }
  else if(st===false){


      write_anotattion.style.display = 'none';
      read_anotattion.style.display = 'none';
      bt_st.style.display = 'none';


 } else if (st===true){


   write_anotattion.style.display = 'block';
   read_anotattion.style.display = 'block';
   bt_st.style.display = 'block';
 }

});


var url_api='http://200.17.225.171';
// var url_api='http://localhost:8000';
var url_buttons;
var iconsURL = chrome.runtime.getURL("nicEditIcons-latest.gif");



var htmlText = '<div id="read_anotattion";  style="overflow:auto !important; z-index:2147483648 !important; display:none ;font-family: Open Sans !important;position:fixed !important; top:0 !important; right:0 !important;padding:5px !important;width:30%  !important;">     <div id="myModal" name=0 style="display: none;  z-index: 214748364;  padding: 100px; position: fixed;top: 0; left: 0;width: 100%; height: 100%;  overflow: auto; background-color: rgba(0,0,0,0.4);" class="modal">        <!-- Modal content -->       <div class="modal-content" style="background-color:#FBEEE6 !important; color:#6E2C00 !important;  margin: auto !important;  padding: 30px !important; border-radius: 10px !important;border: 1px solid #888 !important;  width: 80% !important;">         <h2>Tem certeza que deseja deletar esta anotação?</h2>         <div style="float:right">           <button id="button-delete" style="-webkit-box-direction: normal !important; background-color: #863333 !important; color: white !important; border-radius: 5px !important; font-size: 14px !important; font-weight: 100 !important; padding: 5px !important; box-shadow: 1px 1px 10px 0 rgb(119 113 113) !important; text-shadow: 1px 1px 1px blue !important; border: solid #337FED 1px !important; text-decoration: none !important; display: inline-block !important; cursor: pointer !important; text-align: center !important;">Deletar</button>           <button id="button-cancel" name ="0" style="-webkit-box-direction: normal !important; background-color: #863333 !important; color: white !important; border-radius: 5px !important; font-size: 14px !important; font-weight: 100 !important; padding: 5px !important; box-shadow: 1px 1px 10px 0 rgb(119 113 113) !important; text-shadow: 1px 1px 1px blue !important; border: solid #337FED 1px !important; text-decoration: none !important; display: inline-block !important; cursor: pointer !important; text-align: center !important;">Cancelar</button>         </div>       </div>      </div>       <div style="text-align:center !important;font-size:16px !important; color: white !important; background-color:#4e4a4a !important; width:100% !important; padding-top:10px !important;padding-bottom:10px !important;border-radius:5px 5px 0 0px !important;">       <form style="font-family: Open Sans  !important;">         <strong for="Titulos_unicos">Escolha um título para exibir as anotaçoes:</strong>         <select name="Titulos_unicos" style="padding:5px !important; border-radius:3px !important;background-color:white !important;color:black  !important;" id="titulos_unicos">          </select>        </form>     </div>     <div id="listingTable_plugin" style="width:100%  !important;"></div>     <div style=" background-clip: border-box !important; border-radius: 4px !important;text-align:center !important;color:white !important;padding-top:5px !important;padding-bottom:10px !important;width:100% !important;background-color:#2e4053 !important;">       <button id="prev_plugin"         style="visibility:hidden !important;-webkit-border-radius: 5px !important;    -moz-border-radius:5px !important;    border-radius: 5px !important;      font-size: 14px !important;    font-weight: 100 !important;    padding: 5px !important; font-family: monospace !important;    background-color: white !important;    -webkit-box-shadow: 1px 1px 5px 0 #000000 !important;    -moz-box-shadow: 1px 1px 5px 0 #000000 !important; box-shadow: 1px 1px 10px 0 rgb(119 113 113) !important;    text-shadow: 1px 1px 1px blue !important;    border: solid #337FED 1px !important; text-decoration: none !important;    display:inline-block !important;    cursor: pointer !important;    text-align: center !important;"         type="button" name="button"><a id="btn_prev_plugin" style="text-decoration:none  !important;">Anterior</a></button>       <a         style=" border-radius: 2px !important;font-family: monospace !important; font-size: 14px !important;  color: black !important;  font-weight: 100 !important;    padding: 3px !important; vertical-align:center !important;    background-color: white !important;    -webkit-box-shadow: inset 1px 1px 1px #000000 !important;   -moz-box-shadow: inset 1px 5px 0 #000000 !important; text-decoration:none !important; ">pagina: <a id="page_plugin" style=" border-radius: 2px !important;font-family: monospace !important; font-size: 14px !important;  color: black !important;  font-weight: 100 !important;    padding: 3px !important; vertical-align:center !important;    background-color: white !important;    -webkit-box-shadow: inset 1px 1px 1px #000000 !important;   -moz-box-shadow: inset 1px 5px 0 #000000 !important; text-decoration:none !important; "></a><a>           <button id="next_plugin"             style="visibility:hidden !important;font-family: monospace !important; -webkit-border-radius: 5px !important;    -moz-border-radius:5px !important;    border-radius: 5px !important;       font-size: 14px !important;    font-weight: 100 !important;    padding: 5px !important;    background-color: white !important;    -webkit-box-shadow: 1px 1px 5px 0 #000000 !important;    -moz-box-shadow: 1px 1px 5px 0 #000000 !important; box-shadow: 1px 1px 10px 0 rgb(119 113 113) !important;    text-shadow: 1px 1px 1px blue !important;    border: solid #337FED 1px !important; text-decoration: none !important;    display:inline-block !important;    cursor: pointer !important;    text-align: center !important;"             type="button" name="button"><a  id="btn_next_plugin" style="text-decoration:none  !important;">Próxima</a></button>       </div>     <div style="padding-bottom:15px !important;padding-top:15px !important; background-color:black !important;color:#adf5fd !important;position: relative !important; width :100% !important; max-height:100px !important;overflow: auto !important;margin:0 !important;" id="filtros"></div>    </div>';

var div2 = document.createElement('div');
// div2.id='read_anotattion';
document.body.appendChild(div2);
div2.outerHTML = htmlText;




document.getElementById("btn_next_plugin").addEventListener('click', function() {
  nextPage()
});
document.getElementById("btn_prev_plugin").addEventListener('click', function() {
  prevPage()
});
div2.style.width = '100% !important;';
div2.style.height = '100% !important;';
div2.style.position = 'fixed !important;';
div2.style.top = 0;
div2.style.zIndex = 214748364;
div2.style.right = 0;


var div = document.createElement('div');
var form = document.createElement('form');
var style_button = "style='font-size: 100% !important;padding: 10px 10px !important; color: rgba(255,255,255,.8) !important; border: transparent !important; background-color: red !important; text-decoration: none !important; border-radius: 2px !important;display:inline-block !important;line-height: normal !important; white-space: nowrap !important; vertical-align: middle !important;text-align: center !important;cursor: pointer !important;-webkit-user-drag: none !important; -webkit-user-select: none !important;-moz-user-select: none !important;-ms-user-select: none !important; user-select: none !important;-webkit-box-sizing: border-box !important; box-sizing: border-box !important;'";

var style_button1 = "style='position:fixed !important;height:40px !important;right:5px !important; bottom:5px !important; z-index:2147483648 !important;padding: 2px 2px !important; background-color:white !important; border-style:double !important;border-color:black !important; border-radius: 2px !important;display:inline-block !important;line-height: normal !important;  vertical-align: middle !important;text-align: center !important;cursor: pointer !important;'";


var style_input = "style=' width:calc(25% - 9px); padding: .5em .6em !important;display: inline-block !important; border: 1px solid #ccc !important; -webkit-box-shadow: inset 0 1px 3px #ddd !important; box-shadow: inset 0 1px 3px #ddd !important; border-radius: 4px !important;    vertical-align: middle !important;    -webkit-box-sizing: border-box !important;    box-sizing: border-box !important;font-family: Helvetica,Arial,sans-serif !important;  letter-spacing: .01em !important; text-align:center !important;font-size:14px !important;margin-bottom: 20px !important;'";

var style_div = "style='text-aling:font-size:16px !important;background-color:#2e4053 !important; z-index:214748364  !important;webkit-box-shadow: -5px -4px 7px -5px rgba(0,0,0,0.38) !important;box-shadow: -5px -4px 7px -5px rgba(0,0,0,0.38) !important; padding:2px !important;position:fixed !important; top:50% !important; left:50% !important; width:100% !important; height:100%'";

var style_form = "style='padding:10px;'";
var style_txtarea = "style='color:black !important; padding: .5em .6em !important;display: inline-block !important; border: 1px solid #ccc !important; -webkit-box-shadow: inset 0 1px 3px #ddd !important; box-shadow: inset 0 1px 3px #ddd !important; border-radius: 4px !important;    vertical-align: middle !important;    -webkit-box-sizing: border-box !important;    box-sizing: border-box !important;font-family: Helvetica,Arial,sans-serif !important;    letter-spacing: .01em !important; text-align:left !important;font-size:14px !important;margin-bottom: 20px !important;height:40% !important;width:calc(50% - 16px);'";

document.body.appendChild(div);
div.id = 'myDivId';
htmlmodal = '<div id="myModal2" style ="display: none !important;position:fixed !important; width:100% !important; height:100% !important;z-index:21474836491 !important;top:0 !important;padding-top: 100px !important; overflow: auto !important; background-color: rgb(0,0,0) !important; background-color: rgba(0,0,0,0.4) !important;"><div class="modal-content" style="position: relative !important; background-color: #fefefe !important;  margin: auto !important;  padding: 0 !important;  border: 1px solid #888 !important;  width: 80% !important;  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;"><div class="modal-header" style="padding: 2px 16px !important; background-color: #5cb85c !important; color: white !important;"><h2>Insira seu token</h2></div><div class="modal-body" style="padding: 2px 16px !important;"><input id="token" type="text" placeholder="token"></input><button  id="salvarToken">salvar token</button> <button id="cancel_token">Cancelar</button></div></div></div>';



htmlText = "<div id='divform' " + style_div + "><form id='myForm' " + style_form + "><input id='titulo'  " + style_input + " type='text' placeholder='Escreva a um titulo (obrigatorio)'></input> <input " + style_input + " id='subtitulo' type='text' placeholder='Escreva algum subtitulo (opcional)' /> <br /> <textarea id='texto' rows='7'  " + style_txtarea + " placeholder='Escreva seu texto (obrigatorio)'></textarea><br /><input  " + style_input + " id='inputdatetime' type='datetime-local'></input><input  " + style_input + " type='text' id='site'></input><br ><button id='btnSend'  " + style_button + " >Enviar</button><pre id='status' style='padding:5px;' ></pre></form><div style='position:fixed !important; bottom:5px !important;right:5px !important;'></div></div><img id='showHide'  " + style_button1 + " name='myForm' src='icons8.png' >";
div.outerHTML = htmlText + htmlmodal;

chrome.runtime.sendMessage({
    type: 'GET_URL_IMG',

  },
  function(response) {
    var url = response.u;
    document.getElementById('showHide').src = url;

  })


document.getElementById('cancel_token').addEventListener('click',function(ev){
  document.getElementById('myModal2').style.display='none';
})
document.getElementById('showHide').addEventListener('contextmenu', function(ev) {
    document.getElementById('myModal2').style.display ='block';
    return false;
}, false);

document.getElementById('showHide').addEventListener('click', function() {
  var write_anotattion = document.getElementById("divform");
  var read_anotattion = document.getElementById("read_anotattion");
  var dv_st = document.getElementById("divform");
  var bt_st = document.getElementById("showHide");

  if (bt_st.name == 'myForm') {
    bt_st.setAttribute("name", "read_anotattion");
    write_anotattion.style.display = 'none';
    read_anotattion.style.display = 'block';

  } else if (bt_st.name == 'read_anotattion') {
    bt_st.setAttribute("name", "none");
    write_anotattion.style.display = 'none';
    read_anotattion.style.display = 'none';

  } else if (bt_st.name == 'none') {
    bt_st.setAttribute("name", "myForm");
    write_anotattion.style.display = 'block';
    read_anotattion.style.display = 'none';

  }
})
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.message == "TOGGLE-EXTENSION") {
    var write_anotattion = document.getElementById("divform");
    var read_anotattion = document.getElementById("read_anotattion");
    var bt_showHide = document.getElementById("showHide");

    if (request.toggle == true) {
      chrome.storage.local.set({
        'status_plugin': false
      })

      write_anotattion.style.display = 'none';
      read_anotattion.style.display = 'none';
      bt_showHide.style.display = 'none';
    } else {
      chrome.storage.local.set({
        'status_plugin': {'status':true}
      })
        bt_showHide.style.display = 'block';
      write_anotattion.style.display = 'block';
      read_anotattion.style.display = 'none';

    }
    sendResponse('{status:request.toggle}')

  }
  return true
});
var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());


document.getElementById('inputdatetime').value = now.toISOString().slice(0, 16);
chrome.runtime.sendMessage({
    type: 'WHAT_IS_DOMAIN'
  },
  function(response) {

    document.getElementById('site').value = response.type;

  });

document.getElementById('btnSend').addEventListener('click', function(evt) {
  var titulo = document.getElementById('titulo').value;
  var subtitulo = document.getElementById('subtitulo').value;
  if (subtitulo.length == 0) {
    subtitulo = 'Sem subtitulo';
  }
  var texto = document.getElementById('id_moditexto').innerHTML;
  let url_font = document.getElementById('site').value;
  let data = document.getElementById('inputdatetime').value;
  evt.preventDefault();
  if (titulo.length == 0 || texto.length == 0) {
    alert("Os campos titulo e texto são obrigatórios!");
    evt.preventDefault();
    return;
  }
  var json = {
    'titulo': titulo,
    'subtitulo': subtitulo,
    'texto': texto,
    'url': url_font


  }

  chrome.storage.local.get("token", function(data) {
    var modal = document.getElementById("myModal2");
    if (data.token) {
      chrome.runtime.sendMessage({
          type: 'SEND_AJAX',
          data: json,
          token: data.token
        },
        function(response) {


          var st = document.getElementById('status');
          if (response.status == 'error') {
            document.getElementById("myModal2").style.display = 'block';
          } else if (response.status != "salvo") {
            st.innerHTML = 'Algum erro ocorreu';
            st.style.color = 'red';
            st.style.backgroundColor = 'white !important';
            evt.preventDefault();
          } else {

            st.innerHTML = 'Ultima solicitacão realizada com sucesso!';
            st.style.color = 'green';
            st.style.backgroundColor = 'white';
            document.getElementById('titulo').value = '';
            document.getElementById('subtitulo').value = '';
            document.getElementById('id_moditexto').innerHTML = '';

          }

        });




    } else {

      modal.style.display = 'block';
    }



  });

})

document.getElementById('salvarToken').addEventListener('click', function() {

  var tk = document.getElementById('token').value;

  if (tk == null) {
    alert('Insira o token')
  } else {
    chrome.runtime.sendMessage({
        type: 'TOKEN_IS_VALID',
        token: tk
      },
      function(response) {

        if (typeof response == "undefined") {
          alert('Token invalido')
          document.getElementById("myModal2").style.display = 'block';
          return;

        }

        if (response.status == 1) {
          chrome.storage.local.set({
            'token': tk
          }, function() {
            if (chrome.runtime.lastError) {
              console.error(
                "Error setting " + key + " to " + JSON.stringify(data) +
                ": " + chrome.runtime.lastError.message
              );
            }
          });
          document.getElementById("myModal2").style.display = 'none';
        } else {
          alert('Token invalido')
          document.getElementById("myModal2").style.display = 'block';

        }



      });


  }


})

function openModal() {

  document.getElementById('button-delete').setAttribute("name", this.name);
  document.getElementById('myModal').style.display = 'block';
}


var objJson;
var objJsonClone;
var listSubtitles = [];


function populateSelect(obj) {
  var x = document.getElementById("titulos_unicos");
  x.options.length = 0;
  var option = document.createElement("option");
  option.text = 'selecione um titulo';
  x.add(option);

  obj.forEach((item, i) => {
    option = document.createElement("option");
    option.text = item.titulo;


    x.add(option);


  });
};

document.getElementById("titulos_unicos").addEventListener("change", function(evt) {
  evt.preventDefault();
  chrome.storage.local.get("token", function(data) {

    var modal = document.getElementById("myModal2");
    if (data.token) {
      var tit = document.getElementById("titulos_unicos").value;



      chrome.runtime.sendMessage({
          type: 'GET_ANOTATIONS',
          token: data.token,
          t: tit
        },
        function(response) {

          objJson = response;
          listSubtitles = [];
          objJson.forEach((item, i) => {
            listSubtitles.push(item.subtitulo);
          });
          objJsonClone = objJson;
          changePage(1);
          criar_filtros([...new Set(listSubtitles)])


        });


      document.getElementById("myModal2").style.display = 'none';

    } else {

      modal.style.display = 'block';
    }

  })


});

var current_page_plugin = 1;
var records_per_page = 2;

function prevPage() {

  if (current_page_plugin > 1) {
    current_page_plugin--;
    changePage(current_page_plugin);
  }
}

function nextPage() {

  if (current_page_plugin < numPages()) {
    current_page_plugin++;
    changePage(current_page_plugin);
  }
}

function changePage(page) {

  var btn_next = document.getElementById("btn_next_plugin");
  var btn_prev = document.getElementById("btn_prev_plugin");
  var next = document.getElementById("next_plugin");
  var prev = document.getElementById("prev_plugin");
  var listing_table = document.getElementById("listingTable_plugin");
  var page_span = document.getElementById("page_plugin");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJsonClone.length; i++) {

      var style_panel =
        'style=" width: 100%; font-size: 15px; line-height: 1.5; text-align: left;box-sizing: border-box; position: relative;display: flex; -webkit-box-orient: vertical;-webkit-box-direction: normal; flex-direction: column; min-width: 0; background-color:  #2e4053;color:#adf5fd; background-clip: border-box; border: 1px solid rgba(0,0,0,.125); border-radius: 4px;-webkit-box-shadow: 5px 4px 10px -5px rgba(0,0,0,0.9); box-shadow: 5px 4px 10px -5px rgba(0,0,0,0.9);margin-top:10px;overflow:hidden background-color: #2e4053"'
      var style_panel_header = 'style= " text-align:left;padding-left:5px;margin-bottom: 0; background-color:  #2e4053;color:#adf5fd;border-bottom: 1px solid rgba(0,0,0,.125);"';
      var html_panel = '<div id="card' + objJsonClone[i].id + '" class="filterDiv ' + objJsonClone[i].subtitulo + '"' + style_panel + '><div id="card-header" ' + style_panel_header + '> <span>Título:  ' + objJsonClone[i].titulo +
        '</span>  <span style="padding-left:15px"> Subtítulo:  ' + objJsonClone[i].subtitulo +
        '</span></p>     <div id="card-text" class="card_class_plugin" style="padding:10px; height:150px; overflow: auto; color:black;background-color:white !important;resize:vertical; width: calc(100% - 20px); max-width: 100%;">' + objJsonClone[i].texto +
        '</div >  </div> <div style =" padding:10px; max-width:100%;overflow:hidden;color:#adf5fd;!important;" id="card-footer"><a style="color:#adf5fd;font-size:12px;" target="_blank" href="' + objJsonClone[i].site + '">' + objJsonClone[i]
        .site + '</a><p>' + new Date(objJsonClone[i].datetime).toLocaleString("en-GB") +
        '</p> <button style="background-color:#863333;color:white;-webkit-border-radius: 5px;    -moz-border-radius:5px;    border-radius: 5px;       font-size: 14px;    font-weight: 100;    padding: 5px;   -webkit-box-shadow: 1px 1px 5px 0 #000000;    -moz-box-shadow: 1px 1px 5px 0 #000000; box-shadow: 1px 1px 10px 0 rgb(119 113 113);    text-shadow: 1px 1px 1px blue;    border: solid #337FED 1px; text-decoration: none;    display:inline-block;    cursor: pointer;    text-align: center;float:right;" type="button" class="delete_plugin"   name=' +
        objJsonClone[i].id + '>Apagar anotação</button></div> </div>'

      listing_table.innerHTML += html_panel + "<br>";

  }




  page_span.innerHTML = page + "/" + numPages();

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
    prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
    prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
    next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
    next.style.visibility = "visible";
  }
  var btn_deletes = document.getElementsByClassName("delete_plugin");
  Array.from(btn_deletes).forEach(function(element_del_plugin) {
    element_del_plugin.addEventListener('click', openModal);
  });

}




document.getElementById('button-cancel').addEventListener('click', function() {
  name = this.name;
  card = this.card;
  if (name == 0) {
    document.getElementById('myModal').style.display = 'none';

  }

});

document.getElementById("button-delete").addEventListener('click', function() {
  var id_card = this.name;
  var card_del = this.card;

  if (id_card != 0) {
    var url = url_api+'/delete/' + id_card;
    chrome.storage.local.get("token", function(data) {
      var modal = document.getElementById("myModal2");
      if (data.token) {


        chrome.runtime.sendMessage({
            type: 'DEL_ANOTATIONS',
            token: data.token,
            url: url
          },
          function(res) {

            // response = JSON.parse(response);
            if (res == 0) {
              alert('Não foi possivel excluir essa anotação, tente mais tarde!')

            } else {
              let cardname = `card${id_card}`;

              var el = document.getElementById(cardname);
              el.remove();
              objJsonClone = [];
              listSubtitles = [];
              objJson.forEach((item, i) => {
                if (item.id != id_card) {
                  objJsonClone.push(item)
                  listSubtitles.push(item.subtitulo);
                }
              })
              objJson = objJsonClone;
              try {
                criar_filtros([...new Set(listSubtitles)])
              } catch (e) {

              } finally {

              }
              document.getElementById('myModal').style.display = 'none';

            }

          });

        document.getElementById("myModal2").style.display = 'none';


      } else {

        modal.style.display = 'block';
      }

    })

  }
  if (name == 0) {
    document.getElementById('myModal').style.display = 'none';

  }

});

function numPages() {
  return Math.ceil(objJsonClone.length / records_per_page);
}

function filterSelection(c) {

  if (c == 'all') {

    objJsonClone = objJson;

    changePage(1)

  } else {

    c = this.id;
    objJsonClone = [];
    objJson.forEach((item, i) => {
      if (item.subtitulo == c) {
        objJsonClone.push(item)
      }
    })
    changePage(1)

  }
  alert('passou')
  current_page_plugin = 1;
};

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filtros");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function criar_filtros(arr) {
  var cores = ["#C0392B", "#b93585", "#5f747d", "#9B59B6", "#005e9c", "#b95f20f5", "#0a7d3b", "#b15608"];
  var div_filtros = document.getElementById('filtros');
  div_filtros.innerHTML = "";
  div_filtros.innerHTML =
    '<label>Filtrar por subtitulos:  </label><span class="btn_filter_plugin  active" style="display:inline-block;letter-spacing: 1px; border-radius:2px;font-family: monospace;background-color:#9b59b6 ; cursor: pointer;margin:2px 2px 0 0; color:white; padding:2px; font-size:13px;"  id="all">Mostrar todos</span>';
  arr.forEach((item, i) => {
    var cor = 'background-color:' + cores[Math.floor(Math.random() * cores.length)]; + ';'.replace('"', '');
    div_filtros.innerHTML += '<span class="btn_filter_plugin" style="display:inline-block;letter-spacing: 1.5px; border-radius:2px;' + cor +
      '; cursor: pointer;margin:3px 3px 0 0; box-shadow: 1px 1px 5px 0 rgb(119 113 113); color:white; padding:4px;font-family: monospace; font-size:13px; " id="' + item + '">' + item + '</span>';
  });
  var list_filter = document.getElementsByClassName('btn_filter_plugin');

  Array.from(list_filter).forEach(function(filt) {

    filt.addEventListener('click',
      function() {

        c = this.id;
        if (c == 'all') {

          objJsonClone = objJson;
          changePage(1)
          current_page_plugin = 1;
        } else {

          c = this.id;
          objJsonClone = [];
          objJson.forEach((item, i) => {
            if (item.subtitulo == c) {
              objJsonClone.push(item)
            }
          })
          changePage(1)
          current_page_plugin = 1;
        }
      });
  });

  // filterSelection("all")

}

function uniquesTitles() {
  chrome.storage.local.get("token", function(data) {
    var modal = document.getElementById("myModal2");
    if (data.token) {


      chrome.runtime.sendMessage({
          type: 'GET_UNIQUE_TITLES',
          token: data.token
        },
        function(response) {


          if (response.detail !="Token inválido.") {
            populateSelect(response)
            document.getElementById("myModal2").style.display = 'none';
          } else {
            document.getElementById("myModal2").style.display = 'block';
          }

        });




    } else {

      modal.style.display = 'block';
    }

  })

}
document.getElementById('titulos_unicos').addEventListener("mouseover", function() {
  uniquesTitles()
})
/////////////////////////////////////////////////




var bkExtend = function() {
  var A = arguments;
  if (A.length == 1) {
    A = [this, A[0]]
  }
  for (var B in A[1]) {
    A[0][B] = A[1][B]
  }
  return A[0]
};

function bkClass() {}
bkClass.prototype.construct = function() {};
bkClass.extend = function(C) {
  var A = function() {
    if (arguments[0] !== bkClass) {
      return this.construct.apply(this, arguments)
    }
  };
  var B = new this(bkClass);
  bkExtend(B, C);
  A.prototype = B;
  A.extend = this.extend;
  return A
};
var bkElement = bkClass.extend({
  construct: function(B, A) {
    if (typeof(B) == "string") {
      B = (A || document).createElement(B)
    }
    B = $BK(B);
    return B
  },
  appendTo: function(A) {
    A.appendChild(this);
    return this
  },
  appendBefore: function(A) {
    A.parentNode.insertBefore(this, A);
    return this
  },
  addEvent: function(B, A) {
    bkLib.addEvent(this, B, A);
    return this
  },
  setContent: function(A) {
    this.innerHTML = A;
    return this
  },
  pos: function() {
    var C = curtop = 0;
    var B = obj = this;
    if (obj.offsetParent) {
      do {
        C += obj.offsetLeft;
        curtop += obj.offsetTop
      } while (obj = obj.offsetParent)
    }
    var A = (!window.opera) ? parseInt(this.getStyle("border-width") || this.style.border) || 0 : 0;
    return [C + A, curtop + A + this.offsetHeight]
  },
  noSelect: function() {
    bkLib.noSelect(this);
    return this
  },
  parentTag: function(A) {
    var B = this;
    do {
      if (B && B.nodeName && B.nodeName.toUpperCase() == A) {
        return B
      }
      B = B.parentNode
    } while (B);
    return false
  },
  hasClass: function(A) {
    return this.className.match(new RegExp("(\\s|^)nicEdit-" + A + "(\\s|$)"))
  },
  addClass: function(A) {
    if (!this.hasClass(A)) {
      this.className += " nicEdit-" + A
    }
    return this
  },
  removeClass: function(A) {
    if (this.hasClass(A)) {
      this.className = this.className.replace(new RegExp("(\\s|^)nicEdit-" + A + "(\\s|$)"), " ")
    }
    return this
  },
  setStyle: function(A) {
    var B = this.style;
    for (var C in A) {
      switch (C) {
        case "float":
          B.cssFloat = B.styleFloat = A[C];
          break;
        case "opacity":
          B.opacity = A[C];
          B.filter = "alpha(opacity=" + Math.round(A[C] * 100) + ")";
          break;
        case "className":
          this.className = A[C];
          break;
        default:
          B[C] = A[C]
      }
    }
    return this
  },
  getStyle: function(A, C) {
    var B = (!C) ? document.defaultView : C;
    if (this.nodeType == 1) {
      return (B && B.getComputedStyle) ? B.getComputedStyle(this, null).getPropertyValue(A) : this.currentStyle[bkLib.camelize(A)]
    }
  },
  remove: function() {
    this.parentNode.removeChild(this);
    return this
  },
  setAttributes: function(A) {
    for (var B in A) {
      this[B] = A[B]
    }
    return this
  }
});
var bkLib = {
  isMSIE: (navigator.appVersion.indexOf("MSIE") != -1),
  addEvent: function(C, B, A) {
    (C.addEventListener) ? C.addEventListener(B, A, false): C.attachEvent("on" + B, A)
  },
  toArray: function(C) {
    var B = C.length,
      A = new Array(B);
    while (B--) {
      A[B] = C[B]
    }
    return A
  },
  noSelect: function(B) {
    if (B.setAttribute && B.nodeName.toLowerCase() != "input" && B.nodeName.toLowerCase() != "textarea") {
      B.setAttribute("unselectable", "on")
    }
    for (var A = 0; A < B.childNodes.length; A++) {
      bkLib.noSelect(B.childNodes[A])
    }
  },
  camelize: function(A) {
    return A.replace(/\-(.)/g, function(B, C) {
      return C.toUpperCase()
    })
  },
  inArray: function(A, B) {
    return (bkLib.search(A, B) != null)
  },
  search: function(A, C) {
    for (var B = 0; B < A.length; B++) {
      if (A[B] == C) {
        return B
      }
    }
    return null
  },
  cancelEvent: function(A) {
    A = A || window.event;
    if (A.preventDefault && A.stopPropagation) {
      A.preventDefault();
      A.stopPropagation()
    }
    return false
  },
  domLoad: [],
  domLoaded: function() {
    if (arguments.callee.done) {
      return
    }
    arguments.callee.done = true;
    for (i = 0; i < bkLib.domLoad.length; i++) {
      bkLib.domLoad[i]()
    }
  },
  onDomLoaded: function(A) {
    this.domLoad.push(A);
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", bkLib.domLoaded, null)
    } else {
      if (bkLib.isMSIE) {
        document.write("<style>.nicEdit-main p { margin: 0; }</style><script id=__ie_onload defer " + ((location.protocol == "https:") ? "src='javascript:void(0)'" : "src=//0") + "><\/script>");
        $BK("__ie_onload").onreadystatechange = function() {
          if (this.readyState == "complete") {
            bkLib.domLoaded()
          }
        }
      }
    }
    window.onload = bkLib.domLoaded
  }
};

function $BK(A) {
  if (typeof(A) == "string") {
    A = document.getElementById(A)
  }
  return (A && !A.appendTo) ? bkExtend(A, bkElement.prototype) : A
}
var bkEvent = {
  addEvent: function(A, B) {
    if (B) {
      this.eventList = this.eventList || {};
      this.eventList[A] = this.eventList[A] || [];
      this.eventList[A].push(B)
    }
    return this
  },
  fireEvent: function() {
    var A = bkLib.toArray(arguments),
      C = A.shift();
    if (this.eventList && this.eventList[C]) {
      for (var B = 0; B < this.eventList[C].length; B++) {
        this.eventList[C][B].apply(this, A)
      }
    }
  }
};

function __(A) {
  return A
}
Function.prototype.closure = function() {
  var A = this,
    B = bkLib.toArray(arguments),
    C = B.shift();
  return function() {
    if (typeof(bkLib) != "undefined") {
      return A.apply(C, B.concat(bkLib.toArray(arguments)))
    }
  }
};
Function.prototype.closureListener = function() {
  var A = this,
    C = bkLib.toArray(arguments),
    B = C.shift();
  return function(E) {
    E = E || window.event;
    if (E.target) {
      var D = E.target
    } else {
      var D = E.srcElement
    }
    return A.apply(B, [E, D].concat(C))
  }
};



var nicEditorConfig = bkClass.extend({
  buttons: {
    'bold': {
      name: __('Click to Bold'),
      command: 'Bold',
      tags: ['B', 'STRONG'],
      css: {
        'font-weight': 'bold'
      },
      key: 'b'
    },
    'italic': {
      name: __('Click to Italic'),
      command: 'Italic',
      tags: ['EM', 'I'],
      css: {
        'font-style': 'italic'
      },
      key: 'i'
    },
    'underline': {
      name: __('Click to Underline'),
      command: 'Underline',
      tags: ['U'],
      css: {
        'text-decoration': 'underline'
      },
      key: 'u'
    },
    'left': {
      name: __('Left Align'),
      command: 'justifyleft',
      noActive: true
    },
    'center': {
      name: __('Center Align'),
      command: 'justifycenter',
      noActive: true
    },
    'right': {
      name: __('Right Align'),
      command: 'justifyright',
      noActive: true
    },
    'justify': {
      name: __('Justify Align'),
      command: 'justifyfull',
      noActive: true
    },
    'ol': {
      name: __('Insert Ordered List'),
      command: 'insertorderedlist',
      tags: ['OL']
    },
    'ul': {
      name: __('Insert Unordered List'),
      command: 'insertunorderedlist',
      tags: ['UL']
    },
    'subscript': {
      name: __('Click to Subscript'),
      command: 'subscript',
      tags: ['SUB']
    },
    'superscript': {
      name: __('Click to Superscript'),
      command: 'superscript',
      tags: ['SUP']
    },
    'strikethrough': {
      name: __('Click to Strike Through'),
      command: 'strikeThrough',
      css: {
        'text-decoration': 'line-through'
      }
    },
    'removeformat': {
      name: __('Remove Formatting'),
      command: 'removeformat',
      noActive: true
    },
    'indent': {
      name: __('Indent Text'),
      command: 'indent',
      noActive: true
    },
    'outdent': {
      name: __('Remove Indent'),
      command: 'outdent',
      noActive: true
    },
    'hr': {
      name: __('Horizontal Rule'),
      command: 'insertHorizontalRule',
      noActive: true
    }
  },
  iconsPath: iconsURL,
  buttonList: ['save', 'bold', 'italic', 'underline', 'left', 'center', 'right', 'justify', 'ol', 'ul', 'fontSize', 'fontFamily', 'fontFormat', 'indent', 'outdent', 'image', 'upload', 'link', 'unlink', 'forecolor', 'bgcolor'],
  iconList: {
    "xhtml": 1,
    "bgcolor": 2,
    "forecolor": 3,
    "bold": 4,
    "center": 5,
    "hr": 6,
    "indent": 7,
    "italic": 8,
    "justify": 9,
    "left": 10,
    "ol": 11,
    "outdent": 12,
    "removeformat": 13,
    "right": 14,
    "save": 25,
    "strikethrough": 16,
    "subscript": 17,
    "superscript": 18,
    "ul": 19,
    "underline": 20,
    "image": 21,
    "link": 22,
    "unlink": 23,
    "close": 24,
    "arrow": 26,
    "upload": 27
  }

});
var nicEditors = {
  nicPlugins: [],
  editors: [],
  registerPlugin: function(B, A) {
    this.nicPlugins.push({
      p: B,
      o: A
    })
  },
  allTextAreas: function(C) {
    var A = document.getElementsByTagName("textarea");
    for (var B = 0; B < A.length; B++) {
      nicEditors.editors.push(new nicEditor(C).panelInstance(A[B]))
    }
    return nicEditors.editors
  },
  findEditor: function(C) {
    var B = nicEditors.editors;
    for (var A = 0; A < B.length; A++) {
      if (B[A].instanceById(C)) {
        return B[A].instanceById(C)
      }
    }
  }
};
var nicEditor = bkClass.extend({
  construct: function(C) {
    this.options = new nicEditorConfig();
    bkExtend(this.options, C);
    this.nicInstances = new Array();
    this.loadedPlugins = new Array();
    var A = nicEditors.nicPlugins;
    for (var B = 0; B < A.length; B++) {
      this.loadedPlugins.push(new A[B].p(this, A[B].o))
    }
    nicEditors.editors.push(this);
    bkLib.addEvent(document.body, "mousedown", this.selectCheck.closureListener(this))
  },
  panelInstance: function(B, C) {
    B = this.checkReplace($BK(B));
    var A = new bkElement("DIV").setStyle({
      width: (parseInt(B.getStyle("width")) || B.clientWidth) + "px"
    }).appendBefore(B);
    this.setPanel(A);
    return this.addInstance(B, C)
  },
  checkReplace: function(B) {
    var A = nicEditors.findEditor(B);
    if (A) {
      A.removeInstance(B);
      A.removePanel()
    }
    return B
  },
  addInstance: function(B, C) {
    B = this.checkReplace($BK(B));
    if (B.contentEditable || !!window.opera) {
      var A = new nicEditorInstance(B, C, this)
    } else {
      var A = new nicEditorIFrameInstance(B, C, this)
    }
    this.nicInstances.push(A);
    return this
  },
  removeInstance: function(C) {
    C = $BK(C);
    var B = this.nicInstances;
    for (var A = 0; A < B.length; A++) {
      if (B[A].e == C) {
        B[A].remove();
        this.nicInstances.splice(A, 1)
      }
    }
  },
  removePanel: function(A) {
    if (this.nicPanel) {
      this.nicPanel.remove();
      this.nicPanel = null
    }
  },
  instanceById: function(C) {
    C = $BK(C);
    var B = this.nicInstances;
    for (var A = 0; A < B.length; A++) {
      if (B[A].e == C) {
        return B[A]
      }
    }
  },
  setPanel: function(A) {
    this.nicPanel = new nicEditorPanel($BK(A), this.options, this);
    this.fireEvent("panel", this.nicPanel);
    return this
  },
  nicCommand: function(B, A) {
    if (this.selectedInstance) {
      this.selectedInstance.nicCommand(B, A)
    }
  },
  getIcon: function(D, A) {
    var C = this.options.iconList[D];
    var B = (A.iconFiles) ? A.iconFiles[D] : "";
    return {
      backgroundImage: "url('" + ((C) ? this.options.iconsPath : B) + "')",
      backgroundPosition: ((C) ? ((C - 1) * -18) : 0) + "px 0px"
    }
  },
  selectCheck: function(C, A) {
    var B = false;
    do {
      if (A.className && A.className.indexOf("nicEdit") != -1) {
        return false
      }
    } while (A = A.parentNode);
    this.fireEvent("blur", this.selectedInstance, A);
    this.lastSelectedInstance = this.selectedInstance;
    this.selectedInstance = null;
    return false
  }
});
nicEditor = nicEditor.extend(bkEvent);
var nicEditorInstance = bkClass.extend({
  isSelected: false,
  construct: function(G, D, C) {


    this.ne = C;
    this.elm = this.e = G;
    this.options = D || {};
    newX = parseInt(G.getStyle("width")) || G.clientWidth;
    newY = parseInt(G.getStyle("height")) || G.clientHeight;
    this.initialHeight = newY - 8;
    var H = (G.nodeName.toLowerCase() == "textarea");
    if (H || this.options.hasPanel) {
      var B = (bkLib.isMSIE && !((typeof document.body.style.maxHeight != "undefined") && document.compatMode == "CSS1Compat"));
      var E = {
        backgroundColor: 'white',
        width: newX + "px",
        border: "1px solid #ccc",
        borderTop: 0,
        overflowY: "auto",
        overflowX: "hidden"
      };
      E[(B) ? "height" : "maxHeight"] = (this.ne.options.maxHeight) ? this.ne.options.maxHeight + "px" : null;
      this.editorContain = new bkElement("DIV").setStyle(E).appendBefore(G);
      var A = new bkElement("DIV").setStyle({
        width: (newX - 8) + "px",
        margin: "4px",
        minHeight: newY + "px",
        maxHeight: newY + "px",
        color:'black',
        overflowY: "auto"
      }).addClass("main").appendTo(this.editorContain);
      A.id = "id_modi"+G.id;

      G.setStyle({
        display: "none"
      });
      A.innerHTML = G.innerHTML;
      if (H) {
        A.setContent(G.value);
        this.copyElm = G;
        var F = G.parentTag("FORM");
        if (F) {
          bkLib.addEvent(F, "submit", this.saveContent.closure(this))
        }
      }
      A.setStyle((B) ? {
        height: newY + "px"
      } : {
        overflow: "auto"
      });
      this.elm = A
    }
    this.ne.addEvent("blur", this.blur.closure(this));
    this.init();
    this.blur()
  },
  init: function() {
    this.elm.setAttribute("contentEditable", "true");
    if (this.getContent() == "") {
      this.setContent("<br />")
    }
    this.instanceDoc = document.defaultView;
    this.elm.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keypress", this.keyDown.closureListener(this)).addEvent("focus", this.selected.closure(this)).addEvent("blur", this.blur.closure(this)).addEvent("keyup", this.selected.closure(this));
    this.ne.fireEvent("add", this)
  },
  remove: function() {
    this.saveContent();
    if (this.copyElm || this.options.hasPanel) {
      this.editorContain.remove();
      this.e.setStyle({
        display: "block"
      });
      this.ne.removePanel()
    }
    this.disable();
    this.ne.fireEvent("remove", this)
  },
  disable: function() {
    this.elm.setAttribute("contentEditable", "false")
  },
  getSel: function() {
    return (window.getSelection) ? window.getSelection() : document.selection
  },
  getRng: function() {
    var A = this.getSel();
    if (!A || A.rangeCount === 0) {
      return
    }
    return (A.rangeCount > 0) ? A.getRangeAt(0) : A.createRange()
  },
  selRng: function(A, B) {
    if (window.getSelection) {
      B.removeAllRanges();
      B.addRange(A)
    } else {
      A.select()
    }
  },
  selElm: function() {
    var C = this.getRng();
    if (!C) {
      return
    }
    if (C.startContainer) {
      var D = C.startContainer;
      if (C.cloneContents().childNodes.length == 1) {
        for (var B = 0; B < D.childNodes.length; B++) {
          var A = D.childNodes[B].ownerDocument.createRange();
          A.selectNode(D.childNodes[B]);
          if (C.compareBoundaryPoints(Range.START_TO_START, A) != 1 && C.compareBoundaryPoints(Range.END_TO_END, A) != -1) {
            return $BK(D.childNodes[B])
          }
        }
      }
      return $BK(D)
    } else {
      return $BK((this.getSel().type == "Control") ? C.item(0) : C.parentElement())
    }
  },
  saveRng: function() {
    this.savedRange = this.getRng();
    this.savedSel = this.getSel()
  },
  restoreRng: function() {
    if (this.savedRange) {
      this.selRng(this.savedRange, this.savedSel)
    }
  },
  keyDown: function(B, A) {
    if (B.ctrlKey) {
      this.ne.fireEvent("key", this, B)
    }
  },
  selected: function(C, A) {
    if (!A && !(A = this.selElm)) {
      A = this.selElm()
    }
    if (!C.ctrlKey) {
      var B = this.ne.selectedInstance;
      if (B != this) {
        if (B) {
          this.ne.fireEvent("blur", B, A)
        }
        this.ne.selectedInstance = this;
        this.ne.fireEvent("focus", B, A)
      }
      this.ne.fireEvent("selected", B, A);
      this.isFocused = true;
      this.elm.addClass("selected")
    }
    return false
  },
  blur: function() {
    this.isFocused = false;
    this.elm.removeClass("selected")
  },
  saveContent: function() {
    if (this.copyElm || this.options.hasPanel) {
      this.ne.fireEvent("save", this);
      (this.copyElm) ? this.copyElm.value = this.getContent(): this.e.innerHTML = this.getContent()
    }
  },
  getElm: function() {
    return this.elm
  },
  getContent: function() {
    this.content = this.getElm().innerHTML;
    this.ne.fireEvent("get", this);
    return this.content
  },
  setContent: function(A) {
    this.content = A;
    this.ne.fireEvent("set", this);
    this.elm.innerHTML = this.content
  },
  nicCommand: function(B, A) {
    document.execCommand(B, false, A)
  }
});
var nicEditorIFrameInstance = nicEditorInstance.extend({
  savedStyles: [],
  init: function() {
    var B = this.elm.innerHTML.replace(/^\s+|\s+$/g, "");
    this.elm.innerHTML = "";
    (!B) ? B = "<br />": B;
    this.initialContent = B;
    this.elmFrame = new bkElement("iframe").setAttributes({
      src: "javascript:;",
      frameBorder: 0,
      allowTransparency: "true",
      scrolling: "no"
    }).setStyle({
      height: "100px",
      width: "100%"
    }).addClass("frame").appendTo(this.elm);
    if (this.copyElm) {
      this.elmFrame.setStyle({
        width: (this.elm.offsetWidth - 4) + "px"
      })
    }
    var A = ["font-size", "font-family", "font-weight", "color"];
    for (itm in A) {
      this.savedStyles[bkLib.camelize(itm)] = this.elm.getStyle(itm)
    }
    setTimeout(this.initFrame.closure(this), 50)
  },
  disable: function() {
    this.elm.innerHTML = this.getContent()
  },
  initFrame: function() {
    var B = $BK(this.elmFrame.contentWindow.document);
    B.designMode = "on";
    B.open();
    var A = this.ne.options.externalCSS;
    B.write("<html><head>" + ((A) ? '<link href="' + A + '" rel="stylesheet" type="text/css" />' : "") + '</head><body id="nicEditContent" style="margin: 0 !important; background-color: transparent !important;">' + this.initialContent + "</body></html>");
    B.close();
    this.frameDoc = B;
    this.frameWin = $BK(this.elmFrame.contentWindow);
    this.frameContent = $BK(this.frameWin.document.body).setStyle(this.savedStyles);
    this.instanceDoc = this.frameWin.document.defaultView;
    this.heightUpdate();
    this.frameDoc.addEvent("mousedown", this.selected.closureListener(this)).addEvent("keyup", this.heightUpdate.closureListener(this)).addEvent("keydown", this.keyDown.closureListener(this)).addEvent("keyup", this.selected.closure(this));
    this.ne.fireEvent("add", this)
  },
  getElm: function() {
    return this.frameContent
  },
  setContent: function(A) {
    this.content = A;
    this.ne.fireEvent("set", this);
    this.frameContent.innerHTML = this.content;
    this.heightUpdate()
  },
  getSel: function() {
    return (this.frameWin) ? this.frameWin.getSelection() : this.frameDoc.selection
  },
  heightUpdate: function() {
    this.elmFrame.style.height = Math.max(this.frameContent.offsetHeight, this.initialHeight) + "px"
  },
  nicCommand: function(B, A) {
    this.frameDoc.execCommand(B, false, A);
    setTimeout(this.heightUpdate.closure(this), 100)
  }
});
var nicEditorPanel = bkClass.extend({
  construct: function(E, B, A) {
    this.elm = E;
    this.options = B;
    this.ne = A;
    this.panelButtons = new Array();
    this.buttonList = bkExtend([], this.ne.options.buttonList);
    this.panelContain = new bkElement("DIV").setStyle({
      overflow: "hidden",
      width: "100%",
      border: "1px solid #cccccc",
      backgroundColor: "#efefef"
    }).addClass("panelContain");
    this.panelElm = new bkElement("DIV").setStyle({
      margin: "2px",
      marginTop: "0px",
      zoom: 1,
      overflow: "hidden"
    }).addClass("panel").appendTo(this.panelContain);
    this.panelContain.appendTo(E);
    var C = this.ne.options;
    var D = C.buttons;
    for (button in D) {
      this.addButton(button, C, true)
    }
    this.reorder();
    E.noSelect()
  },
  addButton: function(buttonName, options, noOrder) {
    var button = options.buttons[buttonName];
    var type = (button.type) ? eval("(typeof(" + button.type + ') == "undefined") ? null : ' + button.type + ";") : nicEditorButton;
    var hasButton = bkLib.inArray(this.buttonList, buttonName);
    if (type && (hasButton || this.ne.options.fullPanel)) {
      this.panelButtons.push(new type(this.panelElm, buttonName, options, this.ne));
      if (!hasButton) {
        this.buttonList.push(buttonName)
      }
    }
  },
  findButton: function(B) {
    for (var A = 0; A < this.panelButtons.length; A++) {
      if (this.panelButtons[A].name == B) {
        return this.panelButtons[A]
      }
    }
  },
  reorder: function() {
    var C = this.buttonList;
    for (var B = 0; B < C.length; B++) {
      var A = this.findButton(C[B]);
      if (A) {
        this.panelElm.appendChild(A.margin)
      }
    }
  },
  remove: function() {
    this.elm.remove()
  }
});
var nicEditorButton = bkClass.extend({
  construct: function(D, A, C, B) {
    this.options = C.buttons[A];
    this.name = A;
    this.ne = B;
    this.elm = D;
    this.margin = new bkElement("DIV").setStyle({
      "float": "left",
      marginTop: "2px"
    }).appendTo(D);
    this.contain = new bkElement("DIV").setStyle({
      width: "20px",
      height: "20px"
    }).addClass("buttonContain").appendTo(this.margin);
    this.border = new bkElement("DIV").setStyle({
      backgroundColor: "#efefef",
      border: "1px solid #efefef"
    }).appendTo(this.contain);
    this.button = new bkElement("DIV").setStyle({
      width: "18px",
      height: "18px",
      overflow: "hidden",
      zoom: 1,
      cursor: "pointer"
    }).addClass("button").setStyle(this.ne.getIcon(A, C)).appendTo(this.border);
    this.button.addEvent("mouseover", this.hoverOn.closure(this)).addEvent("mouseout", this.hoverOff.closure(this)).addEvent("mousedown", this.mouseClick.closure(this)).noSelect();
    if (!window.opera) {
      this.button.onmousedown = this.button.onclick = bkLib.cancelEvent
    }
    B.addEvent("selected", this.enable.closure(this)).addEvent("blur", this.disable.closure(this)).addEvent("key", this.key.closure(this));
    this.disable();
    this.init()
  },
  init: function() {},
  hide: function() {
    this.contain.setStyle({
      display: "none"
    })
  },
  updateState: function() {
    if (this.isDisabled) {
      this.setBg()
    } else {
      if (this.isHover) {
        this.setBg("hover")
      } else {
        if (this.isActive) {
          this.setBg("active")
        } else {
          this.setBg()
        }
      }
    }
  },
  setBg: function(A) {
    switch (A) {
      case "hover":
        var B = {
          border: "1px solid #666",
          backgroundColor: "#ddd"
        };
        break;
      case "active":
        var B = {
          border: "1px solid #666",
          backgroundColor: "#ccc"
        };
        break;
      default:
        var B = {
          border: "1px solid #efefef",
          backgroundColor: "#efefef"
        }
    }
    this.border.setStyle(B).addClass("button-" + A)
  },
  checkNodes: function(A) {
    var B = A;
    do {
      if (this.options.tags && bkLib.inArray(this.options.tags, B.nodeName)) {
        this.activate();
        return true
      }
    } while (B = B.parentNode && B.className != "nicEdit");
    B = $BK(A);
    while (B.nodeType == 3) {
      B = $BK(B.parentNode)
    }
    if (this.options.css) {
      for (itm in this.options.css) {
        if (B.getStyle(itm, this.ne.selectedInstance.instanceDoc) == this.options.css[itm]) {
          this.activate();
          return true
        }
      }
    }
    this.deactivate();
    return false
  },
  activate: function() {
    if (!this.isDisabled) {
      this.isActive = true;
      this.updateState();
      this.ne.fireEvent("buttonActivate", this)
    }
  },
  deactivate: function() {
    this.isActive = false;
    this.updateState();
    if (!this.isDisabled) {
      this.ne.fireEvent("buttonDeactivate", this)
    }
  },
  enable: function(A, B) {
    this.isDisabled = false;
    this.contain.setStyle({
      opacity: 1
    }).addClass("buttonEnabled");
    this.updateState();
    this.checkNodes(B)
  },
  disable: function(A, B) {
    this.isDisabled = true;
    this.contain.setStyle({
      opacity: 0.6
    }).removeClass("buttonEnabled");
    this.updateState()
  },
  toggleActive: function() {
    (this.isActive) ? this.deactivate(): this.activate()
  },
  hoverOn: function() {
    if (!this.isDisabled) {
      this.isHover = true;
      this.updateState();
      this.ne.fireEvent("buttonOver", this)
    }
  },
  hoverOff: function() {
    this.isHover = false;
    this.updateState();
    this.ne.fireEvent("buttonOut", this)
  },
  mouseClick: function() {
    if (this.options.command) {
      this.ne.nicCommand(this.options.command, this.options.commandArgs);
      if (!this.options.noActive) {
        this.toggleActive()
      }
    }
    this.ne.fireEvent("buttonClick", this)
  },
  key: function(A, B) {
    if (this.options.key && B.ctrlKey && String.fromCharCode(B.keyCode || B.charCode).toLowerCase() == this.options.key) {
      this.mouseClick();
      if (B.preventDefault) {
        B.preventDefault()
      }
    }
  }
});
var nicPlugin = bkClass.extend({
  construct: function(B, A) {
    this.options = A;
    this.ne = B;
    this.ne.addEvent("panel", this.loadPanel.closure(this));
    this.init()
  },
  loadPanel: function(C) {
    var B = this.options.buttons;
    for (var A in B) {
      C.addButton(A, this.options)
    }
    C.reorder()
  },
  init: function() {}
});


var nicPaneOptions = {};

var nicEditorPane = bkClass.extend({
  construct: function(D, C, B, A) {
    this.ne = C;
    this.elm = D;
    this.pos = D.pos();
    this.contain = new bkElement("div").setStyle({
      zIndex: "21474836489",
      overflow: "hidden",
      position: "fixed",
      left: this.pos[0] + "px",
      top: this.pos[1] + "px"
    });
    this.pane = new bkElement("div").setStyle({
      fontSize: "12px",
      border: "1px solid #ccc",
      overflow: "hidden",
      padding: "4px",
      textAlign: "left",
      backgroundColor: "#ffffc9"
    }).addClass("pane").setStyle(B).appendTo(this.contain);
    if (A && !A.options.noClose) {
      this.close = new bkElement("div").setStyle({
        "float": "right",
        height: "16px",
        width: "16px",
        cursor: "pointer"
      }).setStyle(this.ne.getIcon("close", nicPaneOptions)).addEvent("mousedown", A.removePane.closure(this)).appendTo(this.pane)
    }
    this.contain.noSelect().appendTo(document.body);
    this.position();
    this.init()
  },
  init: function() {},
  position: function() {
    if (this.ne.nicPanel) {
      var B = this.ne.nicPanel.elm;
      var A = B.pos();
      var C = A[0] + parseInt(B.getStyle("width")) - (parseInt(this.pane.getStyle("width")) + 8);
      if (C < this.pos[0]) {
        this.contain.setStyle({
          left: C + "px"
        })
      }
    }
  },
  toggle: function() {
    this.isVisible = !this.isVisible;
    this.contain.setStyle({
      display: ((this.isVisible) ? "block" : "none")
    })
  },
  remove: function() {
    if (this.contain) {
      this.contain.remove();
      this.contain = null
    }
  },
  append: function(A) {
    A.appendTo(this.pane)
  },
  setContent: function(A) {
    this.pane.setContent(A)
  }
});


var nicSelectOptions = {
  buttons: {
    'fontSize': {
      name: __('Select Font Size'),
      type: 'nicEditorFontSizeSelect',
      command: 'fontsize'
    },
    'fontFamily': {
      name: __('Select Font Family'),
      type: 'nicEditorFontFamilySelect',
      command: 'fontname'
    },
    'fontFormat': {
      name: __('Select Font Format'),
      type: 'nicEditorFontFormatSelect',
      command: 'formatBlock'
    }
  }
};

var nicEditorSelect = bkClass.extend({
  construct: function(D, A, C, B) {
    this.options = C.buttons[A];
    this.elm = D;
    this.ne = B;
    this.name = A;
    this.selOptions = new Array();
    this.margin = new bkElement("div").setStyle({
      "float": "left",
      margin: "2px 1px 0 1px"
    }).appendTo(this.elm);
    this.contain = new bkElement("div").setStyle({
      width: "90px",
      height: "20px",
      cursor: "pointer",
      overflow: "hidden"
    }).addClass("selectContain").addEvent("click", this.toggle.closure(this)).appendTo(this.margin);
    this.items = new bkElement("div").setStyle({
      overflow: "hidden",
      zoom: 1,
      border: "1px solid #ccc",
      paddingLeft: "3px",
      backgroundColor: "#fff"
    }).appendTo(this.contain);
    this.control = new bkElement("div").setStyle({
      overflow: "hidden",
      "float": "right",
      height: "18px",
      width: "16px"
    }).addClass("selectControl").setStyle(this.ne.getIcon("arrow", C)).appendTo(this.items);
    this.txt = new bkElement("div").setStyle({
      overflow: "hidden",
      "float": "left",
      width: "66px",
      height: "14px",
      marginTop: "1px",
      fontFamily: "sans-serif",
      textAlign: "center",
      fontSize: "12px"
    }).addClass("selectTxt").appendTo(this.items);
    if (!window.opera) {
      this.contain.onmousedown = this.control.onmousedown = this.txt.onmousedown = bkLib.cancelEvent
    }
    this.margin.noSelect();
    this.ne.addEvent("selected", this.enable.closure(this)).addEvent("blur", this.disable.closure(this));
    this.disable();
    this.init()
  },
  disable: function() {
    this.isDisabled = true;
    this.close();
    this.contain.setStyle({
      opacity: 0.6
    })
  },
  enable: function(A) {
    this.isDisabled = false;
    this.close();
    this.contain.setStyle({
      opacity: 1
    })
  },
  setDisplay: function(A) {
    this.txt.setContent(A)
  },
  toggle: function() {
    if (!this.isDisabled) {
      (this.pane) ? this.close(): this.open()
    }
  },
  open: function() {
    this.pane = new nicEditorPane(this.items, this.ne, {
      width: "88px",
      padding: "0px",
      borderTop: 0,
      borderLeft: "1px solid #ccc",
      borderRight: "1px solid #ccc",
      borderBottom: "0px",
      backgroundColor: "#fff"
    });
    for (var C = 0; C < this.selOptions.length; C++) {
      var B = this.selOptions[C];
      var A = new bkElement("div").setStyle({
        overflow: "hidden",
        borderBottom: "1px solid #ccc",
        width: "88px",
        textAlign: "left",
        overflow: "hidden",
        cursor: "pointer"
      });
      var D = new bkElement("div").setStyle({
        padding: "0px 4px"
      }).setContent(B[1]).appendTo(A).noSelect();
      D.addEvent("click", this.update.closure(this, B[0])).addEvent("mouseover", this.over.closure(this, D)).addEvent("mouseout", this.out.closure(this, D)).setAttributes("id", B[0]);
      this.pane.append(A);
      if (!window.opera) {
        D.onmousedown = bkLib.cancelEvent
      }
    }
  },
  close: function() {
    if (this.pane) {
      this.pane = this.pane.remove()
    }
  },
  over: function(A) {
    A.setStyle({
      backgroundColor: "#ccc"
    })
  },
  out: function(A) {
    A.setStyle({
      backgroundColor: "#fff"
    })
  },
  add: function(B, A) {
    this.selOptions.push(new Array(B, A))
  },
  update: function(A) {
    this.ne.nicCommand(this.options.command, A);
    this.close()
  }
});
var nicEditorFontSizeSelect = nicEditorSelect.extend({
  sel: {
    1: "1&nbsp;(8pt)",
    2: "2&nbsp;(10pt)",
    3: "3&nbsp;(12pt)",
    4: "4&nbsp;(14pt)",
    5: "5&nbsp;(18pt)",
    6: "6&nbsp;(24pt)"
  },
  init: function() {
    this.setDisplay("Font&nbsp;Size...");
    for (itm in this.sel) {
      this.add(itm, '<font size="' + itm + '">' + this.sel[itm] + "</font>")
    }
  }
});
var nicEditorFontFamilySelect = nicEditorSelect.extend({
  sel: {
    arial: "Arial",
    "comic sans ms": "Comic Sans",
    "courier new": "Courier New",
    georgia: "Georgia",
    helvetica: "Helvetica",
    impact: "Impact",
    "times new roman": "Times",
    "trebuchet ms": "Trebuchet",
    verdana: "Verdana"
  },
  init: function() {
    this.setDisplay("Font&nbsp;Family...");
    for (itm in this.sel) {
      this.add(itm, '<font face="' + itm + '">' + this.sel[itm] + "</font>")
    }
  }
});
var nicEditorFontFormatSelect = nicEditorSelect.extend({
  sel: {
    p: "Paragraph",
    pre: "Pre",
    h6: "Heading&nbsp;6",
    h5: "Heading&nbsp;5",
    h4: "Heading&nbsp;4",
    h3: "Heading&nbsp;3",
    h2: "Heading&nbsp;2",
    h1: "Heading&nbsp;1"
  },
  init: function() {
    this.setDisplay("Font&nbsp;Format...");
    for (itm in this.sel) {
      var A = itm.toUpperCase();
      this.add("<" + A + ">", "<" + itm + ' style="padding: 0px; margin: 0px;">' + this.sel[itm] + "</" + A + ">")
    }
  }
});
nicEditors.registerPlugin(nicPlugin, nicSelectOptions);

var nicButtonTips = bkClass.extend({
  construct: function(A) {
    this.ne = A;
    A.addEvent("buttonOver", this.show.closure(this)).addEvent("buttonOut", this.hide.closure(this))
  },
  show: function(A) {
    this.timer = setTimeout(this.create.closure(this, A), 400)
  },
  create: function(A) {
    this.timer = null;
    if (!this.pane) {
      this.pane = new nicEditorPane(A.button, this.ne, {
        fontSize: "12px",
        marginTop: "5px"
      });
      this.pane.setContent(A.options.name)
    }
  },
  hide: function(A) {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    if (this.pane) {
      this.pane = this.pane.remove()
    }
  }
});
nicEditors.registerPlugin(nicButtonTips);

var nicEditorAdvancedButton = nicEditorButton.extend({
  init: function() {
    this.ne.addEvent("selected", this.removePane.closure(this)).addEvent("blur", this.removePane.closure(this))
  },
  mouseClick: function() {
    if (!this.isDisabled) {
      if (this.pane && this.pane.pane) {
        this.removePane()
      } else {
        this.pane = new nicEditorPane(this.contain, this.ne, {
          width: (this.width || "270px"),
          backgroundColor: "#fff"
        }, this);
        this.addPane();
        this.ne.selectedInstance.saveRng()
      }
    }
  },
  addForm: function(C, G) {
    this.form = new bkElement("form").addEvent("submit", this.submit.closureListener(this));
    this.pane.append(this.form);
    this.inputs = {};
    for (itm in C) {
      var D = C[itm];
      var F = "";
      if (G) {
        F = G.getAttribute(itm)
      }
      if (!F) {
        F = D.value || ""
      }
      var A = C[itm].type;
      if (A == "title") {
        new bkElement("div").setContent(D.txt).setStyle({
          fontSize: "14px",
          fontWeight: "bold",
          padding: "0px",
          margin: "2px 0"
        }).appendTo(this.form)
      } else {
        var B = new bkElement("div").setStyle({
          overflow: "hidden",
          clear: "both"
        }).appendTo(this.form);
        if (D.txt) {
          new bkElement("label").setAttributes({
            "for": itm
          }).setContent(D.txt).setStyle({
            margin: "2px 4px",
            fontSize: "13px",
            width: "50px",
            lineHeight: "20px",
            textAlign: "right",
            "float": "left"
          }).appendTo(B)
        }
        switch (A) {
          case "text":
            this.inputs[itm] = new bkElement("input").setAttributes({
              id: itm,
              value: F,
              type: "text"
            }).setStyle({
              margin: "2px 0",
              fontSize: "13px",
              "float": "left",
              height: "20px",
              border: "1px solid #ccc",
              overflow: "hidden"
            }).setStyle(D.style).appendTo(B);
            break;
          case "select":
            this.inputs[itm] = new bkElement("select").setAttributes({
              id: itm
            }).setStyle({
              border: "1px solid #ccc",
              "float": "left",
              margin: "2px 0"
            }).appendTo(B);
            for (opt in D.options) {
              var E = new bkElement("option").setAttributes({
                value: opt,
                selected: (opt == F) ? "selected" : ""
              }).setContent(D.options[opt]).appendTo(this.inputs[itm])
            }
            break;
          case "content":
            this.inputs[itm] = new bkElement("textarea").setAttributes({
              id: itm
            }).setStyle({
              border: "1px solid #ccc",
              "float": "left"
            }).setStyle(D.style).appendTo(B);
            this.inputs[itm].value = F
        }
      }
    }
    new bkElement("input").setAttributes({
      type: "submit"
    }).setStyle({
      backgroundColor: "#efefef",
      border: "1px solid #ccc",
      margin: "3px 0",
      "float": "left",
      clear: "both"
    }).appendTo(this.form);
    this.form.onsubmit = bkLib.cancelEvent
  },
  submit: function() {},
  findElm: function(B, A, E) {
    var D = this.ne.selectedInstance.getElm().getElementsByTagName(B);
    for (var C = 0; C < D.length; C++) {
      if (D[C].getAttribute(A) == E) {
        return $BK(D[C])
      }
    }
  },
  removePane: function() {
    if (this.pane) {
      this.pane.remove();
      this.pane = null;
      this.ne.selectedInstance.restoreRng()
    }
  }
});


var nicLinkOptions = {
  buttons: {
    'link': {
      name: 'Add Link',
      type: 'nicLinkButton',
      tags: ['A']
    },
    'unlink': {
      name: 'Remove Link',
      command: 'unlink',
      noActive: true
    }
  }
};

var nicLinkButton = nicEditorAdvancedButton.extend({
  addPane: function() {
    this.ln = this.ne.selectedInstance.selElm().parentTag("A");
    this.addForm({
      "": {
        type: "title",
        txt: "Add/Edit Link"
      },
      href: {
        type: "text",
        txt: "URL",
        value: "http://",
        style: {
          width: "150px"
        }
      },
      title: {
        type: "text",
        txt: "Title"
      },
      target: {
        type: "select",
        txt: "Open In",
        options: {
          "": "Current Window",
          _blank: "New Window"
        },
        style: {
          width: "100px"
        }
      }
    }, this.ln)
  },
  submit: function(C) {
    var A = this.inputs.href.value;
    if (A == "http://" || A == "") {
      alert("You must enter a URL to Create a Link");
      return false
    }
    this.removePane();
    if (!this.ln) {
      var B = "javascript:nicTemp();";
      this.ne.nicCommand("createlink", B);
      this.ln = this.findElm("A", "href", B)
    }
    if (this.ln) {
      this.ln.setAttributes({
        href: this.inputs.href.value,
        title: this.inputs.title.value,
        target: this.inputs.target.options[this.inputs.target.selectedIndex].value
      })
    }
  }
});
nicEditors.registerPlugin(nicPlugin, nicLinkOptions);


var nicColorOptions = {
  buttons: {
    'forecolor': {
      name: __('Change Text Color'),
      type: 'nicEditorColorButton',
      noClose: true
    },
    'bgcolor': {
      name: __('Change Background Color'),
      type: 'nicEditorBgColorButton',
      noClose: true
    }
  }
};

var nicEditorColorButton = nicEditorAdvancedButton.extend({
  addPane: function() {
    var D = {
      0: "00",
      1: "33",
      2: "66",
      3: "99",
      4: "CC",
      5: "FF"
    };
    var H = new bkElement("DIV").setStyle({
      width: "270px"
    });
    for (var A in D) {
      for (var F in D) {
        for (var E in D) {
          var I = "#" + D[A] + D[E] + D[F];
          var C = new bkElement("DIV").setStyle({
            cursor: "pointer",
            height: "15px",
            "float": "left"
          }).appendTo(H);
          var G = new bkElement("DIV").setStyle({
            border: "2px solid " + I
          }).appendTo(C);
          var B = new bkElement("DIV").setStyle({
            backgroundColor: I,
            overflow: "auto",
            width: "11px",
            height: "11px"
          }).addEvent("click", this.colorSelect.closure(this, I)).addEvent("mouseover", this.on.closure(this, G)).addEvent("mouseout", this.off.closure(this, G, I)).appendTo(G);
          if (!window.opera) {
            C.onmousedown = B.onmousedown = bkLib.cancelEvent
          }
        }
      }
    }
    this.pane.append(H.noSelect())
  },
  colorSelect: function(A) {
    this.ne.nicCommand("foreColor", A);
    this.removePane()
  },
  on: function(A) {
    A.setStyle({
      border: "2px solid #000"
    })
  },
  off: function(A, B) {
    A.setStyle({
      border: "2px solid " + B
    })
  }
});
var nicEditorBgColorButton = nicEditorColorButton.extend({
  colorSelect: function(A) {
    this.ne.nicCommand("hiliteColor", A);
    this.removePane()
  }
});
nicEditors.registerPlugin(nicPlugin, nicColorOptions);


var nicImageOptions = {
  buttons: {
    'image': {
      name: 'Add Image',
      type: 'nicImageButton',
      tags: ['IMG']
    }
  }

};

var nicImageButton = nicEditorAdvancedButton.extend({
  addPane: function() {
    this.im = this.ne.selectedInstance.selElm().parentTag("IMG");
    this.addForm({
      "": {
        type: "title",
        txt: "Add/Edit Image"
      },
      src: {
        type: "text",
        txt: "URL",
        value: "http://",
        style: {
          width: "150px"
        }
      },
      alt: {
        type: "text",
        txt: "Alt Text",
        style: {
          width: "100px"
        }
      },
      align: {
        type: "select",
        txt: "Align",
        options: {
          none: "Default",
          left: "Left",
          right: "Right"
        }
      }
    }, this.im)
  },
  submit: function(B) {
    var C = this.inputs.src.value;
    if (C == "" || C == "http://") {
      alert("You must enter a Image URL to insert");
      return false
    }
    this.removePane();
    if (!this.im) {
      var A = "javascript:nicImTemp();";
      this.ne.nicCommand("insertImage", A);
      this.im = this.findElm("IMG", "src", A)
    }
    if (this.im) {
      this.im.setAttributes({
        src: this.inputs.src.value,
        alt: this.inputs.alt.value,
        align: this.inputs.align.value
      })
    }
  }
});
nicEditors.registerPlugin(nicPlugin, nicImageOptions);


var nicSaveOptions = {
  buttons: {
    'save': {
      name: __('Save this content'),
      type: 'nicEditorSaveButton'
    }
  }
};

var nicEditorSaveButton = nicEditorButton.extend({
  init: function() {
    if (!this.ne.options.onSave) {
      this.margin.setStyle({
        display: "none"
      })
    }
  },
  mouseClick: function() {
    var B = this.ne.options.onSave;
    var A = this.ne.selectedInstance;
    B(A.getContent(), A.elm.id, A)
  }
});
nicEditors.registerPlugin(nicPlugin, nicSaveOptions);

var nicXHTML = bkClass.extend({
  stripAttributes: ["_moz_dirty", "_moz_resizing", "_extended"],
  noShort: ["style", "title", "script", "textarea", "a"],
  cssReplace: {
    "font-weight:bold;": "strong",
    "font-style:italic;": "em"
  },
  sizes: {
    1: "xx-small",
    2: "x-small",
    3: "small",
    4: "medium",
    5: "large",
    6: "x-large"
  },
  construct: function(A) {
    this.ne = A;
    if (this.ne.options.xhtml) {
      A.addEvent("get", this.cleanup.closure(this))
    }
  },
  cleanup: function(A) {
    var B = A.getElm();
    var C = this.toXHTML(B);
    A.content = C
  },
  toXHTML: function(C, A, L) {
    var G = "";
    var O = "";
    var P = "";
    var I = C.nodeType;
    var Q = C.nodeName.toLowerCase();
    var N = C.hasChildNodes && C.hasChildNodes();
    var B = new Array();
    switch (I) {
      case 1:
        var H = C.attributes;
        switch (Q) {
          case "b":
            Q = "strong";
            break;
          case "i":
            Q = "em";
            break;
          case "font":
            Q = "span";
            break
        }
        if (A) {
          for (var F = 0; F < H.length; F++) {
            var K = H[F];
            var M = K.nodeName.toLowerCase();
            var D = K.nodeValue;
            if (!K.specified || !D || bkLib.inArray(this.stripAttributes, M) || typeof(D) == "function") {
              continue
            }
            switch (M) {
              case "style":
                var J = D.replace(/ /g, "");
                for (itm in this.cssReplace) {
                  if (J.indexOf(itm) != -1) {
                    B.push(this.cssReplace[itm]);
                    J = J.replace(itm, "")
                  }
                }
                P += J;
                D = "";
                break;
              case "class":
                D = D.replace("Apple-style-span", "");
                break;
              case "size":
                P += "font-size:" + this.sizes[D] + ";";
                D = "";
                break
            }
            if (D) {
              O += " " + M + '="' + D + '"'
            }
          }
          if (P) {
            O += ' style="' + P + '"'
          }
          for (var F = 0; F < B.length; F++) {
            G += "<" + B[F] + ">"
          }
          if (O == "" && Q == "span") {
            A = false
          }
          if (A) {
            G += "<" + Q;
            if (Q != "br") {
              G += O
            }
          }
        }
        if (!N && !bkLib.inArray(this.noShort, M)) {
          if (A) {
            G += " />"
          }
        } else {
          if (A) {
            G += ">"
          }
          for (var F = 0; F < C.childNodes.length; F++) {
            var E = this.toXHTML(C.childNodes[F], true, true);
            if (E) {
              G += E
            }
          }
        }
        if (A && N) {
          G += "</" + Q + ">"
        }
        for (var F = 0; F < B.length; F++) {
          G += "</" + B[F] + ">"
        }
        break;
      case 3:
        G += C.nodeValue;
        break
    }
    return G
  }
});
nicEditors.registerPlugin(nicXHTML);


var nicCodeOptions = {
  buttons: {
    'xhtml': {
      name: 'Edit HTML',
      type: 'nicCodeButton'
    }
  }

};

var nicCodeButton = nicEditorAdvancedButton.extend({
  width: "350px",
  addPane: function() {
    this.addForm({
      "": {
        type: "title",
        txt: "Edit HTML"
      },
      code: {
        type: "content",
        value: this.ne.selectedInstance.getContent(),
        style: {
          width: "340px",
          height: "200px"
        }
      }
    })
  },
  submit: function(B) {
    var A = this.inputs.code.value;
    this.ne.selectedInstance.setContent(A);
    this.removePane()
  }
});
nicEditors.registerPlugin(nicPlugin, nicCodeOptions);

var nicBBCode = bkClass.extend({
  construct: function(A) {
    this.ne = A;
    if (this.ne.options.bbCode) {
      A.addEvent("get", this.bbGet.closure(this));
      A.addEvent("set", this.bbSet.closure(this));
      var B = this.ne.loadedPlugins;
      for (itm in B) {
        if (B[itm].toXHTML) {
          this.xhtml = B[itm]
        }
      }
    }
  },
  bbGet: function(A) {
    var B = this.xhtml.toXHTML(A.getElm());
    A.content = this.toBBCode(B)
  },
  bbSet: function(A) {
    A.content = this.fromBBCode(A.content)
  },
  toBBCode: function(B) {
    function A(D, C) {
      B = B.replace(D, C)
    }
    A(/\n/gi, "");
    A(/<strong>(.*?)<\/strong>/gi, "[b]$1[/b]");
    A(/<em>(.*?)<\/em>/gi, "[i]$1[/i]");
    A(/<span.*?style="text-decoration:underline;">(.*?)<\/span>/gi, "[u]$1[/u]");
    A(/<ul>(.*?)<\/ul>/gi, "[list]$1[/list]");
    A(/<li>(.*?)<\/li>/gi, "[*]$1[]");
    A(/<ol>(.*?)<\/ol>/gi, "[list=1]$1[/list]");
    A(/<img.*?src="(.*?)".*?>/gi, "[img]$1[/img]");
    A(/<a.*?href="(.*?)".*?>(.*?)<\/a>/gi, "[url=$1]$2[/url]");
    A(/<br.*?>/gi, "\n");
    A(/<.*?>.*?<\/.*?>/gi, "");
    return B
  },
  fromBBCode: function(A) {
    function B(D, C) {
      A = A.replace(D, C)
    }
    B(/\[b\](.*?)\[\/b\]/gi, "<strong>$1</strong>");
    B(/\[i\](.*?)\[\/i\]/gi, "<em>$1</em>");
    B(/\[u\](.*?)\[\/u\]/gi, '<span style="text-decoration:underline;">$1</span>');
    B(/\[list\](.*?)\[\/list\]/gi, "<ul>$1</ul>");
    B(/\[list=1\](.*?)\[\/list\]/gi, "<ol>$1</ol>");
    B(/\[\*\](.*?)\[\/\*\]/gi, "<li>$1</li>");
    B(/\[img\](.*?)\[\/img\]/gi, '<img src="$1" />');
    B(/\[url=(.*?)\](.*?)\[\/url\]/gi, '<a href="$1">$2</a>');
    B(/\n/gi, "<br />");
    return A
  }
});
nicEditors.registerPlugin(nicBBCode);


var nicUploadOptions = {
  buttons: {
    'upload': {
      name: 'Upload Image',
      type: 'nicUploadButton'
    }
  }

};

var nicUploadButton = nicEditorAdvancedButton.extend({
  nicURI: "https://api.imgur.com/3/image",
  errorText: "Failed to upload image",
  addPane: function() {
    if (typeof window.FormData === "undefined") {
      return this.onError("Image uploads are not supported in this browser, use Chrome, Firefox, or Safari instead.")
    }
    this.im = this.ne.selectedInstance.selElm().parentTag("IMG");
    var A = new bkElement("div").setStyle({
      padding: "10px"
    }).appendTo(this.pane.pane);
    new bkElement("div").setStyle({
      fontSize: "14px",
      fontWeight: "bold",
      paddingBottom: "5px"
    }).setContent("Insert an Image").appendTo(A);
    this.fileInput = new bkElement("input").setAttributes({
      type: "file"
    }).appendTo(A);
    this.progress = new bkElement("progress").setStyle({
      width: "100%",
      display: "none"
    }).setAttributes("max", 100).appendTo(A);
    this.fileInput.onchange = this.uploadFile.closure(this)
  },
  onError: function(A) {
    this.removePane();
    alert(A || "Failed to upload image")
  },
  uploadFile: function() {
    var B = this.fileInput.files[0];
    if (!B || !B.type.match(/image.*/)) {
      this.onError("Only image files can be uploaded");
      return
    }
    this.fileInput.setStyle({
      display: "none"
    });
    this.setProgress(0);
    var A = new FormData();
    A.append("image", B);
    var C = new XMLHttpRequest();
    C.open("POST", this.ne.options.uploadURI || this.nicURI);
    C.onload = function() {
      try {
        var D = JSON.parse(C.responseText).data
      } catch (E) {
        return this.onError()
      }
      if (D.error) {
        return this.onError(D.error)
      }
      this.onUploaded(D)
    }.closure(this);
    C.onerror = this.onError.closure(this);
    C.upload.onprogress = function(D) {
      this.setProgress(D.loaded / D.total)
    }.closure(this);
    C.setRequestHeader("Authorization", "Client-ID c37fc05199a05b7");
    C.send(A)
  },
  setProgress: function(A) {
    this.progress.setStyle({
      display: "block"
    });
    if (A < 0.98) {
      this.progress.value = A
    } else {
      this.progress.removeAttribute("value")
    }
  },
  onUploaded: function(B) {
    this.removePane();
    var D = B.link;
    if (!this.im) {
      this.ne.selectedInstance.restoreRng();
      var C = "javascript:nicImTemp();";
      this.ne.nicCommand("insertImage", D);
      this.im = this.findElm("IMG", "src", D)
    }
    var A = parseInt(this.ne.selectedInstance.elm.getStyle("width"));
    if (this.im) {
      this.im.setAttributes({
        src: D,
        width: (A && B.width) ? Math.min(A, B.width) : ""
      })
    }
  }
});
nicEditors.registerPlugin(nicPlugin, nicUploadOptions);



var editor = new nicEditor({
  buttonList: ['fontSize', 'fontFamily', 'bold', 'italic', 'underline', 'strikeThrough', 'ul', 'forecolor', 'bgcolor', 'link', 'unlink']
}).panelInstance('texto');
