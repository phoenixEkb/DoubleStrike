#pragma strict

var keyPicked : boolean = false;
var keyName : String;

function Start () 
{

}

function Update () 
{
    if (GameObject.Find("pause").GetComponent(pause).menu == false)
        if (!GameObject.Find(keyName))
            Destroy(gameObject, 2);
}