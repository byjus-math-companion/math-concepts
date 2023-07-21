import { Tabs } from "antd";
import AlgebraCards from "./AlgebraCards.jsx";
import {NumberSense} from "./NumberSense.jsx";




import "./headerTabs.css";

const onChange = (key) => {
};


const items = [
  {
    "key": 1,
    "label": "Algebra",
    "children": <AlgebraCards></AlgebraCards>
  },
  {
    "key": 2,
    "label": "Number Sense",
    "children": <NumberSense></NumberSense>
  },
  {
    "key": 3,
    "label": "Geometry",
    "children": "Coming Soon..."
  },
  {
    "key": 4,
    "label": "Ratio & Proportion",
    "children": "Coming Soon..."
  },
  {
    "key": 5,
    "label": "Functions",
    "children": "Coming Soon..."
  },
  {
    "key": 6,
    "label": "Statistics & Probability",
    "children": "Coming Soon..."
  }
]

export function HeaderTabs(){
  return<div className="mainPage">
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} size="large"></Tabs>
  </div>
}