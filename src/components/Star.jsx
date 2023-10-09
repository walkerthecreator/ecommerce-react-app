import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Star = ({ratings}) => {
    return(

        <span>

        {
            [...Array(5)].map((_ , index)=> (

                (index<ratings) ? 
                <AiFillStar key={index}/>
                :
                <AiOutlineStar key={index}/>
            ))
        }
        </span>
    )
}

export default Star
