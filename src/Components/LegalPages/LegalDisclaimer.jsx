import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';


export default function LegalDisclaimer() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const containerStyles = {
        fontFamily: 'Montserrat',
        marginTop: '15px',
        padding: '20px',
        background: '#f6f6f6',
        borderRadius: '10px',
        textAlign: isSmallScreen ? 'left' : 'justify',
        fontSize: isSmallScreen ? '10px' : '16px',
    };
    const listItemStyle = {
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    };


    return (
        <Container style={containerStyles}>

            <>
                <div style={{ textAlign: "center ", marginTop: "15px", fontSize: isSmallScreen ? '10px' : '16px', }}>
                    <h1>LEGAL DISCLAIMER</h1>
                </div>
                <div>
                    <h2 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>Welcome to Guard ProStamp Inc !</h2>


                    <Typography paragraph>

                    This disclaimer applies to all services and functionalities available through:
                                            <ul style={{ fontWeight: 'bold',fontSize: isSmallScreen ? '13px' : '16px', }}>
                            <li>
                            Guard ProStamp Inc Mobile Application (Available on Google Play and App Store).



                            </li>
                            <li>Guard ProStamp Inc Desktop Application</li>
                            <li>(www.guardprostamp.com)</li>
                        </ul>
                        (Hereinafter referred to as “Guard ProStamp lnc.”). 
                       
                        <br />
                        <br />
                        By using the platform and the content available on the platform, you accept personal responsibility for the use of the platform and the content displayed on the platform. Guard ProStamp provides resources and content for informational purposes only. We do not warrant that the information available on the platform is accurate, complete or up-to-date. Any use of the platform and the content displayed on the platform is the sole and exclusive responsibility of the user.

                        <br />
                        <br />
                        The information provided through the creation and verification of professionals' projects is information provided by the users themselves and is the sole and exclusive responsibility of the users. Guard ProStamp is not responsible for the use of any information provided or displayed through the platform related to the professionals' projects.

                        <br />
                        <br />
                        Guard ProStamp's services are limited solely to providing the platform to facilitate the creation and verification of projects with the license numbers of the professionals registered on our platform. The search and verification of the projects of the professionals registered on our platform through the license number is the sole and exclusive responsibility of the users or reviewers.

                        <br />
                        <br />
                        Guard ProStamp will not be responsible if the reviewers do not perform the verifications of the professionals' projects through the professionals' license numbers. Due to the recent launch of the platform, reviewers (public entities) may not perform project checks due to non-use of the platform. Checks or verifications of professional projects with license numbers depend on the use of the platform by third parties such as reviewers (public entities). Guard ProStamp is not responsible if the verification of the project is not performed by the reviewer due to the non-use of the platform by the reviewer or any third party in general.
                        <br />
                        <br />
                    </Typography>




                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>1. CONTACT INFORMATION </h3>
                    <Typography component="div" style={{ marginBottom: "50px" }}>

                        If you have any questions please contact us using the details below:
                        <br /><br />
                        Guard ProStamp Team
                        <br />
                        
                        <Link href="https://mail.google.com" underline="hover">
                            sales@guardprostamp.com
                        </Link>

                    </Typography>

                </div>
            </>
        </Container>
    );
}