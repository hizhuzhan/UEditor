//HEADER
function createElement(type, name)
{     
    var element = null;     
    try {        
        element = document.createElement('<'+type+' name="'+name+'">');     
    } catch (e) {}   
    if(element==null) {     
        element = document.createElement(type);     
        element.name = name;     
    } 
    return element;     
}

//FOOTER
var oNode = null,thePlugins = 'text';
var isFirst = true;
// window.onload = function() {

// }

/*
@由于HTML插入的js不能执行Window.onload方法。
@function firstLoad() : 当鼠标位于内容div上时，执行此方法一次，只执行一次
 */
function firstLoad(){
    if(isFirst == true){
        //原window.onload====start
        if( UE.plugins[thePlugins].editdom ){
            oNode = UE.plugins[thePlugins].editdom;
            var gValue = '';
            if(oNode.getAttribute('value'))
                gValue = oNode.getAttribute('value').replace(/&quot;/g,"\"");
            var gTitle=oNode.getAttribute('title').replace(/&quot;/g,"\""),gHidden=oNode.getAttribute('orghide'),gFontSize=oNode.getAttribute('orgfontsize'),gAlign=oNode.getAttribute('orgalign'),gWidth=oNode.getAttribute('orgwidth'),gHeight=oNode.getAttribute('orgheight'),gType=oNode.getAttribute('orgtype');
            gValue = gValue==null ? '' : gValue;
            gTitle = gTitle==null ? '' : gTitle;
            $G('orgvalue').value = gValue;
            $G('orgname').value = gTitle;
            if (gHidden == '1')
            {
                $G('orghide').checked = true;
            }
            $G('orgfontsize').value = gFontSize;
            $G('orgwidth').value = gWidth;
            $G('orgheight').value = gHeight;
            $G('orgalign').value = gAlign;
            $G('orgtype').value = gType;
        }
        //原window.onload====end
        isFirst = false;
    }
}

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
    var gValue=$G('orgvalue').value.replace(/\"/g,"&quot;"),gTitle=$G('orgname').value.replace(/\"/g,"&quot;"),gFontSize=$G('orgfontsize').value,gAlign=$G('orgalign').value,gWidth=$G('orgwidth').value,gHeight=$G('orgheight').value,gType=$G('orgtype').value;
    
    if( !oNode ) {
        try {
            oNode = createElement('input','leipiNewField');
            oNode.setAttribute('type','text');
            oNode.setAttribute('title',gTitle);
            oNode.setAttribute('value',gValue);
            oNode.setAttribute('name','leipiNewField');
            oNode.setAttribute('leipiPlugins',thePlugins);
            if ( $G('orghide').checked ) {
                oNode.setAttribute('orghide',1);
            } else {
                oNode.setAttribute('orghide',0);
            }
            if( gFontSize != '' ) {
                oNode.style.fontSize = gFontSize + 'px';
                //style += 'font-size:' + gFontSize + 'px;';
                oNode.setAttribute('orgfontsize',gFontSize );
            }
            if( gAlign != '' ) {
                //style += 'text-align:' + gAlign + ';';
                oNode.style.textAlign = gAlign;
                oNode.setAttribute('orgalign',gAlign );
            }
            if( gWidth != '' ) {
                oNode.style.width = gWidth+ 'px';
                //style += 'width:' + gWidth + 'px;';
                oNode.setAttribute('orgwidth',gWidth );
            }
            if( gHeight != '' ) {
                oNode.style.height = gHeight+ 'px';
                //style += 'height:' + gHeight + 'px;';
                oNode.setAttribute('orgheight',gHeight );
            }
            if( gType != '' ) {
                oNode.setAttribute('orgtype',gType );
            }
            if (html_top == "") {
                html_top += oNode.outerHTML;
            }else{
                html_top = "";
                html_top += oNode.outerHTML;
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
        oNode.setAttribute('value', $G('orgvalue').value);
        if( $G('orghide').checked ) {
            oNode.setAttribute('orghide', 1);
        } else {
            oNode.setAttribute('orghide', 0);
        }
        if( gFontSize != '' ) {
            oNode.style.fontSize = gFontSize+ 'px';
            oNode.setAttribute('orgfontsize',gFontSize );
        }else{
            oNode.style.fontSize = '';
            oNode.setAttribute('orgfontsize', '');
        }
        if( gAlign != '' ) {
            oNode.style.textAlign = gAlign;
            oNode.setAttribute('orgalign',gAlign );
        }else{
            oNode.setAttribute('orgalign', '');
        }
        if( gWidth != '' ) {
            oNode.style.width = gWidth+ 'px';
            oNode.setAttribute('orgwidth',gWidth );
        }else{
            oNode.style.width = '';
            oNode.setAttribute('orgwidth', '');
        }
        if( gHeight != '' ) {
            oNode.style.height = gHeight+ 'px';
            oNode.setAttribute('orgheight',gHeight );
        }else{
            oNode.style.height = '';
            oNode.setAttribute('orgheight', '');
        }
        if( gType != '' ) {
            oNode.setAttribute('orgtype',gType );
        }else{
            oNode.setAttribute('orgtype', '');
        }
        delete UE.plugins[thePlugins].editdom;
    }
};