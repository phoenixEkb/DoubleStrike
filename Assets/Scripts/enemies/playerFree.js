#pragma strict

var enemy : attractiveEnemy;

function Start () 
{

}

function Update () 
{

}

function Awake () 
{
    enemy = gameObject.GetComponentInParent(attractiveEnemy);
}

function OnTriggerStay2D (col : Collider2D) 
{
    if(col.gameObject.tag == "Player") 
	{
    	if (GameObject.Find("CharacterChanger").GetComponent(CharacterChange).active == 1)
    		GameObject.Find("player1").GetComponent(Rigidbody2D).gravityScale = 1;
    	else
    		GameObject.Find("player2").GetComponent(Rigidbody2D).gravityScale = 1;
    }
}
