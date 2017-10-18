//FOOTER
var oNode = null,thePlugins = 'textarea';

var isFirst = true;

/*
@由于HTML插入的js不能执行Window.onload方法。
@function firstLoad() : 当鼠标位于内容div上时，执行此方法一次，只执行一次
 */
function firstLoad(){
    if(isFirst == true){
        //原window.onload====start
        if( UE.plugins[thePlugins].editdom ){
        oNode = UE.plugins[thePlugins].editdom;
        var gValue = oNode.getAttribute('value').replace(/&quot;/g,"\""),gTitle=oNode.getAttribute('title').replace(/&quot;/g,"\""),gFontSize=oNode.getAttribute('orgfontsize'),gWidth=oNode.getAttribute('orgwidth'),gHeight=oNode.getAttribute('orgheight'),gRich=oNode.getAttribute('orgrich');
        
        gValue = gValue==null ? '' : gValue;
        gTitle = gTitle==null ? '' : gTitle;
        $G('orgvalue').value = gValue;
        $G('orgname').value = gTitle;
        if ( gRich == '1' ) {
            $G('orgrich').checked = true ;
        }
        $G('orgfontsize').value = gFontSize;
        $G('orgwidth').value = gWidth;
        $G('orgheight').value = gHeight;
    }
        //原window.onload====end
        isFirst = false;
    }
}

// window.onload = function() {
    
// }
dialog.oncancel = function () {
    if( UE.plugins[thePlugins].editdom ) {
        delete UE.plugins[thePlugins].editdom;
    }
};
function ok(){
    if($G('orgname').value==''){
        alert('请输入第二列的控件名称');
        return false;
    }
    var gValue=$G('orgvalue').value.replace(/\"/g,"&quot;"),gTitle=$G('orgname').value.replace(/\"/g,"&quot;"),gFontSize=$G('orgfontsize').value,gWidth=$G('orgwidth').value,gHeight=$G('orgheight').value;

    if( !oNode ) {
        try {
            var html = '<textarea ';
            html += ' title = "' + gTitle + '"';
            html += ' name = "leipiNewField"';
            html += ' leipiPlugins = "'+thePlugins+'"';
            html += ' value = "' + gValue + '"';
            if ( $G('orgrich').checked ) {
                html += ' orgrich = "1"';
            } else {
                html += ' orgrich = "0"';
            }
            if( gFontSize != '' ) {
                html += ' orgfontsize = "' + gFontSize + '"';
            } else {
                html += ' orgfontsize = ""';
            }
            if( gWidth != '' ) {
                html += ' orgwidth = "' + gWidth + '"';
            } else {
                html += ' orgwidth = ""';
            }
            if(gHeight != '') {
                html += ' orgheight = "' + gHeight + '"';
            } else {
                html += ' orgheight = ""';
            }
            
            html += ' style = "';
            if( gFontSize != '' ) {
                html += 'font-size:' + gFontSize + 'px;';
            }
            if( gWidth != '' ) {
                html += 'width:' + gWidth + 'px;';
            }
            if( gHeight != '' ) {
                html += 'height:' + gHeight + 'px;';
            }
            html += '">';
            html += gValue + '</textarea>';
            //editor.execCommand('insertHtml',html);
            if (html_top == "") {
                html_top += html;
            }else{
                html_top = "";
                html_top += html;
            }
            $("#column_2").empty();
        } catch (e) {
            try {
                editor.execCommand('error');
            } catch ( e ) {
                alert('控件异常！');
            }
            return false;
        }
    } else {
        oNode.setAttribute('title', gTitle);
        oNode.setAttribute('value',gValue);
        oNode.innerHTML = gValue;
        if( $G('orgrich').checked ) {
            oNode.setAttribute('orgrich', 1);
        } else {
            oNode.setAttribute('orgrich', 0);
        }
        
        if( gFontSize != '' ) {
            oNode.style.fontSize = gFontSize+ 'px';
            oNode.setAttribute('orgfontsize',gFontSize );
        }else{
            oNode.setAttribute('orgfontsize', '');
        }
        if( gWidth != '' ) {
            oNode.style.width = gWidth+ 'px';
            oNode.setAttribute('orgwidth',gWidth );
        }else{
            oNode.setAttribute('orgwidth', '');
        }
        if( gHeight != '' ) {
            oNode.style.height = gHeight+ 'px';
            oNode.setAttribute('orgheight',gHeight );
        }else{
            oNode.setAttribute('orgheight', '');
        }
        delete UE.plugins[thePlugins].editdom;
    }
};