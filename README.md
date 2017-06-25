# UEditor 配置一个带有插件的Deno 
## 内容目录
1. [创建Demo文件(Update on 2017.6.25)](#创建Demo文件)
    1.1[创建Demo.html并引入js文件](#创建Demo.html并引入js文件)
    1.2[加载编辑器的容器](#加载编辑器的容器)
    1.3[实例化编辑器并配置编辑器](实例化编辑器并配置编辑器（更多其他参数，请参考ueditor.config.js中的配置项）)
    1.4[在浏览器上打开demo.html](#在浏览器上打开demo.html)
2. [为demo.html添加表单设计器（leipi.Formdesign) (Update on 2017.6.25)](#为demo.html添加表单设计器（leipi.Formdesign）)
    2.1[引入Fromdesign扩展文件](#引入Fromdesign扩展文件)
    2.2[添加文本框按钮（以文本框为例）](#添加文本框按钮（以文本框为例）)
    2.3[触发拓展](#触发拓展)

## 创建Demo文件
##### UEditor路径：github.com/hizhuzhan/UEditor/js/ueditor/*
* 创建Demo.html并引入js文件
```javascript
<!-- 配置文件 config.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 ueditor.all.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.all.js"></script>
<!-- zh-cn.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/lang/zh-cn/zh-cn.js"></script>
```
* 加载编辑器的容器
```javascript
<script id="container" name="content" type="text/plain">
    这里写你的初始化内容
</script>
```
* 实例化编辑器并配置编辑器（更多其他参数，请参考ueditor.config.js中的配置项）
```javascript
<script type="text/javascript">
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
</script>
```
```javascript
//完整按钮列表
toolbars: [
    [
        'anchor', //锚点
        'undo', //撤销
        'redo', //重做
        'bold', //加粗
        'indent', //首行缩进
        'snapscreen', //截图
        'italic', //斜体
        'underline', //下划线
        'strikethrough', //删除线
        'subscript', //下标
        'fontborder', //字符边框
        'superscript', //上标
        'formatmatch', //格式刷
        'source', //源代码
        'blockquote', //引用
        'pasteplain', //纯文本粘贴模式
        'selectall', //全选
        'print', //打印
        'preview', //预览
        'horizontal', //分隔线
        'removeformat', //清除格式
        'time', //时间
        'date', //日期
        'unlink', //取消链接
        'insertrow', //前插入行
        'insertcol', //前插入列
        'mergeright', //右合并单元格
        'mergedown', //下合并单元格
        'deleterow', //删除行
        'deletecol', //删除列
        'splittorows', //拆分成行
        'splittocols', //拆分成列
        'splittocells', //完全拆分单元格
        'deletecaption', //删除表格标题
        'inserttitle', //插入标题
        'mergecells', //合并多个单元格
        'deletetable', //删除表格
        'cleardoc', //清空文档
        'insertparagraphbeforetable', //"表格前插入行"
        'insertcode', //代码语言
        'fontfamily', //字体
        'fontsize', //字号
        'paragraph', //段落格式
        'simpleupload', //单图上传
        'insertimage', //多图上传
        'edittable', //表格属性
        'edittd', //单元格属性
        'link', //超链接
        'emotion', //表情
        'spechars', //特殊字符
        'searchreplace', //查询替换
        'map', //Baidu地图
        'gmap', //Google地图
        'insertvideo', //视频
        'help', //帮助
        'justifyleft', //居左对齐
        'justifyright', //居右对齐
        'justifycenter', //居中对齐
        'justifyjustify', //两端对齐
        'forecolor', //字体颜色
        'backcolor', //背景色
        'insertorderedlist', //有序列表
        'insertunorderedlist', //无序列表
        'fullscreen', //全屏
        'directionalityltr', //从左向右输入
        'directionalityrtl', //从右向左输入
        'rowspacingtop', //段前距
        'rowspacingbottom', //段后距
        'pagebreak', //分页
        'insertframe', //插入Iframe
        'imagenone', //默认
        'imageleft', //左浮动
        'imageright', //右浮动
        'attachment', //附件
        'imagecenter', //居中
        'wordimage', //图片转存
        'lineheight', //行间距
        'edittip ', //编辑提示
        'customstyle', //自定义标题
        'autotypeset', //自动排版
        'webapp', //百度应用
        'touppercase', //字母大写
        'tolowercase', //字母小写
        'background', //背景
        'template', //模板
        'scrawl', //涂鸦
        'music', //音乐
        'inserttable', //插入表格
        'drafts', // 从草稿箱加载
        'charts', // 图表
    ]
]
```
* 在浏览器上打开demo.html<br>
![demo.html](https://github.com/hizhuzhan/UEditor/raw/master/img/demo.png)
## 为demo.html添加表单设计器（leipi.Formdesign）
* 引入Fromdesign扩展文件
```javascript
<!--Fromdesign扩展-->
<script type="text/javascript" charset="utf-8" src="js/ueditor/Formdesign/leipi.Formdesign.v4.js"></script>
```
* 添加文本框按钮（以文本框为例）
```javascript
<button type="button" onclick="leipiFormDesign.exec('text');" class="btn btn-info">文本框</button>
```
* 触发拓展
#####以文本框威为例，上面我们实例化了一个Ueditor为leipiEditor，触发扩展只需要调用Ueditor方法execCommand。
```javascript
/*执行扩展 UE.plugins[method] 弹出iframe dialog。
method 为方法参数，文本框按钮点击后将'text'参数传入此方法
详情参见UEditor/js/formdesign/leipi.Formdesign.v4.js  AND  text.html
*/
var leipiFormDesign = {
     /*执行控件*/
     exec : function (method) {
          leipiEditor.execCommand(method);
}
```


