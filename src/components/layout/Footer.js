import {FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_list}>
                    <FaTwitter />
                </li>
                <li className={styles.social_list}>
                    <FaInstagram />
                </li>
                <li className={styles.social_list}>
                    <FaLinkedin />
                </li>
                <li className={styles.social_list}>                    
                    <FaGithub />                                     
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer