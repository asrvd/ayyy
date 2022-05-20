import GetIcon from "../libs/GetIcon";
import { config } from "../config";

export default function Icon(props) {
    return (
        <div dangerouslySetInnerHTML={{__html: `${GetIcon(props.icon)}`}} className="w-[30px] h-[30px] hover:scale-[1.15]  duration-300 ease-in-out" style={{fill: `${config.iconColor}`}}></div>
    )
}