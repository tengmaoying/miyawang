jQuery($=>{
    //接收location的数据
    console.log(666);
    let id = decodeURI(location.search.slice(1));
    console.log(id);
    $.ajax({
        url:'../api/tetail.php?id='+ id,
        dataType:'json',
        success:function(data){
            
           let obj = data[0];
           console.log(obj)
           $('.tetail11')[0].innerHTML = obj.name;
           $('.tetailRname')[0].innerHTML = obj.name;
           $('.tetailRmiaoshu')[0].innerHTML = obj.describe;
           $('.newprice')[0].innerHTML = '￥'+obj.newprice;
           $('.overprice')[0].innerHTML = obj.overprice;
           $('<img/>').attr('src',`../img2/${obj.imgurl}`).appendTo($('.xuanze1'));
           $('.bianma')[0].innerHTML = '编码：'+obj.coding;
        //    $('<img/>').attr('src',`../img2/${obj.imgurl}`).attr('data-big',`../img2/${obj.imgurl}`).appendTo($('.tetaillL1'));
        // $('.tetaillL1')[0].src = '';
           $('.tetaillL1 img')[0].src= `../img2/${obj.imgurl}`; $('.tetaillL1 img')[0].dataset.big = `../img2/${obj.imgurl}`;
           $('<img/>').attr('src',`../img2/${obj.imgurl}`).attr('data-big',`../img2/${obj.imgurl}`).appendTo($('.tetaillL2 li'));
        }
    });
    
    //放大镜
    $.prototype.lxzoom = function(options){
		// 这里的this指向：实例（jquery对象）

		var defaults = {
			// 大图区域宽高
			width:500,
			height:500,

			// 位置：right,bottom,left,top
			position:'right',

			// 大图小图间距
			gap:15
        }
        // 扩展参数
        var opt = $.extend({},defaults,options);
        // 获取小图容器
        var $small = $(this);
        
		// 添加特定样式
		$small.addClass('lx-zoom');
		// 获取小图
        var $smallImg = $(this).children('img');console.log($smallImg);
        // 大图与小图的比例
        var ratio;
        var $big = $('<div/>').addClass('lx-bigzoom').appendTo('body');
        var $bigImg;
        var bigLeft,bigTop;
        switch(opt.position){
            case 'left':
                bigLeft = $small.offset().left - opt.gap - opt.width;
                bigTop = $small.offset().top;
                break;
            case 'right':
                bigLeft = $small.offset().left + $smallImg.outerWidth() + opt.gap
                bigTop = $small.offset().top;
                break;
            case 'top':
                bigLeft = $small.offset().left
                bigTop = $small.offset().top - opt.gap - opt.height;
                break;
            case 'bottom':
                bigLeft = $small.offset().left
                bigTop = $small.offset().top + $smallImg.outerHeight() + opt.gap;
        }

        // 定义样式 
        $big.css({
            width:opt.width,
            height:opt.height,
            top:bigTop,
            left:bigLeft
        }); 
        
        // 创建放大镜，并写入小图位置
        var $zoom = $('<div/>').addClass('zoom').appendTo($small);
        $small.on('mouseover',function(){
            $zoom.show();
            $big.show();


            // 获取大图url
            var bigUrl = $smallImg.attr('data-big');console.log($smallImg);
            /*
                大图相关
             */
            $big.empty();
            $bigImg = $('<img/>').attr('src',bigUrl).appendTo($big);

            // 创建临时图片，以解决图片加载慢而产生的比例计算错误的问题 
            var img = new Image();
            img.src = bigUrl;
            img.onload = function(){
            
                // 计算大图与小图的比例
                // 要获取图片的宽高前提：1.加载完成；2.显示到页面
                ratio = $bigImg.outerWidth()/$smallImg.outerWidth();

                // 设置放大镜的尺寸
                // 跟放大区域成比例
                $zoom.css({
                    width:opt.width/ratio,
                    height:opt.height/ratio
                });
            }

            
            
        }).on('mouseout',function(){
            $zoom.hide();
            $big.hide();
        })

        // 鼠标移动
        .on('mousemove',function(e){
            // 计算left,top
            var left = e.pageX - $zoom.outerWidth()/2 - $small.offset().left;
            var top = e.pageY - $zoom.outerHeight()/2 - $small.offset().top;

            // 限定top,left值
            // 不超出小图区域
            if(left < 0){
                left = 0;
            }else if(left > $smallImg.outerWidth() - $zoom.outerWidth()){
                left = $smallImg.outerWidth() - $zoom.outerWidth();
            }

            if(top<0){
                top = 0;
            }else if(top > $smallImg.outerHeight() - $zoom.outerHeight()){
                top = $smallImg.outerHeight() - $zoom.outerHeight()
            }

            $zoom.css({
                left:left,
                top:top
            });


            // 移动大图
            $bigImg.css({
                left:-left*ratio,
                top:-top*ratio
            });
        })
    

    // 链式调用的关键
    return this;        
    }
})

