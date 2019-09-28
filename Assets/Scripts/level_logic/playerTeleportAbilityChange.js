#pragma strict

function Start () 
{

}

function Update () 
{

}

function OnCollisionEnter2D (col: Collision2D)
{
    if(col.gameObject.tag == "Player")
	{
        if (gameObject.tag == "LevelTop")
		{
            col.gameObject.GetComponent(characterController).canTeleportUp = false;
            col.gameObject.GetComponent(characterController).canTeleportDown = true;
        } 
		else if (gameObject.tag == "LevelBottom")
		{
            col.gameObject.GetComponent(characterController).canTeleportDown = false;
            col.gameObject.GetComponent(characterController).canTeleportUp = true;
        } 
		else
		{
            col.gameObject.GetComponent(characterController).canTeleportUp = true;
            col.gameObject.GetComponent(characterController).canTeleportDown = true;
        }
    }
}