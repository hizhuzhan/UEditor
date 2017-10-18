//实例一个Ueditor
var leipiEditor = UE.getEditor('myFormdesign',{
    toolleipi:true,//是否在toolbars显示，表单设计器的图标 
    //toolbars:[['FullScreen', 'Source']],//这里是工具拦
    toolbars:[['fullscreen', 'source', '|', 'undo', 'redo', '|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',  'removeformat', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist','|', 'fontfamily', 'fontsize', '|', 'indent', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',  'link', 'unlink',  '|',  'horizontal',  'spechars',  'wordimage', '|', 'inserttable', 'deletetable',  'mergecells',  'splittocells']],
    textarea: 'design_content',//编辑器的表单名称   
    //更多其他参数，请参考ueditor.config.js中的配置项
    //关闭字数统计
    wordCount:false,
    //关闭elementPath
    elementPathEnabled:false,
    //默认的编辑区域高度
    initialFrameHeight:400,
    //默认的编辑区域宽度
    initialFrameWidth:1000
});

//========================test========================



//========================test========================

function getHtml(){
    var content = leipiEditor.getContent();
    //格式化html
    var re_br = /<br\/>/g;
    var re_width = /width="(.*?)"/g;
    var re_valign = /valign="(.*?)"/g;
    var re_style = /style="(.*?)"/g;
    var re_class = /class="(.*?)"/g;
    var re_data_sort = /data-sort="(.*?)"/g;
    var re_p_sdt = /<td(.*?)>/g;
    var re_p_ed = /<\/td>/g;
    var fomatContent = content.replace(re_br, "").replace(re_width, "").replace(re_valign, "").replace(re_br, "").replace(re_style, "").replace(re_class, "");
    alert(fomatContent);


    var tObj = document.getElementById('textarea');
    tObj.value = fomatContent;
}


var formDesign = {
    /*执行控件*/
    exec : function (method) {
        leipiEditor.execCommand(method);
    }
};

//无格式的一行一列
function add_line_1_1(){
    var html = "<table><tbody><tr class='firstRow'><td width='923' valign='top' style='word-break: break-all;'></td></tr></tbody></table>";
    leipiEditor.execCommand('insertHtml', html);

}

//无格式的一行两列
function add_line_1_2(){
    var html = "<table><tbody><tr class='firstRow'><td width='451' valign='top'><br></td><td width='451' valign='top'><br></td></tr></tbody></table>";
    leipiEditor.execCommand('insertHtml', html);
}

//无格式的一行四列
function add_line_1_4(){
    var html = "<table><tbody><tr class='firstRow'><td width='215' valign='top'><br></td><td width='215' valign='top'><br></td><td width='215' valign='top'><br></td><td width='215' valign='top'><br></td></tr></tbody></table>";
    leipiEditor.execCommand('insertHtml', html);
}