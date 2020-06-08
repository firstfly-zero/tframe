from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.clickjacking import xframe_options_exempt
from re_cases import utils
import random
# Create your views here.
def page_index(request):
    return render(request, "re_cases/index.html")
@xframe_options_exempt
def page_uitask(request):
    return render(request, "re_cases/uitask.html")
@xframe_options_exempt
def page_console(request):
    return render(request, "re_cases/console.html")
cases = {
    str(random.randint(0, 100)): {
        "前置条件": utils.get_hans(random.randint(1, 100)),
        "操作步骤": utils.get_hans(random.randint(1, 100)),
        "预期结果": utils.get_hans(random.randint(1, 100)),
    },
    str(random.randint(0, 100)): {
        "前置条件": utils.get_hans(random.randint(1, 100)),
        "操作步骤": utils.get_hans(random.randint(1, 100)),
        "预期结果": utils.get_hans(random.randint(1, 100)),
    },
    str(random.randint(0, 100)): {
        "前置条件": utils.get_hans(random.randint(1, 100)),
        "操作步骤": utils.get_hans(random.randint(1, 100)),
        "预期结果": utils.get_hans(random.randint(1, 100)),
    },
}

# 获取回归用例的假接口
def get_recases(request):
    return JsonResponse(cases)

# 设置回归用例任务状态的假接口
def set_recases(request):
    caseid = request.POST.get("caseid")
    status = request.POST.get("status")
    print(caseid,status)
    return HttpResponse("success")

uitasks = [
    {
        "caseid": list(cases.keys())[0],
        "caseinfo": str(cases[list(cases.keys())[0]]),
        "owner": "jiayifei",
        "uicaseid": 12,
        "status": "已完成"
    },
    {
        "caseid": list(cases.keys())[1],
        "caseinfo": str(cases[list(cases.keys())[1]]),
        "owner": "jiayifei",
        "uicaseid": None,
        "status": "进行中"
    },
    {
        "caseid": list(cases.keys())[2],
        "caseinfo": str(cases[list(cases.keys())[2]]),
        "owner":None,
        "uicaseid": None,
        "status": "未开始"
    }
]
def get_uitasks(request):
    """
    获取ui自动化任务接口
    :param request: uitaskid
    :return: uitasks
    """
    res = {
        "code": 0,
        "msg": "",
        "count": 3,
        "data": uitasks
    }
    return JsonResponse(res)

# 定时脚本更新任务状态
def update_task(request):
    """
    自定义逻辑
    :param request:
    :return:
    """
    return HttpResponse("success")

