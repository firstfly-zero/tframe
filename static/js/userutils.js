// 请求用户信息
$(function () {
    var recordsId=0;
    $('button[type=submit]').click(function () {
        $.ajax({
            type:'GET',
            url:'/getuserinfo',
            data:{
                userId:$('#search_info_userId').val(),
                host:$('input[name="host"]',parent.document).val(),
                userName:$('#search_info_userName').val()
            },
            success:function (result) {
                //插入行记录
                $('input[name="account"]').innerText=result.data.account;
                var resElements="<tr>\n" +
                    "<td valign='top'>\n" +
                    "    <input name='id' size='3' value='"+recordsId+"' style='border:0'/>\n"  +
                    "</td>\n" +
                    "<td valign='top'>\n" +
                    "    <input name='userName' size='9' style='border:0' value='"+result.data.userName+"'/>"  +
                    "</td>" +
                    "<td valign='top'>" +
                    "    <input name='userId' size='9' style='border:0' value='"+result.data.userId+"'/>"  +
                    "</td>" +
                    "<td valign='top'>" +
                    "    <input name='mobile' size='11' style='border:0' value='"+result.data.mobile+"'/>"  +
                    "</td>" +
                    "<td valign='top'>" +
                    "    <input name='account' size='6' style='border:0' value='"+result.data.account+"'/>"  +
                    "</td>" +
                    //用户下患者信息
                    "<td valign='top'>" +
                    // 表格中嵌套表格
                    "<table id='patientsinfo' class='layui-table' width=''>" +
                    "<thead>" +
                    "<tr class='patientInfo"+recordsId+"'>" +
                    "<th>ID</th>" +
                    "<th>患者名</th>" +
                    "<th>手机号</th>" +
                    "</tr>" +
                    "</thead>" +
                    "</table>"+
                    "</td>" +
                    //用户下订单信息
                    "<td valign='top'>" +
                    // 表格中嵌套表格
                    "<table id='ordersinfo' class='layui-table' width=''>" +
                    "<thead>" +
                    "<tr class='orderInfo"+recordsId+"'>" +
                    "<th>basicId</th>" +
                    "<th>状态</th>" +
                    "<th>医生</th>" +
                    "<th>类型</th>" +
                    "</tr>" +
                    "</thead>" +
                    "</table>"+
                    "</td>" +
                    "</tr>";
                $(".infohead").after(resElements);
                // 插入患者信息
                var i=0;
                while (result.data.patients[i]&&i<5){
                    var patientInfo="<tr>" +
                        "<td>" +
                        "    <input name='patientId' size='6' value='"+result.data.patients[i].patientId+"' style='border:0'/>"  +
                        "</td>" +
                        "<td>" +
                        "    <input name='patientName' size='4' style='border:0' value='"+result.data.patients[i].patientName+"'/>"  +
                        "</td>" +
                        "<td>" +
                        "    <input name='patientMobile' size='9' style='border:0' value='"+result.data.patients[i].patientMobile+"'/>"  +
                        "</td>" +
                        "</tr>";
                    $(".patientInfo"+recordsId).after(patientInfo);
                    i++;
                }
                //插入订单信息
                var j=0;
                while (result.data.orders[j]&&j<5){
                    var orderInfo="<tr>" +
                        "<td>" +
                        "    <input name='basicOrderId' size='5' value='"+result.data.orders[j].basicOrderId+"' style='border:0'/>"  +
                        "</td>" +
                        "<td>" +
                        "    <input name='orderStatus' size='4' style='border:0' value='"+result.data.orders[j].orderStatus+"'/>"  +
                        "</td>" +
                        "<td>" +
                        "    <input name='spaceId' size='5' style='border:0' value='"+result.data.orders[j].spaceId+"'/>"  +
                        "</td>" +
                        "<td>" +
                        "    <input name='type' size='9' style='border:0' value='"+result.data.orders[j].type+"'/>"  +
                        "</td>" +
                        "</tr>";
                    $(".orderInfo"+recordsId).after(orderInfo);
                    j++;
                }
                console.log(result.data.account);
                recordsId++;
            },
            error:function (e) {
                console.log(e.status);
            }
        });
    });
});
