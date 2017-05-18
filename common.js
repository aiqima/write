//计算页面的的rem宽度
(function(win) {
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid;

    function refreshRem() {
        // 获取当前窗口的宽度
        var width = docEl.getBoundingClientRect().width;
        // 大于640px 按640算
        if (width > 640) { width = 640 }
        // 把窗口的宽度固定分为10份 也就是10rem 
        // 按视觉稿640算  640/10=64px  那么1rem = 64px
        // 640视觉中 80px*80px的按钮 转换为rem  80/64 = 1.25rem
        // 按钮的宽高固定为  1.25rem * 1.25rem
        // 当窗口宽度缩放为 320px的时候
        // 那么 1rem = 32px 
        // 原来 80px*80px的按钮现在变为 1.25rem * 32px = 40px
        // 按钮变为 40px * 40px
        // 其他宽度也类似
        // 
        // cms做法也类似
        // 只是我们把窗口宽度固定分为 6.4份，即6.4rem
        // 所以 1rem = 100px
        // 640视觉中 80px*80px的按钮 转换为rem  80/100 = 0.8rem
        // ....其他也差不多
        // 
        // 
        // 对比
        // 其实也就是计算rem的问题 视觉稿量出来的值  除64 或 100的问题
        // 除100 总比 除64 好口算
        // 就算用sass写个 @function px2rem代替口算
        // .8rem 总比输入 px2rem(80)少几个字符
        // 
        // 
        var rem = width / 10;  // cms 只要把这行改成  var rem = width /640 * 100 
        docEl.style.fontSize = rem + "px";
        remCalc.rem = rem;
        //误差、兼容性处理
        var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
        if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
            var remScaled = rem * rem / actualSize;
            docEl.style.fontSize = remScaled + "px"
        }
    }

    //函数节流，避免频繁更新
    function dbcRefresh() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 100)
    }

    //窗口更新动态改变font-size
    win.addEventListener("resize", function() { dbcRefresh() }, false);

    //页面显示的时候再计算一次   难道切换窗口之后再切换来窗口大小会变?....
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) { dbcRefresh() }
    }, false);
    refreshRem();
    remCalc.refreshRem = refreshRem;
    remCalc.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === "string" && d.match(/rem$/)) { val += "px" }
        return val
    };
    remCalc.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === "string" && d.match(/px$/)) { val += "rem" }
        return val
    };
    win.remCalc = remCalc
})(window);

// 使用rem 最好文字都指定字体大小  不然会继承html的font-size

//事件选择器
var EventUtil = {
	addHandler: function(element,type,handler){							//绑定事件
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);			
		}else{
			element["on"+type] = handler;			
		}
	},
	removeHandler: function(element,type,handler){						//移除事件
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);			
		}else{
			element["on"+type] = null;
		}
	},
	getEvent: function(event){											//获取事件对象
		return event ? event : window.event;
	},
	getTarget: function(event){											//获取事件目标
		return event.target || event.srcElement;
	},
	stopPropagation: function(event){									//阻止事件传播
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	preventDefault: function(event){									//阻止默认行为
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	}
}

//提示框组件
function tipBox(inner){
	//$('#tipText').innerHTML = inner;
	document.getElementById('tipText').innerHTML = inner;
	$('.tip-box').show().addClass('enter-up-anima');		//显示并添加动画
	setTimeout(function(){
		$('.tip-box').css('bottom','50%');					//固定位置	
	},300);
	setTimeout(function(){
		$('.tip-box').hide();								//定时隐藏提示框
	},2000);
}

