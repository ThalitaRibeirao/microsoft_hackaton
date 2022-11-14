from django.contrib import admin
from .models import MicrosoftHackaton

class MicrosoftHackatonAdmin(admin.ModelAdmin):
  list_display = ('title', 'description', 'completed')
# Register your models here.

admin.site.register(MicrosoftHackaton, MicrosoftHackatonAdmin)