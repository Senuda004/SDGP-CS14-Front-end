function NutriScoreCard(props:any) {
    return (  
        <div className="w-90 flex items-center flex-col">
            <img src={props.image} alt="Nutritional Value image" />
            <div>
                <h3>Score : {props.score} %</h3>
            </div>


        </div>
    );
}

export default NutriScoreCard;