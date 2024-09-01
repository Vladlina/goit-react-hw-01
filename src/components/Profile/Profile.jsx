import css from "../Profile/Profile.module.css"

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      {" "}
      <div>
        {" "}
              <img className={css.img} src={image} alt="User avatar" />
              <p className={css.userName}>{name}</p>
         <p className={css.textProfile}>{tag}</p> 
         <p className={css.textProfile}>{location}</p>
         {" "}
      </div>{" "}
      <ul className={css.list}>
        {" "}
        <li>
          <span>Followers</span> <span>{followers}</span>{" "}
        </li>
        {" "}
        <li>
          <span>Views</span> <span>{views}</span>{" "}
        </li>
        {" "}
        <li>
          <span>Likes</span> <span>{likes}</span>{" "}
        </li>
        {" "}
      </ul>
    </div>
  );
};