
function InitializeLauncher() 
{
    //SetupToLaunchCloudVoteParticipant();
    LaunchParticipantWebApp();
}


function LaunchParticipantWebApp()
{
    var DeviceID = device.uuid;
    var ARCloudWebAPIAddress = "http://meridiasswebsite.cloudapp.net/Participant/JoinUsingMeridiaDevice";

    alert("ARCloudWebAPIAddress + " / Participant / JoinUsingMeridiaDevice / " + DeviceID");

    open(ARCloudWebAPIAddress + "/Participant/JoinUsingMeridiaDevice/" + DeviceID);
}

