
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.template import loader
import json
from django.http import JsonResponse


class HttpResponseThen(HttpResponse): 
    def __init__(self, data, then_callback, **kwargs):
        super().__init__(data, **kwargs)
        self.then_callback = then_callback

    def close(self):
        super().close()
        return_value = self.then_callback


@csrf_exempt
def index(request):
    print(request)
    template = loader.get_template('calc/index.html')
    return HttpResponse(template.render())

@csrf_exempt
def buy(request):
    global body
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    #Делаем что-то с json. возвращаем словарь
    #{'tokenSale': , 'tokensHave': , 'tokensToSale': , 'tokenBuy': }

    some_dict={'discont': str(122), 'value': str(122)}
    return JsonResponse(some_dict)


@csrf_exempt
def show(request):
    global body
    print(body)
    #asasasa

    #{'discont': ,'value': }
    some_dict={'discont': str(122), 'value': str(122)}
    return JsonResponse(some_dict)
    
global body