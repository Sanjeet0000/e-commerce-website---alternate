import "./../stylesheet/ColorRadioSelector.css";
function ColorRadioSelector(){
    return( 
    <div>
        <h5 className="pb-3 pt-5">Colour</h5>
        <div className="row justify-content-around w-100">
            <label className="radio-container">
                <input type="radio" name="Radio-Inline"/>
                <span className="checkmark1 checkmark"></span> 
            </label>
            <label className="radio-container">
                <input type="radio" name="Radio-Inline"/>
                <span className="checkmark2 checkmark"></span>
            </label>
            <label className="radio-container">
                <input type="radio" name="Radio-Inline"/>
                <span className="checkmark3 checkmark"></span>
            </label>
            <label className="radio-container">
                <input type="radio" name="Radio-Inline"/>
                <span className="checkmark4 checkmark"></span>
            </label>
            <label className="radio-container">
                <input type="radio" name="Radio-Inline"/>
                <span className="checkmark5 checkmark"></span>
            </label>        
            <label className="radio-container">
                <input type="radio" name="Radio-Inline"/>
                <span className="checkmark6 checkmark"></span>
            </label>

        </div>
    </div>
    )
}

export default ColorRadioSelector;
