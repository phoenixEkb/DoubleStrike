#pragma strict

var startPosition : Vector2;
var currentPosition : Vector2;
var punchRange = 5;
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
        if (Mathf.Abs(currentPosition.x - startPosition.x) > punchRange)
            Destroy(gameObject);
    }
}

function OnCollisionEnter2D (col : Collision2D) 
{
    if (col.gameObject.tag == "Box" || col.gameObject.tag == "Platform" || col.gameObject.tag == "Enemy")
        Destroy(gameObject);
}