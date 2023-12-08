import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import './../style/sass/footer.scss'
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
function Footer() {
  return (
    <div>
        <Container>
            <Row>
            <footer className="footercard" style={{display:"flex", marginLeft:"210px"}}>
            <div className="firstfooter">
                <ul>
                    <li>Haqqımızda</li>
                    <br />
                    <li>Tariximiz</li>
                    <li>Xəbərlər və bildirişlər</li>
                    <li>Siz soruşursunuz. Biz cavablandırırq</li>
                    <li>Dəyərlərimiz</li>   
                </ul>
            </div>
            
                <ul className="secondfooter">
                    <li>Karyera</li>
                    <br />
                    <li>İnsanlarımızla tanış olun: Heyət və idarəetmə</li>
                    <li>İndi müraciət edin</li>

                     
                </ul>
           <ul className='thirdfooter'>
            <li>Xidmətlər</li>
            <br />
            <li>Wi-fi</li>
            <li>McDelivery®</li>
            <li>MakAvto®</li>
            <li>Mobil tətbiqi yükləyin</li>
           </ul>
           <ul className='lastfooter'>
            <li>Mobil tətbiq haqqında fikirləriniz</li> 
            <li>Restoran haqqında fikirləriniz</li>
           </ul> 
           <div className="image1">
           <img src="https://mcdonalds.az/images/static/app_store_badge.png" alt="" />
          
           <img src="https://mcdonalds.az/images/static/google_play_badge.png" alt="" />
           </div>
           <ul className="icons">
  
           <li> <CiFacebook /></li>
            <li><CiYoutube /></li>
            <li><CiInstagram /></li>
            <li><CiLinkedin /></li>

           </ul>

         

        </footer>  
       
        </Row>
        </Container>
    </div>
  )
}

export default Footer