import Link from "next/link"
import styles from "./button.module.css"

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        {/* anchor tag to substitute default one! */}
        <a className={styles.btn}>
          {/* dont set href because Link's href already does it for us! */}
          {props.children}
        </a>
      </Link>
    )
  }
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}