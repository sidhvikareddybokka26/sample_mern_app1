from fastapi import FastAPI
app=FastAPI()

@app.get("/getStudents")
def getStudents():
    return "get student method called "
#localhost:8000/addstudent=>post
@app.post("/addStudent")
def addStudent():
    return"add student method called"

# localhost:8000/updateStudent => PUT
@app.put("/updateStudent")
def updateStudent():
    return "update student method called"

# localhost:8000/deleteStudent => DELETE
@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"
    