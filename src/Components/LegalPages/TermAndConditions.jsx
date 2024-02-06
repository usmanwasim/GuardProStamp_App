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
      marginTop: '15px',
      padding: '20px',
      background: '#f6f6f6',
      borderRadius: '10px',
      textAlign: isSmallScreen ? 'left' : 'justify',
      fontSize: isSmallScreen ? '10px' : '16px',
    };
    return (
        <Container style={containerStyles}>
            <>
                <div style={{ textAlign: "center ", marginTop: "15px",fontSize: isSmallScreen ? '10px' : '16px', }}>
                    <h1>TERMS AND CONDITIONS</h1>
                </div>
                <div>
                    <h2 style={{fontSize: isSmallScreen ? '15px' : '16px',}}>Welcome to Guard ProStamp Inc!</h2>
                    <Typography component="div">These are the terms and conditions for: </Typography>
                    <ul style={{fontWeight: 'bold'}}>
                        <li>
                            <Typography style={{ marginLeft: "0px" }}>Guard ProStamp Inc uard ProStamp mobile application (Available on Google Play and App Store).
                            </Typography>
                        </li>
                        <li>

                            <Typography style={{ marginLeft: "0px" }}>
                                Guard ProStamp Desktop Application
                            </Typography>
                        </li>
                        <li>
                            <Typography style={{ marginLeft: "0px" }}>
                                (www.guardprostamp.com)
                            </Typography>
                        </li>
                    </ul>
                    <Typography paragraph>
                        By using the platform, you agree to be bound by these terms and conditions and our privacy policy. In these terms and conditions, the words "platform" refers to the Guard ProStamp
                        mobile application, desktop application and websites together, "we", "us", "our" and "Guard ProStamp" refers to Guard ProStamp and "you" and "user" refers to you, the Guard ProStamp user.
                        <br/>
                        <br/>
                        The following terms and conditions apply to your use of the platform. This includes
                        mobile and tablet versions, as well as any other version of Guard ProStamp accessible via desktop, mobile, tablet, social media or other devices.
                        <br/>
                        <br/>
                        PLEASE READ THESE CONDITIONS CAREFULLY BEFORE DOWNLOADING AND USING THE FUNCTIONALITIES AVAILABLE ON THE PLATFORM.

                    </Typography>
                   
                   

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>1. ACCEPTANCE OF TERMS</h3>
                    <Typography paragraph>
                      
                        By using the platform, you agree to be bound by this agreement. If you do not accept the terms of this agreement, you should not use the platform and discontinue use of the platform immediately. We may modify this agreement from time to time, and such modification shall be effective upon its posting on the platform. You agree to be bound by any modification to these terms and conditions when you use Guard ProStamp after any such modification is posted; it is therefore important that you review this agreement regularly.
                        <br/>
                        <br/>
                        By using the platform, you agree to be bound by this agreement. If you do not accept the terms of this agreement, you should not use the platform and discontinue use of the platform immediately. We may modify this agreement from time to time, and such modification shall be effective upon its posting on the platform. You agree to be bound by any modification to these terms and conditions when you use Guard ProStamp after any such modification is posted; it is therefore important that you review this agreement regularly.
                        <br/>
                        <br/>
                        Use of the platform is not directed to persons under the age of 18. Guard ProStamp does not knowingly collect information from persons under the age of 18. If you are under 18, do not submit any personal information to Guard ProStamp. It is the responsibility of parents and legal guardians to determine whether use of the platform is appropriate for their children or minors under their guardianship.

                        <br/>
                        <br/>
                        By using the platform, you represent and warrant that you have the full right, power and authority to enter into this agreement and to fully perform all of your obligations hereunder. You further represent and warrant that you are under no legal disability or contractual restriction that prevents you from entering into this agreement.

                        <br/>
                        <br/>

                    </Typography>
                    
                   
                  

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>2. PROFESSIONALS</h3>
                    <h4 style={{ fontSize: isSmallScreen ? '14px' : '16px', }}>2.1 Registration</h4>
                    <Typography paragraph>
                        Professionals are those professionals such as professional architects, professional engineers and professional surveyors who register on the platform for the purpose of creating and uploading professional project information to the platform.
                        <br/>
                        <br/>
                        To access the functionalities available on the platform, professionals must register and open an account. In consideration of your use of the platform as a professional, you agree to provide true, accurate, current and complete information as requested in the registration form available on the platform and to maintain and promptly update your data and profile data to keep it true, accurate, current and complete. If we have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Guard ProStamp reserves the right to suspend or terminate your account and refuse any and all current or future use of the platform. Users must submit to an identity verification process during registration in order to use the functionalities available on the platform as a professional and provide information related to professional projects.

                        <br/>
                        <br/>
                        Users may share personal and professional information through the platform. Any information that users share or provide through the platform is the sole responsibility of the users themselves. Professionals are free to share and provide information through the creation of professional projects, but are responsible for the use of such information, its publication and disclosure. Guard ProStamp is not responsible for the information published and shared through the platform. The information you provide and publish through the platform may be visible to reviewers who register on the platform and perform a search of the professional's projects through the platform.

                        <br/>
                        <br/>
                        You are responsible for maintaining the confidentiality of your password and account information, and are fully responsible for all activities that occur under your password or account. You agree to (a) immediately notify Guard ProStamp of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you log out of your account at the end of each session. You may never use another user's account without Guard ProStamp's prior authorization. Guard ProStamp will not be liable for any loss or damage arising from your breach of this agreement.

                        <br/>
                        <br/>
                        Users can cancel their accounts at any time and for any reason through the account settings or by sending us their request through our contact information. Such cancellation will only result in the deletion of the account and the deletion of all personal data transferred to Guard ProStamp.

                        <br/>
                        <br/>
                        Guard ProStamp reserves the right to terminate your account or your access immediately, with or without notice, and without liability to you, if Guard ProStamp believes that you have breached any of these terms, provided Guard ProStamp with false or misleading information, or interfered with another's use of the platform or the service.

                        <br/>
                        <br/>
                       

                    </Typography>
                   
              
                    <h4 style={{ fontSize: isSmallScreen ? '14spx' : '16px', }}>2.2. Subscriptions</h4>
                    <Typography component="div">
                        To use the platform's functionalities and to create and provide project information that can be verified by
                        reviewers through the license number, professionals must purchase a subscription. When a user purchases a
                        subscription, Guard ProStamp will send a confirmation email. This confirmation email will be produced
                        automatically so that the user will have confirmation of the payment and the start of the subscription. If the
                        user does not receive the email confirmation of the purchase and the start of the subscription, it is possible
                        that it has been sent to your spam folder.
                        <br />
                        <br />
                        Guard ProStamp may change or discontinue the availability of subscriptions at any time at its sole discretion.
                        If a subscription purchase is canceled, the payment made for the subscription will be refunded for the applicable
                        billing period. This does not affect your statutory rights.
                        <br />
                        <br />
                        Subscriptions include monthly automatic billing payments. You authorize Guard ProStamp to renew your subscription and to charge you periodically and progressively on each billing date. The subscription billing date is the date on which you purchase the subscription and make the first payment. On the corresponding billing date, you will automatically be charged the corresponding subscription fee. The subscription will remain active until you cancel it or we terminate it. You must cancel your subscription before it renews to avoid the next billing period. We will bill you for the subscription billing fee in the payment method you choose during registration and subscription purchase.

                        <br />
                        <br />
                        Subscriptions will automatically renew for an additional period unless canceled prior to the next billing period. To cancel subscriptions, users must submit a cancellation request through our contact information and the subscription will be canceled for the next billing period. If a subscription is canceled, the user may continue to use the website payment features for the subscription until the next billing period, at which time the subscription and access to the website payment features will be canceled.

                        <br />
                        <br />
                        <span style={{ fontWeight: 'bold' }}> Important:</span> Please note that professionals purchase the subscription for the purpose of creating projects, uploading information to those projects, linking the license number to the projects and maintaining project data within the platform. Guard ProStamp does not guarantee that by purchasing the subscription, reviewers will use the platform to verify projects. Guard ProStamp has no control over the reviewers and it is the sole and exclusive responsibility of the reviewers to use the application to verify the projects of the professionals. The payment of the subscriptions by the professionals is intended to cover the costs of maintaining the platform and its operations and to maintain the information of the professionals' projects within the platform.

                        <br />

                        <h4 style={{ fontSize: isSmallScreen ? '14px' : '16px', }}>2.3. Payments</h4>
                        <Typography paragraph>
                            Subscriptions will be paid by the following payment methods:
                        </Typography>
                        <ul style={{ fontWeight: 'bold' }}>
                            <li>
                                <Typography paragraph style={{ fontWeight: 'bold' }}>
                                    Credit/debit card (Visa, Master, Discover, Amex, Diners, etc.)
                                </Typography>
                            </li>

                            <li>
                                <Typography paragraph style={{ fontWeight: 'bold' }}>
                                    Stripe
                                </Typography>
                            </li>
                        </ul>



                    </Typography>
                    <Typography component="div">

                        Subscription payments will be processed through our payment processors Stripe . The corresponding subscription payment will be charged to your credit/debit card or PayPal account upon completion of the subscription payment and registration process. The subscription will be activated upon completion of the payment and registration process and will be charged on each plan billing date automatically (monthly). Once the transaction has been processed, we will send an electronic receipt to the user's email address.

                        <br />
                        <br />
                        If you find any inconsistencies in your billing, please contact us via our contact details or you can make a complaint via the customer service of the relevant payment processor.
                        <br />
                        <br />
                        If your card is declined, you will receive an error message. No payment will be charged to your card and no order will be processed. There may be a pending transaction on your account until your card issuing bank withdraws the authorization. This usually takes 2 to 5 working days. Your card may be declined for a number of reasons, such as insufficient funds, AVS (Address Verification System) mismatch or you have entered an incorrect security code.

                        <br />
                        <br />
                        If your payment is declined, you will need to provide an alternative payment method or provide another card on which the payment can be charged and processed.

                        <br />
                        <br />
                        Your payment details will be treated and retained securely and for the sole purpose of processing the purchase of the subscriptions. Guard ProStamp reserves the right to engage any payment platform available on the market, which processes your data for the sole purpose of processing the purchase of the subscriptions.

                        <br />
                        <br />



                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>
                        3. REVIEWERS
                    </h3>

                    <h4 style={{ fontSize: isSmallScreen ? '14px' : '16px', }}>3.1 Registration</h4>

                    <Typography component="div">
                        Reviewers are those government workers who have a legitimate interest in verifying professionals' projects through the platform. Reviewers will be able to verify projects by providing the license number of the relevant professional. Registration and use of the platform by reviewers is free of charge.

                        <br />
                        <br />
                        To access information on the projects of professionals, reviewers must register on the platform. When registering on the platform, the user must provide the official email address and choose a password. The reviewer is responsible for maintaining the confidentiality of his or her password and account information, and is fully responsible for all activities that occur under his or her password or account. You agree to immediately notify Guard ProStamp of any unauthorized use of your password or account or any other breach of security. You may never use another user's account without Guard ProStamp's prior authorization. Guard ProStamp will not be liable for any loss or damage arising from your failure to comply with this agreement.

                        <br />
                        <br />
                        Users may cancel their accounts at any time and for any reason through the account settings or by sending us their request through our contact information. Such cancellation will only result in the deletion of the account and the deletion of all personal data transferred to Guard ProStamp.

                        <br />
                        <br />
                        Guard ProStamp reserves the right to terminate your account or your access immediately, with or without notice, and without liability to you, if Guard ProStamp believes that you have breached any of these terms.

                        <br />

                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>4. USE OF THE PLATFORM</h3>
                    <Typography component="div">
                        Guard ProStamp grants you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the Guard ProStamp platform and downloadable through the App Store and Google Play services free of charge, including but not limited to modified versions, updates, upgrades, enhancements, improvements, additions, additions and copies, if any. This license is for the sole purpose of allowing you to use the features available on the platform in the manner permitted by these terms. You may not copy, modify, distribute, sell or lease any part of our platform or the included software, nor may you reverse engineer or attempt to extract the source code of such software, unless such restrictions are prohibited by law, or unless you have our written permission.
                        <br />
                        <br />
                        There are two types of users on the platform:
                        <br />
                        <ul>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Professionals</span>     will be able to register on the platform to create and provide information on projects and facilitate the verification of such projects through their professional license.

                            </li>
                            <li>
                                <span style={{ fontWeight: 'bold' }}>Reviewers</span>     Reviewers will be able to perform project verifications by providing the professional's license number through the platform. Reviewers may verify project information within the platform according to the professional's license number.
                            </li>
                        </ul>

                        <br />
                        Users may not copy, modify, distribute, sell or lease any part of our platform or the included software, nor may they reverse engineer or attempt to extract the source code of such software, unless such restrictions are prohibited by law, or unless they have our written permission.
                        <br />

                        You agree not to use the platform in a negligent, fraudulent or unlawful manner. The user also agrees not to engage in any conduct or action that could damage the image, interests or rights of Guard ProStamp or any third party.
                        <br />
                        <br />
                        Guard ProStamp reserves the right to terminate the user's access immediately, with or without notice, and without liability to the user, if Guard ProStamp considers that the user has breached any of these conditions.


                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}> 5. COPYRIGHT</h3>
                    <Typography component="div">

                        All materials on Guard ProStamp, including, without limitation, names, logos, trademarks, games, images, text, columns, graphics, videos, photographs, illustrations, software and other elements are protected by copyrights, trademarks and/or other intellectual property rights owned and controlled by Guard ProStamp or by third parties that have licensed or otherwise provided their material to the platform. You acknowledge and agree that all Materials on Guard ProStamp are made available for limited, non-commercial, personal use only. Except as specifically provided herein. No material may be copied, reproduced, republished, sold, downloaded, posted, transmitted, or distributed in any way, or otherwise used for any purpose, by any person or entity, without Guard ProStamp prior express written permission. You may not add, delete, distort, or otherwise modify the material. Any unauthorized attempt to modify any material, to defeat or circumvent any security features, or to utilize Guard ProStamp or any part of the material for any purpose other than its intended purposes is strictly prohibited.

                    </Typography>


                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}> 6. PROHIBITED ACTIVITIES</h3>
                    <Typography component="div">

                        The content and information available on the platform (including, but not limited to, data, information, text, music, sound, photos, graphics, video, maps, icons or other material), as well as the infrastructure used to provide such content and information, is proprietary to Guard ProStamp or licensed to the Guard ProStamp by third parties. For all content other than your content, you agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or re-sell any information, software or services obtained from or through the platform. In addition, the following activities are prohibited:
                        <br />

                        <ul>
                            <li>
                                The content and information available on the platform (including, but not limited to, data, information, text, music, sound, photos, graphics, video, maps, icons or other material), as well as the infrastructure used to provide such content and information, is proprietary to Guard ProStamp or licensed to the Guard ProStamp by third parties. For all content other than your content, you agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or re-sell any information, software or services obtained from or through the platform. In addition, the following activities are prohibited:

                            </li>
                            <li>
                                Access, monitor, reproduce, distribute, transmit, broadcast, display, sell, license, copy or otherwise exploit any content of the services, including but not limited to, using any robot, spider, scraper or other automated means or any manual process for any purpose not in accordance with this agreement or without our express written permission.

                            </li>
                            <li>
                                Violate the restrictions in any robot exclusion headers on the services or bypass or circumvent other measures employed to prevent or limit access to the services.
                                Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure.

                            </li>
                            <li>
                                "Frame", "mirror" or otherwise incorporate any part of the platform into any other websites or platform without our prior written authorization.
                            </li>
                            <li>
                                Attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software programs used by Guard ProStamp.
                            </li>
                            <li>
                                Circumvent, disable or otherwise interfere with security-related features of the platform or features that prevent or restrict use or copying of any content.
                            </li>
                        </ul>
                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>7. DISCLAIMER OF WARRANTIES </h3>
                    <Typography component="div" >
                        Because of the nature of the Internet Guard ProStamp provides and maintains the platform on an "as is", "as available" basis and makes no promise that use of the platform will be uninterrupted or entirely error free. We are not responsible to you if we are unable to provide our Internet services for any reason beyond our control.
                        <br />
                        <br />
                        Except as provided above we can give no other warranties, conditions or other terms, express or implied, statutory or otherwise and all such terms are hereby excluded to the maximum extent permitted by law.
                        <br />
                        <br />
                        You will be responsible for any breach of these terms by you and if you use the platform in breach of these terms you will be liable to and will reimburse Guard ProStamp for any loss or damage caused as a result.
                        <br />
                        <br />
                        Guard ProStamp shall not be liable for any amount for failure to perform any obligation under this Agreement if such failure is due to the occurrence of any unforeseen event beyond its reasonable control, including, without limitation, Internet outages, communications outages, fire, flood, or any uncontrollable act of nature.
                        <br />
                        <br />
                        These terms do not affect your statutory rights as a consumer which are available to you.
                        <br />
                        <br />
                        Subject as aforesaid, to the maximum extent permitted by law, Guard ProStamp excludes liability for any loss or damage of any kind howsoever arising, including without limitation any direct, indirect or consequential loss whether or not such arises out of any problem you notify to Guard ProStamp and Guard ProStamp shall have no liability to pay any money by way of compensation, including without limitation all liability in relation to:

                        <ul>
                            <li>
                                Any incorrect or inaccurate information on the platform.

                            </li>
                            <li>
                                The infringement by any person of any Intellectual Property Rights of any third party caused by their use of the platform.
                            </li>
                            <li>
                                Any loss or damage resulting from your use or the inability to use the platform or resulting from unauthorized access to, or alteration of your transmissions or data in circumstances which are beyond our control.

                            </li>
                            <li>
                                Any loss of profit, wasted expenditure, corruption or destruction of data or any other loss which does not directly result from something we have done wrong.

                            </li>
                            <li>
                                All representations, warranties, conditions and other terms which but for this notice would have effect.

                            </li>
                        </ul>

                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>8. INDEMNIFICATION</h3>
                    <Typography component="div">
                        You agree to defend and indemnify Guard ProStamp from and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature including but not limited to reasonable legal and accounting fees, brought by third parties as a result of:
                        <ul>
                            <li>
                                Your breach of this agreement or the documents referenced herein.


                            </li>
                            <li>

                                Your violation of any law or the rights of a third party.

                            </li>
                            <li>

                                Your use of the Guard ProStamp Inc platform.

                            </li>
                        </ul>
                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>9. CHANGES AND TERMINATION</h3>
                    <Typography component="div">
                        We may change the platform and these terms at any time, in our sole discretion and without notice to you. You are responsible for remaining knowledgeable about these terms. Your continued use of the platform constitutes your acceptance of any changes to these terms and any changes will supersede all previous versions of the terms. Unless otherwise specified herein, all changes to these terms apply to all users take effect. Furthermore, we may terminate this agreement with you under these terms at any time by notifying you in writing (including by email) or without any warning.

                    </Typography>
                    <h3 style={{ fontSize: isSmallScreen ? '13px' : '16px', }}>   10. INTEGRATION CLAUSE</h3>
                    <Typography component="div">

                        This agreement together with the privacy policy and any other legal notices published by Guard ProStamp, shall constitute the entire agreement between you and Guard ProStamp concerning and governs your use of the platform.
                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '13px' : '16px', }}>   11. DISPUTES</h3>
                    <Typography component="div">

                        The user agrees that any dispute, claim or controversy arising out of or relating to these terms and conditions, or the breach, termination, enforcement, interpretation or validity thereof or the use of the platform, shall be resolved by binding arbitration between the user and Guard ProStamp, provided that each party retains the right to bring an individual action in a court of competent jurisdiction.
                        <br />
                        <br />
                        In the event that a dispute arises in connection with the use of the platform or breach of these terms and conditions, the parties agree to submit their dispute to arbitration resolution before a reputable arbitration organization as mutually agreed by the parties and in accordance with applicable commercial arbitration rules.
                        <br />
                        <br />
                        To the fullest extent permitted by law, you agree that you will not file, join or participate in any class action lawsuit in connection with any claim, dispute or controversy that may arise in connection with your use of the platform.
                        <br />
                        <br />
                        The courts of the United States, specifically the courts located in the State of Delaware, shall have jurisdiction over any dispute, controversy or claim relating to Guard ProStamp and its business operations. Any such dispute or controversy shall be brought and resolved in the courts of the United States, specifically the courts located in the State of Delaware.
                    </Typography>

                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>12. FINAL PROVISIONS</h3>
                    <Typography component="div">


                        These terms and conditions are governed by the laws of the United States. Use of the Guard ProStamp platform is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions.
                        <br />
                        <br />
                        Our performance of these terms is subject to existing laws and legal process, and nothing contained in these terms limits our right to comply with law enforcement or other governmental or legal requests or requirements relating to your use of our platform or information provided to or gathered by us with respect to such use.
                        <br />
                        <br />
                        If any part of these terms is found to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions will not in any way be affected or impaired. Our failure or delay in enforcing any provision of these terms at any time does not waive our right to enforce the same or any other provision(s) hereof in the future.
                        Any rights not expressly granted herein are reserved.
                    </Typography>


                    <h3 style={{ fontSize: isSmallScreen ? '15px' : '16px', }}>13. CONTACT INFORMATION</h3>
                    <Typography component="div"  style={{marginBottom:"50px"}}>

                        If you have questions or concerns about these terms, please contact us using the contact information below:
                        <br />
                        <br />
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