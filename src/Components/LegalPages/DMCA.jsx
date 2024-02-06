import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';


export default function DMCA() {

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
                    <h1>COPYRIGHT INFRINGEMENT (DMCA)</h1>
                </div>
                <div>
                    <h2 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>Welcome to Guard ProStamp Inc !</h2>


                    <Typography paragraph>
                    In this document, the words "platform" refers to the Guard ProStamp mobile application, desktop application and websites together, "we", "us", "our" and "Guard ProStamp" refers to Guard ProStamp and "you" and "user" refers to you, the Guard ProStamp user.                        <br />
                      
                       
                    </Typography>



                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>1. COPYRIGHT INFRINGEMENT</h3>
                    <Typography paragraph>


                    We will respond to all inquiries, complaints and claims regarding alleged infringement or violation of the provisions contained in the Digital Millennium Copyright Act (DMCA) when using or providing information or content through the Guard ProStamp platform. We respect the intellectual property of others and expect users to do the same. If you believe, in good faith, that any material provided or displayed on or in connection with your use of the platform infringes your copyright or other intellectual property right, please submit your copyright infringement request pursuant to Section 512 of the Digital Millennium Copyright Act (DMCA), via our contact information, with the following information:
                       <ul>
                        <li>Identification of the intellectual property right allegedly infringed. All relevant registration numbers or a statement of ownership of the work or content found on the Guard ProStamp platform should be included.
</li>
                        <li>A statement that specifically identifies the location of the infringing material, in sufficient detail for us to locate it on the platform. 
</li>
                        <li>Your name, address, telephone number and e-mail address.
</li>
                        <li>A statement by you that you have a good faith belief that use of the allegedly infringing material is not authorized by the copyright owner, its agents, or the law.
</li>
                        <li>A statement by you, made under penalty of perjury, that the information in your notification is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.
</li>
                        <li>An electronic or physical signature of the copyright owner or the person authorized to act on the copyright owner's behalf.
</li>
                       </ul>
                       Upon receipt of a copyright infringement request, we will contact the allegedly infringing user so that the user may respond to the copyright infringement request. 

                        <br />
                        <br />
                        Responses to copyright infringement requests must contain the following:
                        <ul>
                            <li>The user's physical or electronic signature.</li>
                            <li>Identification of the content that has been removed or the location where the content was posted.
</li>
                            <li>A statement, under oath, indicating a good faith belief that the content or material was removed due to an error.
</li>
                            <li>Name, address and telephone number of the user. 
</li>
                            <li>A statement that the user consents to the jurisdiction of the court in which the user is located.
</li>
                        </ul>
                        In the event that the alleged infringing user does not respond to the copyright infringement claim and the alleged copyright owner can satisfactorily demonstrate ownership of the copyright in the content and requests removal of the content from the platform, we will remove the content from the platform immediately.

                        <br />
                        <br />
                        All copyright infringement requests and responses can be submitted through our contact information.

                        <br />
                        <br />
                    </Typography>





                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>2. CONTACT INFORMATION </h3>
                    <Typography component="div" style={{ marginBottom: "50px" }}>

                    If you have any questions please contact us through our contact information:                        <br /><br />
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