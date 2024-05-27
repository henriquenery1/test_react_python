from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
    allow_origins=["http://localhost:3000"]
)

@app.get("/")
def read_root():
    return {"hello": "World"}

@app.get('/get_data')
def get_data():
    return {'body':'Hello world!'}