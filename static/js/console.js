$(function () {
    function getenvinfo(ip){
        if (ip.length>8){
            $.ajax({
                type:'GET',
                url:'/getEnvinfo',
                data:{
                    ip:ip
                },
                success:function (result) {
                    console.log(result)
                    $('#cpuusage').find("span")[0].textContent=result.cpuusage
                    $('#cpuusage').attr("style","width: "+result.cpuusage)
                    $('#romusage').find("span")[0].textContent=result.romusage
                    $('#romusage').attr("style","width: "+result.romusage)
                    $('#ramusage').find("span")[0].textContent=result.ramusage
                    $('#ramusage').attr("style","width: "+result.ramusage)
                },
                error:function (e) {
                    console.log(e.status);
                }
            });
        }
    }
    $('#ip').on('blur',function (){
        getenvinfo($(this).val())
    });
    $('#ip').keyup(function(event){
        if(event.keyCode ==13){
            getenvinfo($(this).val())
        }
    });
    setInterval(function (){
        getenvinfo($('#ip').val())
    },360000)
});
