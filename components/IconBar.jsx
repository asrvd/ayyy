import Icon from "./Icon";
import { config } from "../config";
import ReactTooltip from 'react-tooltip';

export default function IconBar() {
    const icons = config.links.map(
        (icon) => {
            if (icon.type == "url") {
                return (
                    <div className="text-center items-center cursor-pointer" key={icon.slug}>
                        <a href={icon.link} target="_blank" rel="noopener noreferrer" >
                            <Icon icon={icon.slug} />
                        </a>
                    </div>
                );
            } else {
                return (
                    <div className="text-center items-center cursor-pointer" key={icon.slug}>
                        <a data-tip={icon.text} key={icon.slug}>
                            <Icon icon={icon.slug} />
                        </a>
                        <ReactTooltip place="top" type="dark" effect="float"/>
                    </div>
                )
            }
        }
    )
    return (
        <div className="flex flex-wrap w-full h-full gap-5 justify-center items-top">
            {icons}
        </div>
    )
}