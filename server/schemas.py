from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class TodoSchema(BaseModel):
    title: str
    description: Optional[str] = None

