#pragma strict

var keyCounter : GameObject;

function Start () 
{
    keyCounter = GameObject.Find("score_hp_keys_UI");
}
	
function Update () 
{

}
	
function OnTriggerEnter2D (col:Collider2D) 
{       
	if (col.gameObject.tag == "Player") 
	{   
		keyCounter.GetComponent(score_HP_keys_UI_script).keyCount++;
		Destroy(gameObject);
	}
}