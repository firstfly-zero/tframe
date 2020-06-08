// 请求医生信息
$(function () {
    $('button[name=add_doctor]').click(function () {
        $.ajax({
            type:'GET',
            url:'/adddoctor',
            data:{
                ip:$('input[name="ip"]').val(),
                doctorname:$('input[name="doctorname"]').val(),
            },
            success:function (result) {
                $('input[name="doctorId"]').attr("value",result);
                $('button[type=submit]').click();
            },
            error:function (e) {
                console.log(e.status);
            }
        })
    });
    var recordsId=0;
    $('button[type=submit]').click(function () {
        $.ajax({
            type:'GET',
            url:'/getdoctorinfo',
            data:{
                doctorId:$('#search_info_doctorId').val(),
                databaseIp:$('input[name="databaseIp"]',parent.document).val(),
                spaceId:$('#search_info_spaceId').val()
            },
            success:function (result) {
                //插入行记录
                $('input[name="account"]').innerText=result.data.account;
                var resElements="<tr>\n" +
                    "<td style='display:none'>\n" +
                    "    <input name='id' size='3' value='"+recordsId+"' style='border:0'/>\n"  +
                    "</td>\n" +
                    "<td valign='top'>\n" +
                    "    <input name='doctorId' size='6' style='border:0' value='"+result.data.doctorId+"'/>\n"  +
                    "    <input name='primaryId' size='6' style='border:0' value='"+result.data.primaryId+"'/>"  +
                    "</td>" +
                    "<td valign='top'>" +
                    "    <input name='commonName' size='12' style='border:0' value='"+result.data.commonName+"'/>"  +
                    "</td>" +
                    "<td valign='top'>" +
                    "    <input name='factory' size='12' style='border:0' value='"+result.data.factory+"'/>"  +
                    "</td>" +
                    "<td valign='top'>" +
                    "    <input name='level' size='1' style='border:0' value='"+result.data.level+"'/>"  +
                    "</td>" +
                    //医生下契约信息
                    "<td>" +
                    // 表格中嵌套表格
                    "<table id='contractsinfo' class='layui-table' width=''>" +
                    "<thead>" +
                    "<tr class='contractInfo"+recordsId+"'>" +
                    "<th>类型</th>" +
                    "<th>价格</th>" +
                    "</tr>" +
                    "</thead>" +
                    "</table>"+
                    "</td>" +
                    "</tr>";
                $(".infohead").after(resElements);
                // 插入契约信息
                var i=0;
                while (result.data.contracts[i]){
                    var contractInfo="<tr>" +
                        "<td>" +
                        "    <input name='type' size='24' value='"+result.data.contracts[i].type+"' style='border:0'/>"  +
                        "</td>" +
                        "<td>" +
                        "    <input name='price' size='3' style='border:0' value='"+result.data.contracts[i].price+"'/>"  +
                        "</td>" +
                        "</tr>";
                    $(".contractInfo"+recordsId).after(contractInfo);
                    i++;
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
