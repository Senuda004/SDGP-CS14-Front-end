function NutriCard2(props) {
    return (  
        <div className="-90 flex items-center flex-col ">
            <img src={props.image} alt="Nutritional Value " className="w-[35vh]"/>
            <div>
                <h3>Score : {props.score} %</h3>
            </div>


        </div>
    );
}

export default NutriCard2;