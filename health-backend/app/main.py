from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import users

app = FastAPI(title="Health App Backend")

# CORS FIX
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allows OPTIONS
    allow_headers=["*"],
)

app.include_router(users.router)

@app.get("/")
def home():
    return {"message": "Backend Running"}
