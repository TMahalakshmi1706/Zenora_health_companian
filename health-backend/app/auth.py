# auth.py

def hash_password(password: str):
    return password   # NO HASHING

def verify_password(plain: str, stored: str):
    return plain == stored   # SIMPLE CHECK

def create_token(data: dict):
    return "dummy-token"
