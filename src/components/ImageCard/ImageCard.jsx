import css from "./ImageCard.module.css";

export default function ImageCard({ item }) {
    return (
        <div>
        <img className={css.img} src={item.urls.small} alt={item.alt_description} />
		</div>
    )
}