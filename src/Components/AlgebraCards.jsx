import { Meta } from "antd/es/list/Item";
import "./cards.css"
import { ClickableCard } from "./ClickableCard";
// import { NoCards } from "./NoCards";

let loading = false;

let data = [
    {
        title: "Exponential Expressions",
        url: "https://byjus.com/us/math/study/concept/exponential-expressions",
        description: "This page contains great things"
    },
    {
        title: "Algebraic Expressions",
        url: "https://byjus.com/us/math/study/concept/algebraic-expressions",
        description: "This page contains great things 2"
    },
    {
        title: "Exponential Expressions",
        url: "https://byjus.com/us/math/study/concept/exponential-expressions",
        description: "This page contains great things"
    },
    {
        title: "Algebraic Expressions",
        url: "https://byjus.com/us/math/study/concept/algebraic-expressions",
        description: "This page contains great things 2"
    },
    {
        title: "Exponential Expressions",
        url: "https://byjus.com/us/math/study/concept/exponential-expressions",
        description: "This page contains great things"
    },
    {
        title: "Algebraic Expressions",
        url: "https://byjus.com/us/math/study/concept/algebraic-expressions",
        description: "This page contains great things 2"
    },
    {
        title: "Exponential Expressions",
        url: "https://byjus.com/us/math/study/concept/exponential-expressions",
        description: "This page contains great things"
    },
    {
        title: "Algebraic Expressions",
        url: "https://byjus.com/us/math/study/concept/algebraic-expressions",
        description: "This page contains great things 2"
    }
]

const dataArray = data.map((card,ind)=>{
    return <ClickableCard url = {card.url} key = {ind}>
    <Meta
    title={<h2>{card.title}</h2>}
    description={<p>{card.description}</p>}
    />
</ClickableCard>
});

function AlgebraCards(){
    // if(dataArray.length == 0){return <NoCards></NoCards>}
    return <div className="cards-holder">
        {dataArray}
    </div>
}

export default AlgebraCards;