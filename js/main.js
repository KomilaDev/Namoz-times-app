const vaqt = document.querySelector('#time'),
    bomdod = document.querySelector('.bomdod'),
    time = document.querySelector('#time'),
    weekday = document.querySelector('#weekday'),
    bomdod_time = document.querySelector('.bomdod_time'),
    peshin_time = document.querySelector('.peshin_time'),
    asr_time = document.querySelector('.asr_time'),
    shom_time = document.querySelector('.shom_time'),
    hufton_time = document.querySelector('.hufton_time'),
    tahajjud_time = document.querySelector('.tahajjud_time'),
    quyosh_time = document.querySelector('.quyosh_time')
    let week = ['Yakshanba','Dushanba','Seshanba','Chorshanba','Payshanba','Juma','Shanba']
    



    function Zero(num) {
                if(num < 10) {
                    return '0' + num
                }
                else {
                    return num
                }
            }
           
    function updateTime() {
        let date = new Date ()
        weekday.innerHTML = week[date.getDay()]
        time.innerHTML = Zero(date.getHours())+':'+Zero(date.getMinutes())+':'+Zero(date.getSeconds())
    }
   
    let timer = setInterval(updateTime,1000)

   fetch("https://islomapi.uz/api/present/day?region=Samarqand")
   .then(res=>  res.json())
   .then(data=> {
    console.log(data.times);
    bomdod_time.innerHTML = data.times.tong_saharlik
    peshin_time.innerHTML = data.times.peshin
    asr_time.innerHTML = data.times.asr
    shom_time.innerHTML = data.times.shom_iftor
    hufton_time.innerHTML = data.times.hufton
    quyosh_time.innerHTML = data.times.quyosh
   }) 
