let moment = require('moment');

//日期格式化，m表示月，Y表示年，h表示小时，m表示分钟，s表示秒，a表示上午还是下午
console.log(moment().format());                          // 2017-04-18T17:37:46+08:00
console.log(moment().format('YYYY年MM月DD日'));           // 2017年04月18日
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));     //2017-04-18 17:42:36
console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // April 18th 2017, 5:37:46 pm
console.log(moment().format("MMM Do YY"));               // Apr 18th 17
console.log(moment().format('dddd'));                    // Tuesday
console.log(moment().format('d'));                       // 2
console.log(moment().format('YYYY [escaped] YYYY'));     // 2017 escaped 2017


//相对时间,想对于当前时间过了多长时间
console.log(moment("20111031",'YYYY').fromNow()); // 6 years ago
console.log(moment("20120620", 'YYYYMMDD').fromNow()); // 5 years ago
console.log(moment().startOf('day').fromNow());        // 18 hours ago，今天已经过了１８小时
console.log(moment().endOf('day').fromNow());          // in 6 hours
console.log(moment().startOf('hour').fromNow());       // 35 minutes ago，此刻这个小时已经过了３５分钟

//日历时间 .subtract是计算过去的时间，.add是显示未来的时间
console.log(moment().subtract(10, 'days').calendar()); // 04/08/2017
console.log(moment().subtract(6, 'days').calendar());  // Last Wednesday at 5:30 PM
console.log(moment().subtract(3, 'month').calendar());  // 01/18/2017
console.log(moment().subtract(1, 'year').calendar());  // 04/18/2016
console.log(moment().calendar());                      // Today at 5:27 PM
console.log(moment().add(3, 'days').calendar());       // Friday at 5:27 PM
console.log(moment().add(10, 'days').calendar());      // 04/28/2017
console.log(moment().add(1, 'month').calendar());       // 05/18/2017

//多语言支持
console.log(moment().format('L'));    // 04/18/2017
console.log(moment().format('l'));    // 4/18/2017
console.log(moment().format('LL'));   // April 18, 2017
console.log(moment().format('ll'));   // Apr 18, 2017
console.log(moment().format('LLL'));  // April 18, 2017 5:21 PM
console.log(moment().format('lll'));  // Apr 18, 2017 5:21 PM
console.log(moment().format('LLLL')); // Tuesday, April 18, 2017 5:21 PM
console.log(moment().format('llll')); // Tue, Apr 18, 2017 5:21 PM

