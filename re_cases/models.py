from django.db import models

# Create your models here.
class RegressionCase(models.Model):
    id = models.BigIntegerField(primary_key=True)
    case_name = models.CharField(max_length=50)
    business_module = models.CharField(max_length=50)
    precondition = models.CharField(max_length=500)
    steps = models.CharField(max_length=1000)
    expected_result = models.CharField(max_length=500)
    terminals = models.CharField(max_length=20)
    priority = models.CharField(max_length=20)
    auto_relations = models.CharField(max_length=20)

    class Meta:
        managed = True
        db_table = 'regression_case'