import React , { useEffect, useState } from "react";
import {CSE} from "./dept";

function TricksterCalc() {  
    const [dept , setDept] = useState("None");
    const [sem , setSem] = useState("1");
    const [sub , setSub] = useState({});
    const changeDept = (e) => {
        if(e.target.value === "CSE")
            setDept(CSE);
    }
    
    const changeSem = (e) => {
        setSem(e.target.value);
    }

    useEffect(() => {
        console.log(dept[0]);
    } , [dept])

    useEffect(() => {
        console.log(sem);
    } , [sem])

    const changeMarks = (e,subject) => {
        let marks = sub;
        console.log(e.target.value);
        marks = {
            ...marks, subject
        }
        console.log(marks)
    }
    
    useEffect(() => {
        console.log(sub)
    } , [sub])


    return(
      <div className="tricksterCalc"> 
        
        <div className="semOpt">
            <h4>Choose Your Semester</h4>
            <div>
                <input type="radio" onChange={changeSem} value="1" name="semester" defaultChecked /><label for="1">1</label> 
                <input type="radio" onChange={changeSem} value="3" name="semester" /><label for="3">3</label>
                <input type="radio" onChange={changeSem} value="5" name="semester" /><label for="5">5</label>
                <input type="radio" onChange={changeSem} value="7" name="semester" /><label for="7">7</label>
            </div>
            <div>
                <input type="radio" onChange={changeSem} value="2" name="semester" /><label for="2">2</label> 
                <input type="radio" onChange={changeSem} value="4" name="semester" /><label for="4">4</label> 
                <input type="radio" onChange={changeSem} value="6" name="semester" /><label for="6">6</label> 
                <input type="radio" onChange={changeSem} value="8" name="semester" /><label for="8">8</label> 
            </div>
        </div>

        <div className="semDept">
            <h4>Choose your Department</h4>
            <select onChange={(e) => changeDept(e)}>
                <option value="">None</option>
                <option value="CSE">CSE (Computer Science And Engineering)</option>
                <option value="MECH">MECH (Mechanical Engineering)</option>
                <option value="ECE">ECE (Electronics And Communication Engineering)</option>
                <option value="EEE">EEE (Electrical And Electronical Engineering)</option>
            </select>
        </div>

        <div className="semSubject">
            <h4>Subjects</h4>
            {dept === "None" ?
                (
                <div>
                    <p>Subject 1</p>
                    <p>Subject 2</p>
                    <p>Subject 3</p>
                    <p>Subject 4</p>
                    <p>Subject 5</p>
                    <p>Subject 6</p>
                </div>
                ) :
                (
                <div>
                    {
                        dept[sem - 1].map((subject , id) => {
                            return(<p>{subject.subject_name} * (credits - {subject.credits})</p>)
                        })
                    }
                </div>
                )
                
            }
        </div>
         
        <div className="semGrades">
            <h4>Grades</h4>
            <h4 className="rules">GIVE YOUR GRADES ACCORDING TO THE ABOVE SUBJECTS ORDER</h4>
            <br />
            {dept === "None" ? 
            <div>
                <div>
                    <h4>Subject 1</h4>
                    <select id="sub1">
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <div>
                    <h4>Subject 2</h4>
                    <select id="sub2">
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <div>
                    <h4>Subject 3</h4>
                    <select id="sub3">
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <div>
                    <h4>Subject 4</h4>
                    <select id="sub4">
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <div>
                    <h4>Subject 5</h4>
                    <select id="sub5">
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <div>
                    <h4>Subject 6</h4>
                    <select id="sub6">
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                    </select>
                </div>
            </div> : 
            <div>   
                { 
                    dept[sem].map((subject , id) => {
                        return (
                            <div>
                                <h4>{subject.subject_name}</h4>
                                <select onChange={(e) => changeMarks(e,subject)}>
                                    <option value="O">O</option>
                                    <option value="A+">A+</option>
                                    <option value="A">A</option>
                                    <option value="B+">B+</option>
                                    <option value="B">B</option>
                                </select>
                            </div>     
                        )
                    })
                }
            </div>
            }

        </div>

        <div className="semCalc">
            <div><button type="button">CALCULATE</button></div>
        </div>

        <div className="semGPA">
            <h4>Your GPA : </h4>
            <div></div>
        </div>

      </div>
    )   
  }
  
  export default TricksterCalc;