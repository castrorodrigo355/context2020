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
        {icon: WhatsAppIcon, className: `fab whatsAppIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => console.log("WHATSAPP")},
        {icon: InstagramIcon, className: `fab instagramIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => console.log("INSTAGRAM")},
        {icon: YouTubeIcon, className: `fab youTubeIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => console.log("YOUTUBE")},
        {icon: FacebookIcon, className: `fab facebookIcon ${panelFloating ? 'openNets' : ''}`, onClick: () => console.log("FACEBOOK")}
    ]

    const handlePanel = () => setPanelFloating(!panelFloating);

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
        </div>
    )
}

export default SocialNetsButton;
