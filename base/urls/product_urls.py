from ..views import product_views as views
from django.urls import path

urlpatterns = [
    path('', views.getProducts, name="products"),
    path('<int:pk>/', views.getProduct, name="product"),
]
