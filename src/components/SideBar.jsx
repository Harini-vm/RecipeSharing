import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SideBar({links, close}){
    return(
        <div className="sidebar" onClick={close}>
           {links.map(link => (
            <a className="sidebar-links" href="#!" key={link.name}>
                <FontAwesomeIcon icon={link.icon}/>
              {link.name}
            </a>
          ))}
        </div>
    )
}