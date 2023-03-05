from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'index.html', {})


# Create your views here.
def buysell(request):
    return render(request, 'buysell.html', {})


def buy(request):
    return render(request, 'buy.html', {})


def sell(request):
    return render(request, 'sell.html', {})


def tryon(request):
    return render(request, 'tryon.html', {})


def payment(request):
    return render(request, 'payment.html', {})


def taptopay(request):
    return render(request, 'taptopay.html', {})


def successful(request):
    return render(request, 'successful.html', {})


def thanks(request):
    return render(request, 'thanks.html', {})


def acceptoffer(request):
    return render(request,'acceptoffer.html')