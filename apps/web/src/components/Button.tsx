export default function Button(props: { onClick?: () => void, children?: React.ReactNode }) {
    return (
        <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.onClick} >
            {props.children || "Click me"}
        </button>
    );
}