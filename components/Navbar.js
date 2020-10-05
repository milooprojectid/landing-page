import Link from "next/link";
import Style from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={`${Style.navContent} container`}>
      <img src="/Logo.svg" alt="" />
      <ul className={Style.navList}>
        <li className={Style.navListItem}>
          <Link href="/">
            <a className={Style.navListLink}>About</a>
          </Link>
        </li>
        <li className={Style.navListItem}>
          <Link href="/">
            <a className={Style.navListLink}>How</a>
          </Link>
        </li>
        <li className={Style.navListItem}>
          <Link href="/">
            <a className={Style.navListLink}>Our Activity</a>
          </Link>
        </li>
        <li className={Style.navListItem}>
          <Link href="/">
            <a className={Style.navListLink}>Product</a>
          </Link>
        </li>
        <li className={Style.navListItem}>
          <Link href="/">
            <a className={Style.navListLink}>Contact</a>
          </Link>
        </li>
        <li className={Style.navListItem}>
          <Link href="/">
            <a className={`${Style.navListLink} ${Style.donate}`}>Donation</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
