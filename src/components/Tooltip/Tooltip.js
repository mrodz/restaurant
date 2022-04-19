import './Tooltip.css';

function Tooltip(props) {
    const element = props.children.length > 1 ? props.children[0] : props.children;
    
    // console.log(props.children);
    const text = props.text;

    return (
        <div className="tooltip">
            <div data-content>
                {element}
            </div>
            <div data-text>
                {text}
            </div>
        </div>
    );
}

export default Tooltip;