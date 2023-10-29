# Create your views here.
import requests

def add_todo_to_db(task):
    url = "https://ozkvr592j8.execute-api.ap-south-1.amazonaws.com/addTodo"
    payload = {'task': task}
    requests.post(url, json=payload)

def get_all_todos_from_db():
    url = "https://ozkvr592j8.execute-api.ap-south-1.amazonaws.com/listTodos"
    response = requests.get(url)
    return response.json()

def search_todos_in_db(query):
    url = f"https://your-api-gateway-url/searchTodos?query={query}"
    response = requests.get(url)
    return response.json()