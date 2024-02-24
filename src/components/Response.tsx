interface TList {
    id: string;
    from: object;
    type: string;
    time: string;
    text: string;
}

export default function Response({ from, message }: { from: { name: string; }, message: TList}) {
    return (<li>
        <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
            <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message other-message float-right">
            {message.text}
        </div>
    </li>
    )
}