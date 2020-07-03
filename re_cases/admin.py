from django.contrib import admin

# Register your models here.
from re_cases.models import RegressionCase
@admin.register(RegressionCase)
class MembersAdmin(admin.ModelAdmin):
    pass