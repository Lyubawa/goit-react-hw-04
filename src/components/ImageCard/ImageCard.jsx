import css from "./ImageCard.module.css";

export default function ImageCard({ item, openModal, item: { likes } }) {
    return (
        <div>
        <img className={css.img} src={item.urls.small} alt={item.alt_description} onClick={openModal} />
            <p className={css.text}>Likes: {likes}</p>
        </div>
    )
}