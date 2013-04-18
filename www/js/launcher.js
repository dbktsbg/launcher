
function InitializeLauncher() 
{
    //SetupToLaunchCloudVoteParticipant();
    LaunchParticipantWebApp();
}


function LaunchParticipantWebApp()
{
    var DeviceID = device.uuid;

    var ARCloudWebsiteBaseAddress = "http://meridiasswebsite.cloudapp.net" ;
    var ARCloudWebsiteController = "/Participant";
    var ARCloudWebsiteAction = "/JoinUsingMeridiaDevice";
    var ARCloudWebsiteQueryString = "?DeviceID=";
    var ARCloudWebsiteURL = ARCloudWebsiteBaseAddress + ARCloudWebsiteController + ARCloudWebsiteAction + ARCloudWebsiteQueryString + DeviceID;

    alert(ARCloudWebsiteURL);
    open(ARCloudWebsiteURL);

}

