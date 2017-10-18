var html_top = "";
var html_bottom = "";
var editor = UE.getEditor('myFormdesign');

window.onload = function(){
	$("#column_2").empty();
	$("#column_4").empty();
}

/*
@function 判断第二列插入的内容
@html = html
 */
function insertHtml_to_1_4_column_2(html){
	var content_2 = $("#column_2").text();
	$("#column_2").css("display", "inline");
	if (content_2 != "") {
		$("#column_2").empty();
		$("#column_2").html(html);
	}else{
		$("#column_2").html(html);
	}
}

/*
@function 判断第四列插入的内容
@html = html
 */
function insertHtml_to_1_4_column_4(html){
	var content_4 = $("#column_4").text();
	$("#column_4").css("display", "inline");
	if (content_4 != "") {
		$("#column_4").empty();
		$("#column_4").html(html);
	}else{
		$("#column_4").html(html);
	}
}

/*
@object 第2列插入内容库
 */
var allHtml = {
	textHtml: function(located){
		var text_html = "<script type='text\/javascript' src='js\/add_line_1_4_text_" + located + ".js'><\/script>" 
					  + "<div class='content' onmouseover='firstLoad()'><table class='table table-bordered table-striped table-hover'>"
					  + "<tr><th colspan='2'><strong style='font-size:18px;'>编辑文本框<\/strong><\/th><\/tr>"
					  + "<tr><th><span>控件名称<\/span><span class='label label-important'>*<\/span><\/th><th><span>默认值<\/span> <\/th><\/tr>"
					  + "<tr><td><input type='text' id='orgname' placeholder='必填项'><\/td><td><input type='text' id='orgvalue' placeholder='无则不填'><\/td><\/tr>"
					  + "<tr><th><span>数据类型<\/span> <\/th><th><span>对齐方式<\/span> <\/th><\/tr>"
					  + "<tr><td><select id='orgtype'><option value='text'>普通文本<\/option><option value='email'>邮箱地址<\/option><option value='int'>整数<\/option><option value='float'>小数<\/option><option value='idcard'>身份证号码<\/option><\/select><\/td><td><select id='orgalign'><option value='left' >左对齐<\/option><option value='center'>居中对齐<\/option><option value='right'>右对齐<\/option><\/select><\/td><\/tr>"
					  + "<tr><th><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长&nbsp;&nbsp;X&nbsp;&nbsp;宽&nbsp;&nbsp;&&nbsp;&nbsp;字体大小<\/span> <\/th><th><span>可见性<\/span> <\/th><\/tr>"
					  + "<tr><td><input id='orgwidth' type='text' value='150' class='input-small span1' placeholder='auto'\/> X <input id='orgheight' type='text' value='' class='input-small span1' placeholder='auto'\/> & <input id='orgfontsize' type='text'  value='' class='input-small span1' placeholder='auto'\/> px<\/td><td><label class='checkbox inline'><input id='orghide' type='checkbox'\/> 隐藏 <\/label><\/td><\/tr>"
					  + "<tr><td colspan='2'><input type='button' name='ok' value='提交控件' onclick='ok()'><\/td><\/tr>"					 
					  + "<\/table><\/div>";
		return text_html;
	},
	textareaHtml: function(located){
		var textarea_html = "<script type='text\/javascript' src='js\/add_line_1_4_textarea_" + located + ".js'><\/script>"
					 + "<div class='content' onmouseover='firstLoad()'><table class='table table-bordered table-striped table-hover'>"
					 + "<tr><th colspan='2'><strong style='font-size:18px;'>编辑多行文本<\/strong><\/th><\/tr>"
					 + "<tr><th><span>控件名称<\/span><span class='label label-important'>*<\/span><\/th><th><span>字体大小<\/span><\/th><\/tr>"
					 + "<tr><td><input id='orgname' type='text' placeholder='必填项'\/><\/td><td><input id='orgfontsize' type='text'  value='' class='input-small span1' placeholder='auto'\/> px<\/td><\/tr>"
					 + "<tr><th><span>输入框样式<\/span> <\/th><th><span>增强<\/span> <\/th><\/tr>"
					 + "<tr><td> 宽 <input id='orgwidth' type='text' value='300' class='input-small span1' placeholder='auto'\/> px&nbsp;&nbsp; 高 <input id='orgheight' type='text' value='80' class='input-small span1' placeholder='auto'\/> px<\/td><td> <label class='checkbox'><input id='orgrich' type='checkbox'  \/> 富文本形式 <\/label> <\/td><\/tr>"
					 + "<tr><td colspan='2'><label for='orgvalue'>默认值<\/label><textarea class='input-block-level' rows='3' id='orgvalue' placeholder='多行文本框默认值...'><\/textarea><\/td><\/tr>"
					 + "<tr><th colspan='2'><input type='button' name='ok' value='提交控件' onclick='ok()'><\/th><\/tr>"					 
			 		 + "<\/table><\/div>";
		return textarea_html;
	},
	selectHtml: function(located){
		var select_html = "<script type='text\/javascript' src='js\/add_line_1_4_select_" + located + ".js'><\/script>"
						+ "<div class='content' onmouseover='firstLoad()'><table class='table table-bordered table-striped table-hover'>"
						+ "<tr><th colspan='2'><strong style='font-size:18px;'>编辑下拉菜单<\/strong><\/th><\/tr>"
						+ "<tr><th><span>控件名称<\/span><span class='label label-important'>*<\/span><\/th><th><span>控件样式<\/span><\/th><\/tr>"
						+ "<tr><td><input id='orgname' placeholder='必填项' type='text'\/><\/td><td> 宽：<input id='orgwidth' type='text' value='150' class='input-small span1'\/> px&nbsp;&nbsp;&nbsp;&nbsp;高：<input id='orgsize' type='text' class='input-small span1' value='1'\/> 行<\/td><\/tr>"
						+ "<tr style='display: none;'><th><span>关联子菜单名称<\/span> <a id='showTips' data-content='若关联子菜单，需要子下拉菜单设置的时候在每个选项后加上特殊标记以记录与父菜单关系，形如“子菜单项目|父菜单项目”，则父菜单发生变化，子菜单会随之自动刷新筛选' rel='popover' data-original-title='说明'><i class='icon-info-sign'><\/i><\/a> <\/th><td><input id='orgChild' type='text' size='20' > <\/td><\/tr>"
						+ "<tr><th><span class='pull-right'>初始选定<\/span><\/th><td> <span id='orgvalue' class='uneditable-input' style='height:20px;'><\/span> <\/td><\/tr>"
						+ "<tr><th colspan='2'><span>列表值<\/span> <span class='label label-important'>*<\/span><\/th><\/tr>"
						+ "<tr><td colspan='2'><select id='orglist'  multiple='multiple' class='span14'><\/select><\/td><\/tr>"
						+ "<tr><td><div class='btn-group pull-right'><a title='新增' onclick='fnAdd();' class='btn btn-primary'><i class='icon-white icon-plus'><\/i><\/a><a title='修改' onclick='fnModify();' class='btn btn-default'><i class='icon-edit'><\/i><\/a><\/div><input type='text' placeholder='输入列表值...' class='span2' id='orgtext'><\/td><td><div class='btn-group'><button title='上移' onclick='fnMove(-1);' class='btn btn-default'><i class='icon-arrow-up'><\/i><\/button><button title='下移' onclick='fnMove(1);' class='btn btn-default'><i class='icon-arrow-down'><\/i><\/button><button title='设为初始化时选定值' onclick='fnSetSelectedValue();' class='btn btn-default'><i class='icon-ok-circle'><\/i><\/button><button title='删除' onclick='fnDelete();' class='btn btn-default'><i class='icon-ban-circle'><\/i><\/button><\/div><\/td><\/tr>"
						+ "<tr><th colspan='2'><input type='button' name='ok' value='提交控件' onclick='ok()'><\/th><\/tr>"
						+ "<\/table><\/div>";
		return select_html;
	},
	radiosHtml: function(located){
		var radios_html = "<script type='text\/javascript' src='js\/add_line_1_4_radios_" + located + ".js'><\/script>"
						+ "<div class='content' onmouseover='firstLoad()'><input id='hidname'  type='hidden'\/><table class='table table-bordered table-striped'>"
						+ "<tr><th colspan='2'><strong style='font-size:18px;'>编辑单选框<\/strong><\/th><\/tr>"
						+ "<tr><th><span>控件名称<\/span><span class='label label-important'>*<\/span><\/th><th><span>排列方式<\/span><\/th><\/tr>"
						+ "<tr><td><input id='orgname' placeholder='必填项' type='text'\/> <\/td><td><label class='radio' title='选项一 选项二'><input id='orgchecked0' checked='checked' name='checked' type='radio'> 横排 <\/label><label class='radio' title='选项一&#10;选项二'><input id='orgchecked1' name='checked' type='radio' > 竖排 <\/label><\/td><\/tr>"
						+ "<tr><td colspan='2'><table class='table table-hover table-condensed' id='options_table'>"
						+ "<tr><th>选中<\/th><th>选项值<\/th><th>操作<\/th><\/tr><\/table><a title='添加选项' class='btn btn-primary' onclick='fnAdd();'>添加选项<\/a><\/td><\/tr>"
						+ "<tr><th colspan='2'><input type='button' name='ok' value='提交控件' onclick='ok()'><\/th><\/tr>"
						+ "<\/table><\/div>";
		return radios_html;
	},
	checkboxsHtml: function(located){
		var checkboxs_html = "<script type='text\/javascript' src='js\/add_line_1_4_checkboxs_" + located + ".js'><\/script>"
						   + "<div class='content'><table class='table table-bordered table-striped'>"
						   + "<tr><th colspan='2'><strong style='font-size:18px;'>编辑多选框<\/strong><\/th><\/tr>"
						   + "<tr><th><span>控件名称<\/span><span class='label label-important'>*<\/span><\/th><th><span>排列方式<\/span><\/th><\/tr>"
						   + "<tr><td><input id='orgname' placeholder='必填项' type='text'\/> <\/td><td><label class='radio' title='选项一 选项二'><input id='orgchecked0' checked='checked' name='checked' type='radio'> 横排 <\/label><label class='radio' title='选项一&#10;选项二'><input id='orgchecked1' name='checked' type='radio' > 竖排 <\/label><\/td>"
						   + "<\/tr><tr><td colspan='2'>"
						   + "<table class='table table-hover table-condensed' id='options_table'>"
						   + "<tr><th>选中<\/th><th>选项值<\/th><th>操作<\/th><\/tr>"
						   + "<\/table><a title='添加选项' class='btn btn-primary' onclick='fnAdd();'>添加选项<\/a><\/td><\/tr>"
						   + "<tr><th colspan='2'><input type='button' name='ok' value='提交控件' onclick='ok()'><\/th><\/tr>"
						   + "<\/table><\/div>";
		return checkboxs_html;
	}
};
function select_1(value){
	if(value == "text"){
		//文本框
		insertHtml_to_1_4_column_2(allHtml.textHtml("top"));
	}else if(value == 'textarea'){
		//多行文本
		insertHtml_to_1_4_column_2(allHtml.textareaHtml("top"));
	}else if(value == 'select'){	
		//下拉菜单
		insertHtml_to_1_4_column_2(allHtml.selectHtml("top"));
	}else if(value == 'radios'){
		//单选框
		insertHtml_to_1_4_column_2(allHtml.radiosHtml("top"));
	}else if(value == 'checkboxs'){
		//复选框
		insertHtml_to_1_4_column_2(allHtml.checkboxsHtml("top"));
	}

}


function select_2(value){
	if(value == 'text'){
		//文本框
		insertHtml_to_1_4_column_4(allHtml.textHtml("bottom"))
	}else if(value == 'textarea'){
		//多行文本
		insertHtml_to_1_4_column_4(allHtml.textareaHtml("bottom"))
	}else if(value == 'select'){
		//下拉菜单
		insertHtml_to_1_4_column_4(allHtml.selectHtml("bottom"));
	}else if(value == 'radios'){
		//单选框
		insertHtml_to_1_4_column_4(allHtml.radiosHtml("bottom"));
	}else if(value == 'checkboxs'){
		//复选框
		insertHtml_to_1_4_column_4(allHtml.checkboxsHtml("bottom"));
	}
}

//select选择取消选择，清空
function onCancle(column){
	if(column == 2){
		$("#column_2").empty();
		html_top = "";
	}
	if(column == 4){
		$("#column_4").empty();
		html_bottom = "";
	}
}



dialog.onok = function (){
	var text_top = $G('text_1').value;
	var text_bottom = $G('text_2').value;
	var html = "<table><tbody><tr class='firstRow'><td width='215' valign='top'>"
			 + text_top
			 + "<br><\/td><td width='215' valign='top'>"
			 + html_top
			 + "<br><\/td><td width='215' valign='top'>"
			 + text_bottom
			 + "<br><\/td><td width='215' valign='top'>"
			 + html_bottom
			 + "<br><\/td><\/tr><\/tbody><\/table>";
	//var html = html_top + html_bottom;
	var content_2 = $("#column_2").text();
	var content_4 = $("#column_4").text();

	if(content_2 != ""){
		alert("请先提交控件");
		return false;
	}else if(content_4 != ""){
		alert("请先提交控件");
		return false;
	}else{
		alert(html);
		editor.execCommand('insertHtml', html);
		return true;
	}
	
}

