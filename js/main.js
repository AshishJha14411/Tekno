var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

const toggleDisplay=(pageName) => {
  var i, tabcontent;
tabcontent = document.getElementsByClassName("container");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none"
  }
  document.getElementById(pageName).style.display = "block";
}


  var slider = document.getElementById('customRange3');
  var output = document.getElementById('value');
  output.innerHTML = slider.value;
  slider.oninput = () =>{
    output.innerHTML = document.getElementById('customRange3').value;
  }
