interface TList {
    id: string;
    from: object;
    type: string;
    time: string;
    text: string;
}

export default function Message({ from, message }: { from:{name:string;}, message: TList }) {
        return (<li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">
                {message.text}
            </div>
        </li>
    )
}