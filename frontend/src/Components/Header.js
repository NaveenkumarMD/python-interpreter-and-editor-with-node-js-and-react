function Header({run}) {
    return (
        <div className="header-container">
            <div id="right">
                <button id="btn" onClick={()=>run()}>Run</button>

                <select id="cars" name="cars" id="btn1">
                    <option value="volvo">Python</option>

                </select>
            </div>

            <div id="name">
                Compiler
            </div>



        </div>
    )
}
export default Header