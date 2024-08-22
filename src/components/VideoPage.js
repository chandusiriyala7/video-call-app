import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';

const VideoPage = () => {
    const { id } = useParams();
    const roomId = id;
    const meetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            try {
                // Generate Kit Token
                const appID = APP_ID;
                const serverSecret = SERVER_SECRET;
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    roomId,
                    Date.now().toString(),
                    roomId
                );

                // Create instance object from Kit Token.
                const zp = ZegoUIKitPrebuilt.create(kitToken);
                
                // Start the call
                zp.joinRoom({
                    container: meetingRef.current,
                    sharedLinks: [
                        {
                            name: 'Personal link',
                            url:
                                window.location.protocol + '//' +
                                window.location.host + window.location.pathname +
                                '?roomID=' + roomId,
                        },
                    ],
                    scenario: {
                        mode: ZegoUIKitPrebuilt.GroupCall, // or ZegoUIKitPrebuilt.OneONoneCall
                    },
                });
            } catch (error) {
                console.error("Failed to join the room:", error);
            }
        };

        myMeeting();
    }, [roomId]);

    return (
        <div ref={meetingRef} style={{ width: '100%', height: '100vh' }}>
            {/* ZegoUIKitPrebuilt will render the video call UI here */}
        </div>
    );
};

export default VideoPage;
