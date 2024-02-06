import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';


export default function RefundPolicy() {

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
                    <h1>REFUND POLICY</h1>
                </div>
                <div>
                    <h2 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>Welcome to Guard ProStamp Inc!</h2>


                    <Typography paragraph>

                        This refund policy applies to subscriptions purchased through:      
                           <ul style={{ fontWeight: 'bold', fontSize: isSmallScreen ? '13px' : '16px' }}>
                            <li>
                            Guard ProStamp Inc Mobile Application (Available on Google Play and App Store).



                            </li>
                            <li>Guard ProStamp Inc Desktop Application</li>
                            <li>(www.guardprostamp.com)</li>
                        </ul>
                        Our refund policy does not affect your statutory rights.

                    </Typography>
                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>   1. SUBSCRIPTIONS </h3>
                    <Typography paragraph>


                        Due to the nature of the services offered through the platform (digital services), all purchases of our subscriptions are final and non-refundable. The user accepts that, once the purchase and registration process is completed and the subscription activated, the subscription cannot be refunded. Please check the features and content of subscriptions before purchasing a subscription.

                        <br />
                        <br />

                        Guard ProStamp will only issue a refund if you have been incorrectly charged any subscription fees due to a technical issue with our platform or our payment processor. If you find any inconsistencies in your billing, please contact the customer service of the relevant payment processor or contact us through our contact information for further information and assistance.

                        <br />
                        <br />

                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>   2. CANCELLATIONS </h3>
                    <Typography paragraph>

                        Subscriptions will automatically renew for an additional period unless canceled before the next payment. The user may cancel the subscription at any time and access to the paid features will remain available until the next billing date, when it will be permanently suspended. Subscriptions can be canceled through the platform or by sending us your cancellation request via our contact information.
                        <br />
                        <br />
                        Guard ProStamp will only issue a refund if you have been incorrectly charged any subscription fees due to a technical issue with our platform or our payment processor. If you find any inconsistencies in your billing, please contact the customer service of the relevant payment processor or contact us through our contact information for further information and assistance.

                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>3. CONTACT INFORMATION </h3>
                    <Typography component="div" style={{ marginBottom: "50px" }}>

                        If you have questions or concerns about this refund policy, please contact us through our contact page or through the information below.
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