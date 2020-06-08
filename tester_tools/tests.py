from django.test import TestCase

# Create your tests here.
# from selenium import webdriver
#
# driver = webdriver.Chrome()
# driver.get("https://www.baidu.com")
# driver.quit()

import pymysql
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# appium服务监听地址
from appium import webdriver
from time import sleep

desired_caps = {}
desired_caps['platformName'] = 'Android'
desired_caps['platformVersion'] = '10.0'
desired_caps['deviceName'] = '4bc3ef4 device'
desired_caps['app'] = '/Users/bytedance/Downloads/VideoArticle_update_v4.3.8_4233524.apk'
# desired_caps['appActivity'] = 'com.jifen.qkbase.view.activity.JumpActivity'
desired_caps['noReset'] = 'true'

print("starting...")

driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
# driver = webdriver.webdriver()

print("ending...")

# {
#   "deviceName": "emulator-5554",
#   "platformVersion": "6.0",
#   "app": "E:\\broswer\\Haodf.apk",
#   "platformName": "Android",
#   "noReset": true
# }
