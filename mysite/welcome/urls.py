from django.urls import path

from . import views
#This works as an expansion from /welcome/
urlpatterns = [
    path('', views.index, name='index'),
    path('buysell', views.buysell, name='buysell'),
    path('buy', views.buy, name='buy'),
    path('sell', views.sell, name='sell'),
    path('tryon', views.tryon, name='tryon'),
    path('payment',views.payment, name='payment'),
    path('taptopay',views.taptopay, name='taptopay'),
    path('successful',views.successful, name="successful"),
    path('thanks',views.thanks, name="thanks"),
    path('sell',views.sell,name="sell"),
    path('acceptoffer',views.acceptoffer,name="acceptoffer")
]