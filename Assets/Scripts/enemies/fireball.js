#pragma strict

function Start () 
{
    
}

function Update () 
{
	
}

function OnCollisionEnter2D (col : Collision2D) 
{
    if ((col.gameObject.tag == "Platform") || (col.gameObject.tag == "Player") || (col.gameObject.tag == "Box") || (col.gameObject.tag == "Enemy") || (col.gameObject.tag == "levelTop") || (col.gameObject.tag == "levelBottom"))
        Destroy(gameObject);
}

function OnTriggerEnter2D (col : Collider2D) 
{
    Destroy(gameObject, 3);
}