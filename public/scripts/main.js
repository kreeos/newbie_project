document.addEventListener("DOMContentLoaded", function(event) {

  // var calendar = new CalendarApp();
  // console.log(calendar);

  // const url = window.location.href;
  // const cur_user = (url.substring(33, url.length));
  const icon = document.getElementById("icon");
  const description = document.getElementById('description');
  const luckynum = document.getElementById('luckynum');
  const comp_icon = document.getElementById('comp_icon');
  const mood = document.getElementById('mood');
  const date = document.getElementById('date');
  const header = document.getElementById('header_user');
  let data;
  let user_horoscope;

  const cur_user= getParameterByName('user');
  console.log(cur_user);

  // axios.get('http://localhost:8000/api/v1/load', {
  //   params: {
  //     cur_user: cur_user
  //   }
  // })
  // .then(function (response) {
  //     // console.log(response.data);
  //     const user = response.data[0];
  //     // console.log(user);
  //     user_horoscope = user.horoscope;
  //     const hurl = 'https://aztro.sameerkumar.website/?sign='+user.horoscope+'&day=today';
  //       fetch(hurl, {
  //           method: 'POST'
  //       })
  //       .then(response => response.json())
  //       .then(json => {
  //           // console.log(json);
  //           data = json;
  //           header.innerHTML = user.userid + "'s Daily Horoscope"
  //           date.innerHTML = json.current_date;
  //           icon.src = "images/icons/"+user.horoscope+".png";
  //           description.innerHTML = json.date_range+"<br>"+json.description;
  //           comp_icon.src = "images/icons/"+json.compatibility.toLowerCase()+".png";
  //           mood.innerHTML = json.mood;
  //           luckynum.innerHTML = json.lucky_number;
  //       });
  // })
  // .catch(function (error) {
  //     console.log(error);
  // })

  const save_btn = document.getElementById('btn-save');
  const hist_div = document.getElementById('div_history');

  save_btn.addEventListener("click", function(){
    // axios.post('http://localhost:8000/api/v1/save', {
    //   userid: cur_user,
    //   date: data.current_date,
    //   description: data.description,
    //   lucky_number: data.lucky_number,
    //   compatibility: data.compatibility,
    //   mood: data.mood
    // })
    // .then(function (response) {
    //   console.log("successfully saved to history");
    //   document.reload();
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  })

  // axios.get('http://localhost:8000/api/v1/load_history', {
  //   params: {
  //     cur_user: cur_user
  //   }
  // })
  // .then(function (response){
  //   console.log(response.data);
  //   for(let i = 0; i < response.data.length;i++){
  //     console.log(response);
  //     const data = response.data[i];
  //     let wrapper = document.createElement("div");
  //     let text = document.createElement("a");
  //     text.innerHTML = data.date.substring(0,10);
  //     text.href = "history.html?hor="+user_horoscope+"&date="+data.date.substring(0,10)+"&ln="+data.lucky_number+"&comp="+data.compatibility+"&md="+data.mood+"&des="+data.description; // TODO link to the right shit.
  //     wrapper.appendChild(text);
  //     hist_div.appendChild(wrapper);
  //   }
  //   console.log("success test");
  // })
  // .catch(function (error){
  //   console.log(error);
  // })
})
