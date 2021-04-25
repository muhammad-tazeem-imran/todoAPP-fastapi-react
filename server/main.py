from fastapi import FastAPI, Depends

from sqlalchemy.orm import Session
from schemas import TodoSchema
from database import get_db
from models import Todo

from utils import prefixVersion


app = FastAPI();


@app.get(prefixVersion('/todos/'))
def list_todos(db : Session = Depends(get_db)):
    return db.query(Todo).all()


@app.get(prefixVersion('/todos/{{todo_id}}'))
def get_todo(todo_id: int, db : Session = Depends(get_db)):
    return db.query(Todo).filter(Todo.id == todo_id).first()


@app.post(prefixVersion('/todos/'))
def create_todo(todo: TodoSchema, db : Session = Depends(get_db)):
    to_create = Todo(
        title=todo.title,
        description=todo.description
    )

    db.add(to_create)
    db.commit()

    return {
        'success': True,
        'created_id': to_create.id
    }


@app.delete(prefixVersion('/todos/{{todo_id}}'))
def delete_todo(todo_id: int, db : Session = Depends(get_db)):
    to_delete = db.query(Todo).filter(Todo.id == todo_id).first()
    db.delete(to_delete)
    db.commit()
    return todo_id


@app.patch(prefixVersion('/todos/{{todo_id}}'))
def update_todo(todo_id: int, todo: TodoSchema, db : Session = Depends(get_db)):
    to_update = db.query(Todo).filter(Todo.id == todo_id).first()
    to_update.title = TodoSchema.title
    to_update.description = TodoSchema.description

    db.commit()
