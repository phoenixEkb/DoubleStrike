#pragma strict

var nextlevel : String;

function Start () 
{
	
}
	
function Update () 
{
	
}
	
function OnTriggerEnter2D (col : Collider2D)
{	
    if (col.gameObject.tag == "Player")
	{   
		Destroy(col.gameObject);
		Application.LoadLevel(nextlevel);	
    }
}

