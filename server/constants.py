from enum import Enum


class Config(Enum):
    VERSION = 'v1'
    API_PREFIX = f'/api/{VERSION}'
