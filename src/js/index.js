
jQuery($=>{
    $.ajax({
        url:'../api/index.php',
        dataType:'json',
        success:function(data){
            console.log(data);
            let arr = data.slice(0,10);
            console.log(arr);
            $('.recommend1')[0].innerHTML = arr.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span>
                        <p class="price">拼团价： <span>￥${item.newprice}</span></p>
                        <p class="overprice">市场价： <del>￥${item.overprice}</del></p>
                    </li>`
            }).join('');

            let arr1 = data.slice(10,15);
            $('.eveyDa1')[0].innerHTML += arr1.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr2 = data.slice(15,20);
            $('.eveyDa2')[0].innerHTML += arr2.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr3 = data.slice(20,25);
            $('.eveyDa3')[0].innerHTML += arr3.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr4 = data.slice(25,30);
            $('.eveyDa4')[0].innerHTML += arr4.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr5 = data.slice(30,35);
            $('.eveyDa5')[0].innerHTML += arr5.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr6 = data.slice(35,40);
            $('.eveyDa6')[0].innerHTML += arr6.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr7 = data.slice(40,45);
            $('.eveyDa7')[0].innerHTML += arr7.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr8 = data.slice(45,50);
            $('.eveyDa8')[0].innerHTML += arr8.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr9 = data.slice(50,55);
            $('.eveyDa9')[0].innerHTML += arr9.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');

            let arr10 = data.slice(55,60);
            $('.eveyDa10')[0].innerHTML += arr10.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');
            
            let arr11 = data.slice(60,65);
            $('.eveyDa11')[0].innerHTML += arr11.map(item=>{
                return `<li data-id=${item.id}>
                        <img src="./img2/${item.imgurl}">
                        <span class="uname">${item.name}</span><br/>
                        <span class="price">￥${item.newprice}</span>
                         <del class="overprice">￥${item.overprice}</del>
                    </li>`
            }).join('');
        }
    });
    //生成二维码固定定位
})