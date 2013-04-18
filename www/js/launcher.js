
function InitializeLauncher() 
{
    //SetupToLaunchCloudVoteParticipant();
    alert("InitializeLauncher");
    LaunchParticipantWebApp();
}


function LaunchParticipantWebApp()
{
    alert("LaunchParticipantWebApp");

    var DeviceID = device.uuid;
    var ARCloudWebAPIAddress = "http://meridiasswebsite.cloudapp.net/Participant/JoinUsingMeridiaDevice";

    alert(ARCloudWebAPIAddress + " / Participant / JoinUsingMeridiaDevice / " + DeviceID);

    open(ARCloudWebAPIAddress + "/Participant/JoinUsingMeridiaDevice/" + DeviceID);
}

