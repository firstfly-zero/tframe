from django.urls import path,include
from re_cases import views
urlpatterns = [
    # 父级路由 recases
    # 页面路由
    path('index',views.page_index),
    path('console',views.page_console),
    path('uitask',views.page_uitask),
    # 功能路由
    path('getcases',views.get_recases),
    path('getuitasks',views.get_uitasks),
]