from constants import Config

def prefixVersion(url):
    return f'{Config.API_PREFIX.value}{url}'
