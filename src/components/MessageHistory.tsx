import React from "react"
import "./../css/main.css"
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";
interface TList {
    id: string;
    from: {name: string};
    type: string;
    time: string;
    text: string;
}

interface TMessage {
    list: TList[];
}


const MessageHistory: React.FC<TMessage> = ({ list }) => {
    return (
        <ul>
            {list.map((item: TList) => {
                if (item.type === "message") {
                    return <Message from={item.from} message={item} />
                } else if (item.type === "response") {
                    return <Response from={item.from} message={item} />
                } else if (item.type === "typing") {
                    return <Typing from={item.from} message={item} />
                }
            })}
    </ul>
    )
}

export default MessageHistory;