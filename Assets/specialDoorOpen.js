#pragma strict

private var pauseObject : GameObject;

function Start () 
{
    pauseObject = GameObject.Find("pause");
}

function Update () 
{
    if (pauseObject.GetComponent(pause).menu == false)
        if (!GameObject.FindWithTag("Computer"))
            Destroy(gameObject, 2);
}


