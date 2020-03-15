import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './floatingButton.css';

const FloatingButton = ({setOpenLeft}) => {

    const[panelFloating, setPanelFloating] = useState(false);

    const[actionButtons, setActionButtons] = useState([
        {icon: AddIcon, className: `fab addIcon`, onClick: setOpenLeft},
        {icon: WhatsAppIcon, className: `fab whatsAppIcon ${panelFloating ? "open" : ""}`, onClick: () => console.log("WHATSAPP")},
        {icon: InstagramIcon, className: `fab instagramIcon ${panelFloating ? "open" : ""}`, onClick: () => console.log("INSTAGRAM")},
        {icon: YouTubeIcon, className: `fab youTubeIcon ${panelFloating ? "open" : ""}`, onClick: () => console.log("YOUTUBE")},
        {icon: FacebookIcon, className: `fab facebookIcon ${panelFloating ? "open" : ""}`, onClick: () => console.log("FACEBOOK")}
    ])

    return (
        <div className="floating-button-container">
            {
                actionButtons.map((b, i) => {
                    return(
                        <div className={b.className} key={i}>
                            <IconButton variant="contained"
                                        color= "inherit"
                                        onClick={b.onClick}
                                        >
                                <b.icon/>
                            </IconButton>
                        </div>
                    )
                })
            }
            {/* <IconButton variant="contained"
                        color= "inherit"
                        onClick={() => floatingButtonClick()}
                        >
                <AddIcon />
            </IconButton> */}
        </div>
    )
}

export default FloatingButton;
