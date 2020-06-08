from django.urls import path,include
from tester_tools.views import xgshangpinka
urlpatterns = [
    path('open',xgshangpinka.open)
]