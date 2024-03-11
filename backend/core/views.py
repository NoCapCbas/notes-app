from django.http import JsonResponse


def get_endpoints(request):
    endpoints = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },             
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },             
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body':''},
            'description': 'Returns an array of notes'
        },             
        {
            'Endpoint': '/notes/id/update/',
            'method': 'POST',
            'body': {'body':''},
            'description': 'Updates an existing note with data sent in post request'
        },             
        {
            'Endpoint': '/notes/id/delete',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes an existing note'
        },                  

    ]
    return JsonResponse(endpoints, safe=False)
