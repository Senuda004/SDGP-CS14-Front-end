function NutriCard(props) {
    return (  
        <div className="-90 flex items-center flex-col w-[30vh] relative float-right right-10 top-8">
            <img src={props.image} alt="Nutritional Value " />
            <div>
                <h3 className=" text-lg mt-3">Score : {props.score} %</h3>
            </div>


        </div>
    );
}

export default NutriCard;