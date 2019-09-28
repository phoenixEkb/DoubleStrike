#pragma strict

var nextLevel : String;

function Start () 
{

}

function Update () 
{
	transform.localPosition.z += 5 * Time.deltaTime;
    transform.localPosition.y += 2.5 * Time.deltaTime;
	
	if(Input.GetKeyDown(KeyCode.Space)) 
		Application.LoadLevel(nextLevel);
}