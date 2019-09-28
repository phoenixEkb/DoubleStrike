#pragma strict

function Start () 
{


}

function Update () 
{

}

function OnTriggerEnter2D (col : Collider2D) 
{
    if (col.gameObject.tag == "Player") 
        Destroy(gameObject);
}

