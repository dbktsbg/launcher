
function InitializeLauncher() 
{
    //SetupToLaunchCloudVoteParticipant();
    LaunchParticipantWebApp();
}


function LaunchParticipantWebApp()
{
    var DeviceID = device.uuid;
    var ARCloudWebAPIAddress = "http://meridiasswebsite.cloudapp.net/Participant/JoinUsingMeridiaDevice";
    open(ARCloudWebAPIAddress + "/Participant/JoinUsingMeridiaDevice/" + DeviceID);
}

