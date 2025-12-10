from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas, auth

router = APIRouter(prefix="/auth", tags=["Auth"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    user_in_db = db.query(models.User).filter(models.User.email == user.email).first()
    if user_in_db:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_pw = auth.hash_password(user.password)
    new_user = models.User(email=user.email, hashed_password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created", "user": new_user.email}

@router.post("/login")
def login(user: schemas.UserCreate, db: Session = Depends(get_db)):
    user_in_db = db.query(models.User).filter(models.User.email == user.email).first()

    if not user_in_db:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    if not auth.verify_password(user.password, user_in_db.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    token = auth.create_token({"id": user_in_db.id, "email": user.email})

    return {"access_token": token, "token_type": "bearer"}
