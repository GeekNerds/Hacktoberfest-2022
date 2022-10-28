const ul = $("ul");
const form2element=document.addfrm;
const form2 = $(form2element);
const add = $(form2element.add);
const form1element = document.form1;
const form1 = $(form1element);
const search = $(form1element.search);
form2.submit(function(e){
  e.preventDefault();
  if (add.val().length > 0) {
    ul.append(
      '<li class="list-group-item d-flex justify-content-between align-items-center"><span>' +
      add.val() +
      '</span><i class="far fa-trash-alt delete"></i></li>');
    add.val("") ;
  }
});

ul.click(function(e){
  let i = e.target;
  if (i.nodeName == "I") {
    let li = i.parentElement;
    li.remove();
  }
});

form1.submit(function(e){
  e.preventDefault();
});

search.keyup(function(){
    let all = ul.find("li");
    all.each(function(){
        $(this).addClass("filtered");
    });
    all.each(function(){
        let str = search.val().toLowerCase();
        let s = $(this).text().toLowerCase();
        let res = s.indexOf(str);
        if (res != -1) $(this).removeClass("filtered");
    });
});

$(ul).click(function(e){
    let li = e.target;
  if (li.nodeName == "LI") {
    $(li).toggleClass("completed");
  }
  });
