#pragma strict

var startPosition : Vector2;
var currentPosition : Vector2;
var fireRange = 10;
var player : Transform;
var direction : float; 

function Start () 
{
    startPosition = transform.position;
    direction = -(player.position.x- transform.position.x) / Mathf.Abs(player.position.x- transform.position.x);
}

function Update () 
{
    if (GameObject.Find("pause").GetComponent(pause).menu == false) 
	{
    	currentPosition = transform.position;
    	if (Mathf.Abs(currentPosition.x - startPosition.x) > fireRange)
        	Destroy(gameObject);
    }
}

function OnCollisionEnter2D (col : Collision2D) 
{
    if (col.gameObject.tag == "Box" || col.gameObject.tag == "Platform" || col.gameObject.tag == "Enemy" || col.gameObject.name == "prison_closed_door" || col.gameObject.name == "prison_opened_door")
        Destroy(gameObject);
}