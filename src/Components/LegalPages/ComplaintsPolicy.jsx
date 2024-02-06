import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';


export default function ComplainstsPolicy() {

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
                    <h1>COMPLAINTS POLICY</h1>
                </div>
                <div>
                    <h2 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>Welcome to Guard ProStamp Inc.</h2>


                    <Typography paragraph>
                        In this complaints policy, the words "platform" refers to the Guard ProStamp mobile application, desktop application and websites together, "we", "us", "our" and "Guard ProStamp" refers to Guard ProStamp and "you" and "user" refers to you, the Guard ProStamp user.
                        <br />
                        <br />
                        Our complaints policy is outlined in this paper. This complaints policy should be reviewed in conjunction with our terms and conditions if you use Guard ProStamp because it is a crucial component of them. Users of Guard ProStamp and any other third party may contact us with any complaints pertaining to Guard ProStamp by using this complaints policy.

                        <br />
                        <br />
                    </Typography>



                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>1. HOW TO FILE A COMPLAINT</h3>
                    <Typography paragraph>


                        If you have a complaint about the Guard ProStamp platform, including any complaint about content found on the platform or the behavior of any user or third party related to the use of the platform, please send it to us using our contact information. Please include your name, address and contact information, as well as a description of your complaint and, if it relates to any content included on the platform, the location or specification of the content in question.

                        <br />
                        <br />
                    </Typography>




                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>2. HOW WE WILL HANDLE CONTENT COMPLAINTS: </h3>
                    <Typography paragraph>
                        Upon receipt of your complaint in accordance with the preceding section:
                        <br />
                        <br />
                        <ul>
                            <li><span>a)    </span>We will take the necessary steps to investigate your complaint in a timely manner consistent with the seriousness of the situation; If we need additional information or documentation, we will let you know.
                            </li>
                            <li><span>b)    </span>We will notify you if we need additional documentation or details.
                            </li>
                            <li><span>c)    </span>We will address your matter within seven (7) business days (excluding Saturdays, Sundays and holidays).
                            </li>
                            <li><span>d)    </span>If we determine that the content is illegal or unauthorized, we will promptly remove it and let you know by email or other electronic communication.
                            </li>
                            <li><span>e)    </span>We will send you an e-mail or other electronic message informing you of our decision if we are satisfied that the content is not illegal or unauthorized.
                            </li>
                        </ul>

                        We reserve the right to submit any related dispute to a neutral arbitration association.


                    </Typography>




                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>
                        3. COPYRIGHT INFRINGEMENT COMPLAINTS
                    </h3>



                    <Typography component="div">
                        Claims of copyright infringement must be filed in accordance with our DMCA notice and we will react to claims of copyright infringement in accordance with the guidelines in that notice.
                        <br />
                        <br />

                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>4. HOW WE WILL HANDLE ADDITIONAL COMPLAINTS</h3>
                    <Typography component="div">
                        Should additional concerns be received; we will follow the steps below:
                        <ul>
                            <li><span>a)    </span>We will take the actions we deem necessary to investigate your complaint in a timely manner and in accordance with its importance.
                            </li>
                            <li><span>b)    </span>If we require additional information or documents, we will let you know.
                            </li>
                            <li><span>c)    </span>We will act in good faith as we deem necessary to address the issue raised in your complaint.

                            </li>
                            <li><span>d)    </span>We are not required to let you know how your report turned out.

                            </li>

                        </ul>


                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}> 5. UNWARRANTED OR ABUSIVE COMPLAINTS </h3>
                    <Typography component="div">


                        As a Guard ProStamp user, you represent and warrant that you will not submit any complaint that is entirely unwarranted, abusive, or submitted in bad faith under this complaints policy. We reserve the right to stop or delete your user account if we find that you have violated this warranty.


                    </Typography>






                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>6. CONTACT INFORMATION </h3>
                    <Typography component="div" style={{ marginBottom: "50px" }}>

                        If you have any questions or concerns about this complaint policy or wish to submit a complaint, please contact us using the details below:
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