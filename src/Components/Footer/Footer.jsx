import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import style from "./Footer.module.css"

const Footer = () => {
  return(
    <div className={style.footgral}>
      <h3>Santiago del Estero, Argentina</h3>
      <div className={style.icon}>
        <a href="https://www.linkedin.com/in/lucas-d%C3%ADaz-developer/" target="_blank" className={style.link}><LinkedInIcon/></a>
        <a href="https://github.com/lucasdiaz7" target="_blank" className={style.link}><GitHubIcon/></a>
        <a href="mailto:lucasdiaz687@gmail.com" target="_blank" className={style.link}> <EmailIcon/></a>
      </div>
      
    </div>
  )
};

export default Footer;
