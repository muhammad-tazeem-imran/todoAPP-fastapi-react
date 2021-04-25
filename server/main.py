from fastapi import FastAPI

from models import Todo
from utils import prefixVersion


app = FastAPI();


@app.get(prefixVersion('/todos'))
def list_todos():
    return []


@app.get(prefixVersion('/todos/{{todo_id}}'))
def get_todo(todo_id: int):
    return {'id': todo_id, 'title': 'First', 'description': 'Something'}


@app.post(prefixVersion('/todos/'))
def create_todo(todo: Todo):
    return todo


@app.delete(prefixVersion('/todos/{{todo_id}}'))
def delete_todo(todo_id: int):
    return todo_id


@app.patch(prefixVersion('/todos/{{todo_id}}'))
def delete_todo(todo_id: int):
    return todo_id

