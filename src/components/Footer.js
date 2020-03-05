import React, {useState} from "react"

function Footer(){
    const [language,setLanguage] = useState("nepali");

    function changeLanguage() {
        console.log('hi')
    }

    return(
        <footer className={"footer"}>
            <button className={"btn btn-lang"} onClick={() => setLanguage('hindi')}>lg - {language}</button>
        </footer>
    )
}


export  default Footer;