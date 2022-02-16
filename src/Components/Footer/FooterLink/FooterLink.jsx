import style from "./FooterLink.module.scss";

function FooterLink(props) {
    return (
        <a href={props.href} className={style.link}>{props.name}</a>
    );
}

export default FooterLink;