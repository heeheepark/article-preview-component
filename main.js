let shareBtn = document.querySelector('button');

shareBtn.addEventListener("mouseover", function() {
  shareBtn.style.backgroundColor = "hsl(217, 19%, 35%)"
  document.getElementById('shareBtn').style.fill = "#fff"
})

shareBtn.addEventListener("mouseout", function() {
  shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
  document.getElementById('shareBtn').style.fill = "#6E8098"
})

shareBtn.addEventListener("click", function() {
  shareBtn.classList.toggle("clicked");
  inspector();
})

function inspector() {
  if(shareBtn.className.includes('click')) {
    document.getElementsByClassName('share')[0].style.display = "block";
  } else {
    document.getElementsByClassName('share')[0].style.display = "none";
  }
}



