from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

# we want to return the data of these students, based on the id provided by api user
student = {
    1: {
        "name":"adi",
        "age":"17",
        "year":"year 12"
    }
}

app = FastAPI()

@app.get("/")
def index():
    return {"name": "First Data"}

# to run the api for testing
# we use uvicorn, and the command is
# "  uvicorn cussword_filter_api:app --reload  "

# pen the webpage/docs , to get a good looking UI which lists our apis that we started
# with uvicron

@app.get("/get_student/{student_id}")
def get_student(student_id: int = Path(None, description = "Id of student", gt=0)):
    if student_id in student:
        return student[student_id]
    else:
        return {"No student found"}


# query parameter as it is not added to the url
# looks like google.com?name=John
# when we do Optional[str] = None, the parameter is not required
# optional arguement cannot follow a required argument
# we put the * so that we can put the parameters in any order
# here student_id is a path parameter
@app.get("/get-by-name/{student_id}")
def get_student(*,student_id : int, name : Optional[str] = None, test: int):
    for student_id in student:
        if student[student_id]["name"] == name:
            return student[student_id]
    return {"data not found"}


# using pydantic 
class Student(BaseModel):
    name : str
    age: int
    year: str

# we are making a post method, therefore creating a new student obj
# by using the particular class we made above, therefore updating using
# api
@app.post("/create_student/{student_id}")
def create_student(student_id : int, stu: Student):
    if student_id in student:
        return {"student exists"}
    student[student_id] = stu
    return student[student_id]

# PUT method to update something that already exists
# we create a new model while we make things optional
# we cant use Student as in that case we have to pass everything to it

class Update_Student(BaseModel):
    name : Optional[str]
    age : Optional[int]
    year : Optional[str]

@app.put("/update_student/{student_id}")
def update_student(student_id : int, stu : Update_Student):
    if student_id not in student:
        return {"Error":"student dosnt exist"}
    if stu.name != None:
        student[student_id]["name"] = stu.name
    if stu.age != None:
        student[student_id]["age"] = stu.age
    if stu.year != None:
        student[student_id]["year"] = stu.year 

    return student[student_id]


# DELETE method
# used to delete data using fast API
@app.delete("/delete_student/{student_id}")
def delete_student(student_id:int):
    if student_id not in student:
        return {"Error":"student does not exist"}
    else:
        del student[student_id]
        return {"message":"Student deleted"}
    
