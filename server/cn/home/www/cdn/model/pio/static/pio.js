/* ----

# Pio Plugin
# By: Dreamer-Paul
# Last Update: 2019.2.13

一个支持更换 Live2D 模型的 Typecho 插件。

本代码为奇趣保罗原创，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://paugram.com

---- */

var Paul_Pio = function (prop) {
    var current = {
        idol: 0,
        menu: document.querySelector(".pio-container .pio-action"),
        canvas: document.getElementById("pio"),
        body: document.getElementsByClassName("pio-container")[0],
        root: document.location.protocol +'//' + document.location.hostname +'/'
    };

    /* - 方法 */
    var modules = {
        // 更换模型
        idol: function () {
            current.idol < (prop.model.length - 1) ? current.idol++ : current.idol = 0;
            return current.idol;
        },
        // 创建内容
        create: function (tag, prop) {
            var e = document.createElement(tag);
            if(prop.class) e.className = prop.class;
            return e;
        },
        // 随机内容
        rand: function (arr) {
            return arr[Math.floor(Math.random() * arr.length + 1) - 1];
        },
        // 创建对话框方法
        render: function (text) {
            if(text.constructor === Array){
                dialog.innerText = modules.rand(text);
            }
            else if(text.constructor === String){
                dialog.innerText = text;
            }
            else{
                dialog.innerText = "输入内容出现问题了 X_X";
            }

            dialog.classList.add("active");

            clearTimeout(this.t);
            this.t = setTimeout(function () {
                dialog.classList.remove("active");
            }, 3000);
        },
        // 移除方法
        destroy: function () {
            current.body.parentNode.removeChild(current.body);
        }
    };

    var elements = {
        home: modules.create("span", {class: "pio-home"}),
        skin: modules.create("span", {class: "pio-skin"}),
        info: modules.create("span", {class: "pio-info"}),
        night: modules.create("span", {class: "pio-night"}),
        close: modules.create("span", {class: "pio-close"})
    };

    var dialog = modules.create("div", {class: "pio-dialog"});
    current.body.appendChild(dialog);

    /* - 提示操作 */
    var action = {
        // 欢迎
        welcome: function () {
            if(document.referrer !== "" && document.referrer.indexOf(current.root) === -1){
                var referrer = document.createElement('a');
                referrer.href = document.referrer;
                prop.content.referer ? modules.render(prop.content.referer.replace(/%t/, "“" + referrer.hostname + "”")) : modules.render("欢迎来自 “" + referrer.hostname + "” 的朋友！");
            }
            else if(prop.tips){
                var text, hour = new Date().getHours();

                if (hour > 22 || hour <= 5) {
                    text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
                }
                else if (hour > 5 && hour <= 8) {
                    text = '早上好！';
                }
                else if (hour > 8 && hour <= 11) {
                    text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
                }
                else if (hour > 11 && hour <= 14) {
                    text = '中午了，工作了一个上午，现在是午餐时间！';
                }
                else if (hour > 14 && hour <= 17) {
                    text = '午后很容易犯困呢，今天的运动目标完成了吗？';
                }
                else if (hour > 17 && hour <= 19) {
                    text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
                }
                else if (hour > 19 && hour <= 21) {
                    text = '晚上好，今天过得怎么样？';
                }
                else if (hour > 21 && hour <= 23) {
                    text = '已经这么晚了呀，早点休息吧，晚安~';
                }
                else{
                    text = "见鬼了吧，哈哈";
                }

                modules.render(text);
            }
            else{
                prop.content.welcome ? modules.render(prop.content.welcome) : modules.render("欢迎来到本站！");
            }
        },
        // 文章
        article: function () {
            if(prop.selector.articles){
                var a = document.querySelectorAll(prop.selector.articles), b;
                prop.content.article ? b = prop.content.article : b = "想阅读 %t 吗？";

                for(var i = 0; i < a.length; i++){
                    a[i].onmouseover = function () {
                        modules.render(b.replace(/%t/, "“" + this.innerText + "”"));
                    }
                }
            }
        },
        // 触摸
        touch: function () {
            if(prop.content.touch){
                current.canvas.onclick = function () {
                    modules.render(prop.content.touch);
                }
            }
            else{
                current.canvas.onclick = function () {
                    modules.render(["你在干什么？", "再摸我就报警了！⌇●﹏●⌇", "啊好舒服喔~", "你够了喔！","你只有四分之一的几率会遇到我哦~","鼠…鼠标放错地方了~"]);
                }
            }
        },
        // 右侧按钮
        buttons: function () {
            // 返回首页
            elements.home.onclick = function () {
                //location.href = current.root;
                $("html,body").animate({scrollTop:0},500);
            };
            elements.home.onmouseover = function () {
                prop.content.home ? modules.render(prop.content.home) : modules.render("点击这里回到顶部");
            };
            current.menu.appendChild(elements.home);

            // 更换模型
            elements.skin.onclick = function () {
                loadlive2d("pio", prop.model[modules.idol()]);
                prop.content.skin && prop.content.skin[1] ? modules.render(prop.content.skin[1]) : modules.render("新衣服真漂亮~");
            };
            elements.skin.onmouseover = function () {
                prop.content.skin && prop.content.skin[0] ? modules.render(prop.content.skin[0]) : modules.render("想看看我的新衣服吗？");
            };
            if(prop.model.length > 1) current.menu.appendChild(elements.skin);

            // 关于我
            elements.info.onclick = function () {
                prop.content.link ? window.open(prop.content.link) : window.location.href= "https://video.yimian.xyz";
            };
            elements.info.onmouseover = function () {
                modules.render("快来寻找我的踪影吧o(￣▽￣)ｄ");
            };
            current.menu.appendChild(elements.info);

            // 夜间模式
            if(prop.night){
                elements.night.onclick = function () {
                    eval(prop.night);
                };
                elements.night.onmouseover = function () {
                    modules.render("夜间点击这里可以保护眼睛呢");
                };
                current.menu.appendChild(elements.night);
            }

            // 关闭看板娘
            elements.close.onclick = function () {
                modules.destroy();
            };
            elements.close.onmouseover = function () {
                prop.content.close ? modules.render(prop.content.close) : modules.render("QWQ 下次再见吧~");
            };
            current.menu.appendChild(elements.close);
            document.cookie = "posterGirl=false;" + "path=/";
        },
        custom: function () {
            for(var i = 0; i < prop.content.custom.length; i++){
                var e = document.querySelectorAll(prop.content.custom[i].s);
                var c = prop.content.custom[i].t;

                if(e[0]){
                    for(var j = 0; j < e.length; j++){
                        e[j].onmouseover = function () {
                            modules.render(c);
                        }
                    }
                }
            }
        }
    };

    /* - 运行 */
    var begin = {
        static: function () {
            action.welcome(); action.article();
            current.body.classList.add("static");
        },
        fixed: function () {
            action.welcome(); action.article(); action.touch(); action.buttons();
        },
        draggable: function () {
            action.welcome(); action.article(); action.touch(); action.buttons();

            var body = current.body;
            body.onmousedown = function () {
                var location = {
                    x: event.clientX - this.offsetLeft,
                    y: event.clientY - this.offsetTop
                };

                function move(e) {
                    body.classList.add("active");
                    body.classList.remove("right");
                    if(event.clientX - location.x>230)
                    	body.style.left = (event.clientX - location.x) + 'px';
                    body.style.top  = (event.clientY - location.y) + 'px';
                }

                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", function () {
                    body.classList.remove("active");
                    document.removeEventListener("mousemove", move);
                });
            };
        }
    };

    // 运行
    this.init = function () {
        if(prop.hidden === true && window.innerWidth < 400){
            current.body.classList.add("hidden");
        }
        else{
            switch (prop.mode){
                case "static": begin.static(); break;
                case "fixed":  begin.fixed(); break;
                case "draggable": begin.draggable(); break;
            }

            if(prop.content.custom) action.custom();

            loadlive2d("pio", prop.model[0]);
        }
    };
    this.init();
};

// 请保留版权说明
if (window.console && window.console.log) {
    console.log("%c Pio %c https://paugram.com ","color: #fff; margin: 1em 0; padding: 5px 0; background: #673ab7;","margin: 1em 0; padding: 5px 0; background: #efefef;");
}