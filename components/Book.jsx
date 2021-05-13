import BookStyles from '../styles/BookStyles.module.css';

export default function Book() {
    return (
        <div className={BookStyles.book}>
            <p>Book a Table</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={BookStyles.bookContainer}>
                <div>
                    <label htmlFor="">Choose A Date</label>
                    <input type="date"/>
                </div>
                <div>
                    <label htmlFor="">Choose A Time</label>
                    <input type="time"/>
                </div>
                <div>
                    <label htmlFor="">Number Of People</label>
                    <select name="" id="">
                        <option value="">2 People</option>
                        <option value="">4 People</option>
                        <option value="">8 People</option>
                        <option value="">Above 8</option>
                    </select>
                </div>
                <button>Book Now</button>
            </div>
        </div>
    )
}
