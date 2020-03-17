import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './socialNetsButton.css';

const SocialNetsButton = () => {

    const[panelFloating, setPanelFloating] = useState(false);

    const actions = [
        {icon: AddIcon, className: `fabmain addIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => handlePanel()},
        {icon: WhatsAppIcon, className: `fab whatsAppIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => handleRedirectTo("http://facebook.com")},
        {icon: InstagramIcon, className: `fab instagramIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => handleRedirectTo("http://instagram.com")},
        {icon: FacebookIcon, className: `fab facebookIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => handleRedirectTo("http://youtube.com")},
        // {icon: YouTubeIcon, className: `fab youTubeIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => console.log("YOUTUBE")},
    ]

    const handlePanel = () => setPanelFloating(!panelFloating);

    const handleRedirectTo = stringlink => window.location.href = stringlink;

    return (
        <div className="social-nets-container">
            {
                actions.map((b, i) => {
                    return(
                        <div className={b.className} onClick={b.onClick} key={i}>
                            <IconButton color= "inherit">
                                <b.icon/>
                            </IconButton>
                        </div>
                    )
                })
            }
            {/* <ul>
                <li><a href="http://facebook.com/"><i class="fa fa-facebook"></i></a></li>
                <li><a href="http://linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="http://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                <li><a href="http://plus.google.com/"><i class="fa fa-google-plus"></i> </a></li>
            </ul> */}
        </div>
    )
}

export default SocialNetsButton;
