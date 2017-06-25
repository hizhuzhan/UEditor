# UEditor 配置一个带有插件的Deno Update on 2017.6.25
### 创建Demo文件
##### UEditor路径：github.com/hizhuzhan/UEditor/js/ueditor/*
* 创建Demo.html并引入js文件
```javascript
<!-- 配置文件 config.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 ueditor.all.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.all.js"></script>
<!-- zh-cn.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/lang/zh-cn/zh-cn.js"></script>
<!--Fromdesign扩展-->
<script type="text/javascript" charset="utf-8" src="js/ueditor/Formdesign/leipi.Formdesign.v4.js"></script>
```
* 加载编辑器的容器
```javascript
<script id="container" name="content" type="text/plain">
    这里写你的初始化内容
</script>
```
* 实例化编辑器并配置编辑器（更多其他参数，请参考ueditor.config.js中的配置项）
```javascript
var leipiEditor = UE.getEditor('myFormdesign',{
            //是否在toolbars显示，表单设计器的图标 
            toolleipi:true,
            //配置显示的按钮
            toolbars:[['fullscreen', 'source', '|', 'undo', 'redo', '|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',  'removeformat', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist','|', 'fontfamily', 'fontsize', '|', 'indent', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',  'link', 'unlink',  '|',  'horizontal',  'spechars',  'wordimage', '|', 'inserttable', 'deletetable',  'mergecells',  'splittocells']],
            //编辑器的表单名称   
            textarea: 'design_content',
            //关闭字数统计
            wordCount:false,
            //关闭elementPath
            elementPathEnabled:false,
            //默认的编辑区域高度
            initialFrameHeight:400,
            //默认的编辑区域宽度
            initialFrameWidth:1000
        });
```

