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
function fnSelect( combo ) {
    var iIndex = combo.selectedIndex ;
    oListText.selectedIndex    = iIndex ;
    var olistText    = document.getElementById( "orgtext" ) ;
    olistText.value    = oListText.value ;
}

function fnAdd() {
    var olistText    = document.getElementById( "orgtext" ) ;
    fnAddComboOption( oListText, olistText.value, olistText.value ) ;
    oListText.selectedIndex = oListText.options.length - 1 ;
    olistText.value    = '' ;
    olistText.focus() ;
}

function fnModify() {
    var iIndex = oListText.selectedIndex ;
    if ( iIndex < 0 ) return ;
    var olistText    = document.getElementById( "orgtext" ) ;
    oListText.options[ iIndex ].innerHTML    = fnHTMLEncode( olistText.value ) ;
    oListText.options[ iIndex ].value        = olistText.value ;
    olistText.value    = '' ;
    olistText.focus() ;
}

function fnMove( steps ) {
    fnChangeOptionPosition( oListText, steps ) ;
}

function fnDelete() {
    fnRemoveSelectedOptions( oListText ) ;
}

function fnSetSelectedValue() {
    var iIndex = oListText.selectedIndex ;
    if ( iIndex < 0 ) return ;
    var olistText = document.getElementById( "orgvalue" ) ;
    olistText.innerHTML = oListText.options[ iIndex ].value ;
}

// Moves the selected option by a number of steps (also negative)
function fnChangeOptionPosition( combo, steps ) {
    var iActualIndex = combo.selectedIndex ;
    if ( iActualIndex < 0 ){
        return ;
    }
    var iFinalIndex = iActualIndex + steps ;
    if ( iFinalIndex < 0 ){
        iFinalIndex = 0 ;
    }
    if ( iFinalIndex > ( combo.options.length - 1 ) ) {
        iFinalIndex = combo.options.length - 1 ;
    }
    if ( iActualIndex == iFinalIndex ) {
        return ;
    }
    var oOption = combo.options[ iActualIndex ] ;
    if(oOption.value=="") {
        var sText    = fnHTMLDecode( oOption.value ) ;
    } else {
        var sText    = fnHTMLDecode( oOption.innerHTML ) ;
    }
    combo.remove( iActualIndex ) ;
    oOption = fnAddComboOption( combo, sText, sText, null, iFinalIndex ) ;
    oOption.selected = true ;
}

// Remove all selected options from a SELECT object
function fnRemoveSelectedOptions( combo ) {
    // Save the selected index
    var iSelectedIndex = combo.selectedIndex ;
    var oOptions = combo.options ;
    // Remove all selected options
    for ( var i = oOptions.length - 1 ; i >= 0 ; i-- ) {
        if (oOptions[i].selected) combo.remove(i) ;
    }

    // Reset the selection based on the original selected index
    if ( combo.options.length > 0 ) {
        if ( iSelectedIndex >= combo.options.length ) iSelectedIndex = combo.options.length - 1 ;
        combo.selectedIndex = iSelectedIndex ;
    }
}

// Add a new option to a SELECT object (combo or list)
function fnAddComboOption( combo, optionText, optionValue, documentObject, index ) {
    var oOption ;
    if ( documentObject ) {
        oOption = documentObject.createElement("option") ;
    } else {
        oOption = document.createElement("option") ;
    }
    if ( index != null ) {
        combo.options.add( oOption, index ) ;
    } else {
        combo.options.add( oOption ) ;
    }
    oOption.innerHTML = optionText.length > 0 ? fnHTMLEncode( optionText ) : '&nbsp;' ;
    oOption.value     = optionValue ;
    return oOption ;
}

function fnHTMLEncode( text ) {
    if ( !text ) {
        return '' ;
    }
    text = text.replace( /&/g, '&amp;' ) ;
    text = text.replace( /</g, '&lt;' ) ;
    text = text.replace( />/g, '&gt;' ) ;
    return text ;
}


function fnHTMLDecode( text ) {
    if ( !text ) {
        return '' ;
    }
    text = text.replace( /&gt;/g, '>' ) ;
    text = text.replace( /&lt;/g, '<' ) ;
    text = text.replace( /&amp;/g, '&' ) ;
    return text ;
}

function fnSetAttribute( element, attName, attValue ) {
    if ( attValue == null || attValue.length == 0 ){
        element.removeAttribute( attName, 0 ) ;        
    } else {
        element.setAttribute( attName, attValue, 0 ) ;    
    }
}

//FOOTER
var oNode = null,oListText='',thePlugins = 'select';
var isFirst = true;

/*
@由于HTML插入的js不能执行Window.onload方法。
@function firstLoad() : 当鼠标位于内容div上时，执行此方法一次，只执行一次
 */
function firstLoad(){
    if(isFirst == true){
        //原window.onload====start
        oListText = $G('orglist');
        if( UE.plugins[thePlugins].editdom ){
            oNode = UE.plugins[thePlugins].editdom;
            var gTitle=oNode.getAttribute('title').replace(/&quot;/g,"\""),gWidth=oNode.getAttribute('orgwidth'),gSize=oNode.getAttribute('size');
            gTitle = gTitle==null ? '' : gTitle;
            $G('orgvalue').innerHTML = oNode.value;
            $G('orgname').value = gTitle;
            $G('orgsize').value = gSize;
            $G('orgwidth').value = gWidth;
            for ( var i = 0 ; i < oNode.options.length ; i++ ) {
                var sText    = oNode.options[i].value ;
                fnAddComboOption( oListText, sText, sText ) ;
            }
        }
        /*$('#showTips').popover();*/
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
    if( $G('orgname').value == '') {
        alert('第四列控件名称不能为空');
        return false;
    }
    if( oListText.options.length == 0 ) {
        alert('第四列需添加下拉菜单选项！');
        return false;
    }
    var gSize = $G('orgsize').value ;
    if ( gSize == null || isNaN( gSize ) || gSize < 1 ) {
        gSize = '' ;
    }
     var gWidth=$G('orgwidth').value;
     
    if( !oNode ) {
        try {
            //oNode = document.createElement("select"); 
            oNode = createElement('select','leipiNewField');
            oNode.setAttribute('title',$G('orgname').value);
            oNode.setAttribute('leipiPlugins',thePlugins );
            oNode.setAttribute('size',gSize);
            if ( $G('orgwidth').value!= '' ) {
                oNode.style.width =  $G('orgwidth').value+ 'px';
                //oNode.setAttribute('style','width:'+ $G('orgwidth').value + 'px;');
            }
            if( gWidth != '' ) {
                oNode.style.width = gWidth + 'px';
                oNode.setAttribute('orgwidth',gWidth );
            }
            
            // Add all available options.
            for ( var i = 0 ; i < oListText.options.length ; i++ ) {
                var sText    = oListText.options[i].value ;
                if ( sText.length == 0 ) {
                    sText = sText ;
                }
                var oOption = fnAddComboOption( oNode, sText, sText ) ;
                if ( sText == $G('orgvalue').innerHTML ) {
                    fnSetAttribute( oOption, 'selected', 'selected' ) ;
                    oOption.selected = true ;
                }
            }
            //firefox要利用span
            var html = "{|-<span leipiplugins='select'>&nbsp;&nbsp;" + oNode.outerHTML + "&nbsp;&nbsp;<\/span>-|}";
            if (html_bottom == "") {
                html_bottom += html;
            }else{
                html_bottom = "";
                html_bottom += html;
            }
            $("#column_4").empty();
            //editor.execCommand('insertHtml','');
            return true ;
        } catch ( e ) {
            try {
                editor.execCommand('error');
            } catch ( e ) {
                alert('控件异常');
            }
            return false;
        }
    } else {
        oNode.setAttribute('title', $G('orgname').value); 
        oNode.setAttribute('size',gSize);
        if( gWidth != '' ) {
			oNode.style.width = gWidth + 'px';
			oNode.setAttribute('orgwidth',gWidth );
		}
        // Remove all options.
        while ( oNode.options.length > 0 ){
            oNode.remove(0) ;
        }
        for ( var i = 0 ; i < $G('orglist').options.length ; i++ ) {
            var sText    = $G('orglist').options[i].value ;
            if ( sText.length == 0 ) {
                sText = sText ;
            }
            var oOption = fnAddComboOption( oNode, sText, sText ) ;
            if ( sText == $G('orgvalue').innerHTML ) {
                fnSetAttribute( oOption, 'selected', 'selected' ) ;
                oOption.selected = true ;
            }
        }
        delete UE.plugins[thePlugins].editdom; 
    }
};