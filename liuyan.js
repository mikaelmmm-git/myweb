$(function () {
    var $iptDom = $('.gate');	//输入事件
    var $ulDom = $('.ul');	//正在进行
    var $olDom = $('.ol');	//已经完成
    var $addBtn = $('.addbtn');	//添加事件

    var count = 1;
   

    // 判断当前有多少个列表存在
    function countWay() {
        var $lenul = $ulDom.children('li').length;
        $countone.text($lenul);	//返回所选元素的文本内容
    }
    function countWayTow() {
        var $lenol = $olDom.find('.li').length;
        $counttwo.html($lenol);
    }

    // 添加操作
    $addBtn.on("click", function () {	//鼠标事件click
        createNodes();
    })

    // 添加方法
    function createNodes() {
        var $iptVal = $iptDom.val();//返回表单字段的值
        // var $li = $(`<li class="li"><input id="ipt-${count}" type="checkbox" class="check"> ${$iptVal} <button class="delbtn">DEL</button></li> `);
        var $li = $('<li class="li"><input id="ipt' + count + '"  type="checkbox" class="check"/>' + $iptVal + '<button class="delbtn">DEL</button></li>')
        //给ulDom添加一段字符串，同时将iptDom置为空
        $ulDom.append($li);
        $iptDom.val('');

        // 绑定删除事件
        $li.on('click', '.delbtn', delHanle);
        // 绑定转换事件
        $li.on('click', '#ipt' + count, changeHandle);
        count++;
        countWay();
    }

    // 删除方法
    function delHanle() {
        $(this).parent().remove();
        countWay();
        countWayTow()
    }

    
})