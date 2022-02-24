from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel
from starlette.responses import FileResponse

# custom file filters
from cussword_filter_dependencies.filters import *

app = FastAPI()

# landing page
@app.get("/")
def index():
    return FileResponse("landing_page/index.html")

# cussword filter API
@app.get("/cussword-filter/{article}")
def filter_article(article : str):
    final_str = replace_with_strike(article)
    return {
            "status":"pass",
            "filtered-text":final_str
        }
    