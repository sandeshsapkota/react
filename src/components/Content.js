import React from "react";

function Content(props) {
    const students = ["bob", "rishan", "robin", "amili"];

    function formSubmit(e){
        e.preventDefault()
    }

    function dataSubmit(){
        console.log('hi')
    }

    return (
        <div className={"wrapper"}>
            <button className={"btn"}>
                <span>
                    content
                </span>
            </button>
            <ul>
                {students.map((item,i) => <li key={i}>{item}</li>)}
            </ul>
            <form onSubmit={ formSubmit}>
                <input type="text" placeholder={"firstName"}/>
                <input type="submit" value={"firstName"} onClick={dataSubmit}/>
            </form>
        </div>
    )
}

export  default  Content;