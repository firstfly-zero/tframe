from django.test import TestCase
import random
from re_cases import utils
# Create your tests here.
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
}

# print(list(cases.keys()))
ids=((123,),(321,),(1234567,))
res = ""
for i in ids:
    print(i)
    res = res +str(i[0])+","

print(res)