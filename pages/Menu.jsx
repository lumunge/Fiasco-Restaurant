import styles from '../styles/Menu.module.css';




export default function Menu({employee}) {

    console.log(employee);
    
    return (
        <>
        <div className='page-container'>
            
        </div>
        </>
    )
}

export const getServerSideProps = async pageContext => {
    const apiRes = await fetch('https://my-json-server.typicode.com/lumungep12/Fiasco-Restaurant/menuItems')
    const employee = await apiRes.json();
    return {
        props: {
            employee
        }
    }
}
