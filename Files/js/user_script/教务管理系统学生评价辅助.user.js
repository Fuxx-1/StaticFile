// ==UserScript==
// @name         教务管理系统学生评价辅助
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  教务管理系统学生评价脚本,2022-1-6测试成功。
// @author       Fuxx-1@Github
// @match        http://www.zfjw.xupt.edu.cn/jwglxt/xspjgl/*
// @icon         http://www.zfjw.xupt.edu.cn/jwglxt/logo/favicon.ico?t=1641435622412
// ==/UserScript==

(function() {
    'use strict';
    window.onload=function(){
        addButton();
        document.getElementsByClassName("studentAutoEvaluate")[0].onclick = function studentAutoEvaluate() {
            var element = document.getElementsByClassName("input-xspj");
            for (var i = 0; i < element.length; i += 5) {
                if (Math.floor(Math.random() * 2)) {
                    element[i].getElementsByTagName("label")[0].click();
                } else {
                    element[i + 3].getElementsByTagName("label")[0].click();
                }
                //[0].getElementsByTagName("label")[0].click();
            }
            document.body.scrollIntoView({behavior: 'instant'});
        }
        document.getElementsByClassName("autoSubmit")[0].onclick = function studentAutoEvaluate() {
            document.getElementById("btn_xspj_tj").click();
        }
        document.getElementsByClassName("autoSave")[0].onclick = function studentAutoEvaluate() {
            document.getElementById("btn_xspj_bc").click();
        }
    }
    function addButton() {
        // 提示
        console.log("教务管理系统学生评价辅助正在启动...");
        // 群组
        var group = document.createElement("div");
        group.style = "position: absolute; left: 50px; top: 60px;";
        // 自动评价
        var button = document.createElement("button");
        button.innerText = "自动评价";
        button.className = "studentAutoEvaluate btn btn-info"
        group.appendChild(button);
        // 提交
        var save = document.createElement("button");
        save.style = "margin-left:10px;";
        save.innerText = "保存";
        save.className = "autoSave btn btn-warning"
        group.appendChild(save);
        // 提交
        var submit = document.createElement("button");
        submit.style = "margin-left:10px;";
        submit.innerText = "提交";
        submit.className = "autoSubmit btn btn-warning"
        group.appendChild(submit);
        // 加入页面
        document.body.appendChild(group);
        // 提示
        console.log("教务管理系统学生评价辅助启动完毕");
    }
})();