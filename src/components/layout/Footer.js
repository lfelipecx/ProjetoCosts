import {FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_list}>
                    <a href="https://twitter.com/Felipe_23_BfR"> <FaTwitter /> </a>
                </li>
                <li className={styles.social_list}>
                    <a href="https://www.instagram.com/lfelipecx/"> <FaInstagram /> </a>
                </li>
                <li className={styles.social_list}>
                    <a href="https://www.linkedin.com/in/lfelipecx"> <FaLinkedin /> </a>
                </li>
                <li className={styles.social_list}>                    
                    <a href="https://github.com/lfelipecx"> <FaGithub />  </a>                                   
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer