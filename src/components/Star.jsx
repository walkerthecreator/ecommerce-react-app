import { AiFillStar } from "react-icons/ai"

const Star = ({ratings}) => {
    return(

        <span>

        {
            [...Array(ratings)].map((_ , index)=> (<AiFillStar key={index}/>))
        }
        </span>
    )
}

export default Star
