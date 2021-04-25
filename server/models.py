from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class Todo(BaseModel):
    id: int
    title: str
    description: Optional[str] = None

    created_at: datetime
    modified_at: datetime
