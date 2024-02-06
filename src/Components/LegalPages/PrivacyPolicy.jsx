import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from '@mui/material';


export default function TermAndConditions() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const containerStyles = {
        fontFamily: 'Montserrat',
        marginTop: '10px',
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
                <div style={{ textAlign: "center ", marginTop: "10px", fontSize: isSmallScreen ? '10px' : '16px', }}>
                    <h1>PRIVACY POLICY</h1>
                </div>
                <div>
                    <h2 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>Welcome to Guard ProStamp Inc </h2>
                    <Typography component="div">(Hereinafter referred to as "Guard ProStamp Inc"). </Typography>

                    <Typography paragraph>
                        Guard ProStamp values your privacy and the protection of your personal data. This privacy policy describes what information we collect from you, how we collect it, how we use it, how we obtain your consent, how long we keep it in our databases and, if necessary, with whom we share it.

                        <br />
                        <br />
                        By using the platform, you are accepting the practices described in this privacy policy. Your use of the platform is also subject to our terms and conditions. In this privacy policy, the words "platform" refers to the Guard ProStamp mobile application, desktop application and websites together, "we", "us", "our" and "Guard ProStamp" refers to Guard ProStamp and "you" and "user" refers to you, the Guard ProStamp user.

                        <br />
                        <br />
                        This privacy policy may change from time to time. Your continued use of the platform after we make changes to this privacy policy is deemed acceptance of those changes, so please check this policy periodically for updates. This privacy policy has been prepared and is maintained in accordance with all applicable state laws and federal regulations (U.S. regulations).
                    </Typography>



                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>1. GENERAL INFORMATION</h3>
                    <Typography paragraph>

                        The personal data of users that are collected and processed through:                        <br />
                        <ul style={{ fontWeight: 'bold',fontSize: isSmallScreen ? '13px' : '16px' }}>
                            <li>
                            Guard ProStamp Inc mobile application (Available on Google Play and App Store).



                            </li>
                            <li>Guard ProStamp Inc Desktop Application</li>
                            <li>(www.guardprostamp.com)</li>
                        </ul>
                        Will be under the responsibility and in charge of:
                        <ul style={{ fontWeight: 'bold' ,fontSize: isSmallScreen ? '13px' : '16px',}}>
                            <li>Guard ProStamp Inc </li>
                            <li>sales@guardprostamp.com
                            </li>
                        </ul>
                        <br />
                       
                    </Typography>




                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>2. HOW DO YOU OBTAIN MY CONSENT?</h3>
                    <Typography paragraph>
                        By downloading and using the mobile application, using the web application, registering as a user (professionals and reviewers), using the functionalities available on the platform, contacting us through our contact information, and providing us with personal information to communicate with you, you consent to our collection, storage and use of your information on the terms contained in this privacy policy. You may withdraw your consent at any time by sending us your request through our contact information.

                        <br />
                        <br />



                    </Typography>




                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>
                        3. TYPES OF INFORMATION COLLECTED
                    </h3>



                    <Typography component="div">
                        The information we collect from our users helps us to continually improve the user experience on the platform. These are the types of information we collect:

                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Information you provide to us.</span>        You provide information when you register as a user (professionals and reviewers), use the functionalities available on the platform, purchase a subscription, create a project and/or communicate with us through our contact information or contact forms. As a result of those actions, you may provide us with the following information:

                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Professionals</span>
                        <ul>
                            <li>First and last name
                            </li>
                            <li>License number</li>
                            <li>Driver's license or passport</li>
                            <li>Email address</li>
                            <li>Any additional information related to you that you provide to us directly or indirectly through our platform.</li>
                        </ul>

                        <span style={{ fontWeight: 'bold' }}>Reviewers:</span>
                        <ul>
                            <li>First and last name
                            </li>
                            <li>Official email address</li>
                            <li>Any additional information related to you that you provide to us directly or indirectly through our platform
                            </li>

                        </ul>

                        <br />
                        <br />

                        Guard ProStamp will not collect any personally identifiable information about you unless you provide it.


                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Information Collected Automatically:</span>     By accessing and using the platform, you automatically provide us with the following information:
                        <ul>
                            <li>Your IP address

                            </li>
                            <li>
                                Your operating system

                            </li>
                            <li>

                                Referrer URLs
                            </li>
                        </ul>



                        <span style={{ fontWeight: 'bold' }}>Payment Information:</span>  Your payment data will be processed by the payment processors available on the platform (PayPal, Stripe), which will process and store your data securely and for the sole purpose of processing the purchase of subscriptions. Guard ProStamp reserves the right to contract any payment platform available on the market, which processes your data for the sole purpose of processing the purchase of subscriptions.
                        <br />
                        <br />
                        See the privacy policy of PayPal and Stripe here:
                        <ul>
                            <li style={listItemStyle} > 
                                <Link href="" underline="hover">
                                https://www.paypal.com/myaccount/privacy/privacyhub
                            </Link></li>
                            <li style={listItemStyle}> <Link href="" underline="hover">
                                https://stripe.com/privacy
                            </Link></li>
                        </ul>


                        <span style={{ fontWeight: 'bold' }}>Firebase Crashlytics and Firebase Analytics (Mobile app)</span> : We use Firebase Crashlytics and Firebase Analytics provided by Google, Inc. of the United States ("Google"). These tools and technologies collect and analyze certain types of information, such as feature usage metrics and statistics, usage history, unique device identifiers and other similar information. The information generated by Firebase Crashlytics and Firebase Analytics may be transmitted to and stored by Google on servers in the United States. We use Firebase Crashlytics and Firebase Analytics data collection to improve our platform.
                        <br />
                        <br />
                        Please refer to Firebase's privacy policy:
                        <ul>
                            <li style={listItemStyle}>
                                <Link href="" underline="hover">
                                    https://firebase.google.com/support/privacy.
                                </Link>
                            </li>
                        </ul>
                        <span style={{ fontWeight: 'bold' }}>Contact information:</span>  We may access some personal information about the user, such as name and email address, when the user or any third party communicates with us through our contact information. Personal information provided through our contact information is not stored on any Guard ProStamp server and will be stored on the respective server of our email service.

                        <br />
                        <br />
                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>4. HOW LONG WE KEEP YOUR DATA</h3>
                    <Typography component="div">
                        Personal data provided by users through the use of the platform will be retained for the time necessary to provide the functionalities available on the platform or until the user maintains the account on the platform or decides to close it or until Guard ProStamp closes and deletes the user's account or until the user requests the deletion of his or her data. Guard ProStamp may retain personal data for a longer period provided that the user has consented to such processing, as long as such consent is not withdrawn. In addition, Guard ProStamp may be obliged to retain personal data for a longer period provided that this is required for compliance with a legal obligation or by order of an authority. Once the retention period has expired, the personal data will be deleted. Therefore, the right of access, the right of deletion, the right of rectification and the right to data portability cannot be asserted after the retention period has expired.
                        <br />
                        <br />

                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}> 5. HOW WE USE YOUR INFORMATION. </h3>
                    <Typography component="div">

                        In general, we use the information we collect primarily to provide, maintain, protect and improve our platform and our current services. We use personal information collected through our platform as described below:
                        <ul>
                            <li>Provide the mobile application (Available on Google Play and App store).</li>
                            <li>Provide the desktop application.</li>
                            <li>User registration (professionals and reviewers).</li>
                            <li>Provide the functionalities available on the platform.</li>
                            <li>Provide subscriptions.</li>
                            <li>Process subscription payments.</li>
                            <li>Facilitate the creation of projects by professionals.</li>
                            <li>Facilitate the uploading of information to the projects of professionals.</li>
                            <li>Facilitate project searches and license number verification.</li>
                            <li>Understand and improve your experience using our platform.</li>
                            <li>Respond to your comments or questions through our contact information.</li>
                            <li>Send information related to Guard ProStamp.</li>
                            <li>Guard ProStamp marketing purposes.</li>
                            <li>Link or combine your information with other data we obtain from third parties to help us understand your needs and provide you with better service.</li>
                            <li>Protect, investigate and deter fraudulent, unauthorized or illegal activities.</li>
                        </ul>

                    </Typography>


                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}> 6. HOW WE SHARE INFORMATION</h3>
                    <Typography component="div">

                        Information about our customers is an important part of our business, and we are not in the business of selling it to others. We share customer information only as described below.
                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Third-Party Service Providers.</span>
                        We use third party services to perform certain functions on our platform. Some of these functions and services are: Building and hosting the platform, processing payments (Stripe, PayPal), performing tracking and analytics functions on the platform (Firebase Crashlytics), sending emails, marketing services and search results.
                        <br />
                        <br />

                        These third-party services and tools may have access to personal information needed to perform their functions, but may not use that information for other purposes. Information shared with these third-party services will be treated and stored in accordance with their respective privacy policies and our privacy policy.
                        <br />
                        <br />

                        <span style={{ fontWeight: 'bold' }}>Email marketing:</span>
                        We use the email address provided by users to conduct e-mail marketing campaigns and to send relevant information about Guard ProStamp. By registering as a user on the platform, you authorize us to use your email address for email marketing. We will use third party services and platforms to perform email marketing, so we may share certain information with some of these third parties for the sole and exclusive purpose of sending our emails.
                        <br />
                        <br />

                        <span style={{ fontWeight: 'bold' }}> Business Transfers.</span>
                        In the event Guard ProStamp creates, merges with, or is acquired by another entity, your information will likely be transferred. Guard ProStamp will send you an email or post a prominent notice on our platform before your information becomes subject to another privacy policy.
                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Protection of Guard ProStamp Inc and Others:</span>
                        We release personal information when we believe release is appropriate to comply with the law, enforce or apply our terms and conditions and other agreements, or protect the rights, property, or safety of Guard ProStamp, our users, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.

                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Anonymous Information:</span>
                        Guard ProStamp uses anonymous browsing information collected automatically by our servers primarily to help us administer and improve the platform. We may also use aggregated anonymous information to provide information about the Platform to potential business partners and other unaffiliated entities. This information is not personally identifiable.

                        <br />
                        <br />


                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}> 7. PROTECTION OF YOUR INFORMATION </h3>
                    <Typography component="div" >

                        We permit access to your personal information only to those persons who have a legitimate need to know such information and to those persons you have authorized to have access to such information. Guard ProStamp follows generally accepted industry standards to protect the personal information you provide to us. No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while Guard ProStamp strives to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so.
                        <br />
                        <br />

                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>8. RIGHTS </h3>
                    <Typography component="div">
                        Users who provide information through our platform, as data subjects, have the right to access, rectify, download or delete their information, as well as to restrict and oppose certain processing of their information. While some of these rights apply generally, others only apply in certain limited circumstances. These rights are described below:
                        <ul>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Access and portability:</span>        to access and know what information is stored on our servers, you can send us your request through our contact information.



                            </li>
                            <li>

                                <span style={{ fontWeight: 'bold' }}> Rectification, restriction, limitation and deletion:</span>     You may also rectify, restrict, limit or delete much of your information.

                            </li>
                            <li>

                                <span style={{ fontWeight: 'bold' }}>Right to be informed:</span>      Users of our platform will be informed, upon request, about what data we collect, how it is used, how long it is kept and whether it is shared with third parties.

                            </li>
                            <li>

                                <span style={{ fontWeight: 'bold' }}>Object:</span>     Where we process your data based on our legitimate interests, as explained above, or in the public interest, you may object to this processing in certain circumstances. In such cases, we will stop processing your information unless we have legitimate grounds to continue processing it or where necessary for legal reasons.

                            </li>
                            <li>

                                <span style={{ fontWeight: 'bold' }}>Withdraw consent:</span>     Where you have previously given your consent, for example to allow us to process and store your personal information, you have the right to withdraw your consent to the processing and storage of your information at any time. For example, you can withdraw your consent by updating your settings. In certain cases, we may continue to process your information after you have withdrawn your consent if we have a lawful basis for doing so or if your withdrawal of consent was limited to certain processing activities.

                            </li>
                            <li>

                                <span style={{ fontWeight: 'bold' }}>Complaint:</span>     If you wish to lodge a complaint about our use of your information (and without prejudice to any other rights you may have), you have the right to do so with your local supervisory authority. Users may exercise all of these rights by contacting us via the contact information or contact page.

                            </li>
                            <li>

                                <span style={{ fontWeight: 'bold' }}>Rights related to automated decision-making, including profiling:</span>      Users may request that we provide them with a copy of the automated processing activities we conduct if they believe that data is being unlawfully processed.

                            </li>
                        </ul>
                        <br />
                        <br />
                        Users or owners of the personal data they provide through the platform can exercise these rights over their personal data at any time and without any limitation by sending us their request through our contact information.
                        <br />
                        <br />
                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>9. PROTECTION OF CHILDREN'S ONLINE PRIVACY </h3>
                    <Typography component="div">

                        We comply with the requirements of national and international data protection regulations regarding the protection of personal data of minors. We do not collect any information from children under the age of 18. Our platform is intended for persons over 18 years of age. If we become aware that a minor has provided us with personal information, we will take the necessary steps to delete such information and terminate that person's account.

                    </Typography>
                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>    10. THIRD PARTIES</h3>
                    <Typography component="div">

                    Except as expressly included in this privacy policy, this document addresses only the use and disclosure of information Guard ProStamp collects from you. If you disclose your information to others, whether other users or Guard ProStamp vendors, different rules may apply to their use or disclosure of the information you disclose to them. Guard ProStamp does not control the privacy policies of third parties, and you are subject to the privacy policies of those third parties where applicable. Guard ProStamp is not responsible for the privacy or security practices of other Internet platforms, including those linked to or from the Guard ProStamp platform. Guard ProStamp encourages you to ask questions before disclosing your personal information to others.
                    </Typography>

                


                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>11. CONTACT </h3>
                    <Typography component="div" style={{ marginBottom: "50px" }}>

                    If you have questions or concerns about this privacy policy and the treatment and security of your data, please contact us using the contact information below:
                        <br /><br />
                        Guard ProStamp Team  
                        <br/>
                        <Link href="https://mail.google.com" underline="hover">
                            sales@guardprostamp.com
                        </Link>

                    </Typography>

                </div>
            </>
        </Container>
    );
}