from fastapi import FastAPI, Depends

from sqlalchemy.orm import Session
from schemas import TodoSchema
from database import get_db
from models import Todo


app = FastAPI();


@app.get('/api/v1/todos/')
def list_todos(db : Session = Depends(get_db)):
    return db.query(Todo).all()


@app.get('/api/v1/todos/{{todo_id}}')
def get_todo(todo_id: int, db : Session = Depends(get_db)):
    return db.query(Todo).filter(Todo.id == todo_id).first()


@app.post('/api/v1/todos/')
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


@app.delete('/api/v1/todos/{todo_id}')
def delete_todo(todo_id: int, db : Session = Depends(get_db)):
    to_delete = db.query(Todo).filter(Todo.id == todo_id).first()
    db.delete(to_delete)
    db.commit()
    return todo_id


@app.put('/api/v1/todos/{todo_id}')
def update_todo(todo_id: int, todo: TodoSchema, db : Session = Depends(get_db)):
    to_update = db.query(Todo).filter(Todo.id == todo_id).first()
    to_update.title = todo.title
    to_update.description = todo.description

    db.commit()
