document.addEventListener("DOMContentLoaded", function(event) {

  const horoscope= getParameterByName('hor');
  const date = getParameterByName('date');
  const lucky_number = getParameterByName('ln');
  const mood = getParameterByName('md');
  const compatibility = getParameterByName('comp');
  const description = getParameterByName('des');


  console.log(horoscope);
  console.log(date);
  console.log(lucky_number);
  console.log(mood);
  console.log(compatibility);

  const icon = document.getElementById("icon");
  const description_div = document.getElementById('description');
  const luckynum_div = document.getElementById('luckynum');
  const comp_icon = document.getElementById('comp_icon');
  const mood_div = document.getElementById('mood');
  const date_div = document.getElementById('date');
  // const header = document.getElementById('header_user');

  // header.innerHTML = user.userid + "'s Daily Horoscope"
  date_div.innerHTML = date;
  icon.src = "images/icons/"+horoscope+".png";
  description_div.innerHTML = "<br>"+description;
  comp_icon.src = "images/icons/"+compatibility.toLowerCase()+".png";
  mood_div.innerHTML = mood;
  luckynum_div.innerHTML = lucky_number;

  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

})
