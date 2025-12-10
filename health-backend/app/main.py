from fastapi import FastAPI
from app.routers import users

app = FastAPI(title="Health App Backend")

app.include_router(users.router)

@app.get("/")
def home():
    return {"message": "Backend Running"}
