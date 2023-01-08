

export default function About(props) {

    // let [ myStyle, setMyStyle ] = useState({
    //     color: "white",
    //     backgroundColor: "black",
    //     border:"1px solid white"

    // })
    // const [btnText, setBtnText] = useState("Enable Light Mode")
     let myStyle = {
      color:props.mode === "dark"?"white":"black",
      backgroundColor:props.mode === "dark"?"rgb(70 44 100)":"white",
      // backgroundColor:props.mode==="dark"?props.showAlert("Dark mode is enabled","success"):props.showAlert("Light mode is enabled","success")
     
     } 
     let styleAbout = {
      color:props.mode === "dark"?"aquamarine":"black",
      
      
     }     
              
    return (
        <>
            <div className="container" id="me" style={myStyle}  >
                <h1 className='my-3' style={styleAbout}>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne" >
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                               TextUtils gives you a way to analyze your text quickly and effevtively.This application have multiple functinality.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                              TextUtils is a free counter that provides instant character count & word count statistics for a given text.TextUtils reports the number of words and characters.Thus, it is stable for writing text with word/ cahracter limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                               This application works in any web browser such as chorme,firefox,Internet Explorer,Safari,opera. It suits to count in facebook,blog,books,excel document,pdf document,essays,etc.
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}
