from datetime import datetime

from sqlalchemy import Integer, String, DateTime
from sqlalchemy.sql.expression import null
from sqlalchemy.sql.schema import Column
from sqlalchemy.orm.attributes import InstrumentedAttribute

from database import Base, get_db


class Todo(Base):
    __tablename__ = 'todos'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)

