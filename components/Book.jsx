import styles from '../styles/Book.module.css';

export default function Book() {
    return (
        <div className={styles.book} id="reservations">
            <div className={styles.header}>
                <h4>Book a Table</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.bookContainer}>
                    <div className={styles.item}>
                        <label htmlFor="">Choose A Date</label>
                        <br/>
                        <br/>
                        <input type="date"/>
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="">Choose A Time</label>
                        <br/>
                        <br/>
                        <select name="" id="">
                            <option value="">9:00 am</option>
                            <option value="">11:00 am</option>
                            <option value="">3:00pm</option>
                            <option value="">8:00 pm</option>
                            <option value="">10:00 pm</option>
                        </select>
                    </div>
                    <div className={styles.item}>
                        <label htmlFor="">Number Of People</label>
                        <br/>
                        <br/>
                        <select name="" id="">
                            <option value="">2 People</option>
                            <option value="">4 People</option>
                            <option value="">8 People</option>
                            <option value="">Above 8</option>
                        </select>
                    </div>
                </div>
                <button className={styles.bookBtn}>Book Now</button>
            </form>
        </div>
    )
}