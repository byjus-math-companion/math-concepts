import { Card } from "antd";

export function ClickableCard(props) {
    return <div className="clickableCard">
        <a href={props.url} target="_blank">
            <Card
                style={{
                    maxWidth: 250,
                    marginTop: 16,
                }}
                className="hoverCard"
            >
                {props.children}
            </Card>
        </a>
    </div>
}