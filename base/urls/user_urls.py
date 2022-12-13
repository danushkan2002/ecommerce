from ..views import user_views as views
from django.urls import path

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('profile/update/', views.updateUserProfile, name='update-user-profile'),
    path('register/', views.register, name='register'),
    path('', views.getUsers, name="users"),

]
