
function InitializeLauncher() 
{
    //SetupToLaunchCloudVoteParticipant();
    LaunchParticipantWebApp();
}


function LaunchParticipantWebApp()
{
    var DeviceID = device.uuid;

    var ARCloudWebsiteBaseAddress = "http://meridiaprowebsite.cloudapp.net" ;
    var ARCloudWebsiteController = "/Participant";

    var ARCloudWebsiteAction = "/Join";
    /* var ARCloudWebsiteAction = "/JoinUsingMeridiaDevice"; */

    var ARCloudWebsiteQueryString = "?DeviceID=";

/*    var ARCloudWebsiteURL = ARCloudWebsiteBaseAddress + ARCloudWebsiteController + ARCloudWebsiteAction + ARCloudWebsiteQueryString + DeviceID; */

    var ARCloudWebsiteURL = ARCloudWebsiteBaseAddress + ARCloudWebsiteController + ARCloudWebsiteAction;

    /* alert(ARCloudWebsiteURL); */
    open(ARCloudWebsiteURL);

}

