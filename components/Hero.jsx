import styles from "../styles/Header.module.css";

export default function Hero() {
	return (
		<div className={styles.hero} id="home">
			<div className={styles.foodImg}></div>
			<div className={styles.heroText}>
				<p className={styles.heading}>Lorem ipsum dolor sit.</p>
				<p>
					Lorem, ipsum dolor.{" "}
					<i className="fa fa-facebook" aria-hidden="true"></i>
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur, nisi.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Alias temporibus ad provident quidem! Saepe, dolore? Aut
					incidunt odio, placeat doloribus animi unde! Veritatis minus
					dolore id sequi quam necessitatibus, veniam vero earum, ut
					iure cum iste blanditiis suscipit molestias consequatur.
				</p>
			</div>
		</div>
	);
}
