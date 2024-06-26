import headerStyle from "./header.module.css";

export default function Header(){
    return(
        <header className={headerStyle.navBar}>
            <div>
                <h1>Header</h1>
            </div>
        </header>
    );
}